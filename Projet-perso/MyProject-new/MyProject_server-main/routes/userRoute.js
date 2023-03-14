const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth")
const ControlEmail = require('../middleware/ControlEmail');
const multer = require("multer");
const app = express();

// Type de fichiers acceptés
const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
  }
  const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error("Invalide format d'image")
        if(isValid){
            uploadError = null
        }
      cb(uploadError, 'public/uploads/')
    },
    filename:  (req, file, cb) => {
        
      const fileName = file.originalname.split(' ').join('-')
      const extension = FILE_TYPE_MAP[file.mimetype]
      cb(null, `${fileName}-${Date.now()}.${extension}` )
    }
  })
  
  const MAX_SIZE = 1 * 1000 * 1000;
  
  const uploadOptions = multer({ storage: storage, limits: {fileSize: MAX_SIZE} })




//création d'un user ou inscription
router.post("/register", async(req, res)=> {
    console.log("Test User");
    try {
        const searchUser = await User.findOne({email: req.body.email});
        if(searchUser) {
            console.log("utilisateur existant")
            return res
                .status(403)
                .json({message: `L'utilisateur ${searchUser.email} existe déjà`, status: 403});
        }
        //on injecte les données recueillies dans le body de la requête dans un objet de type user
        const user = new User(req.body);
        //on persiste les données
        const newUser = await user.save();
        console.log("création réussie");
        //on envoie un message dans la réponse
        return res
            .status(201)
            .json({message: `l'utilisateur ${newUser.login} a été créé`, status: 201});
    } catch(error) {
        return res
            .status(500)
            .json({message: error.message, status: 500})
    }
    }
);

// connexion
router.post("/login", async(req, res) => {
    try{
        //dans le body on va retrouver email et pwd
        //! récupérer le user grâce à son email
        //! vérifier s'il existe
        //! vérifier le pwd
        console.log("Login: "+ req.body);
        const user = await User.findOne({ email: req.body.email });
        if(!user) {
            return res
            .status(400)
            .json({message: "cet utilisteur n'existe pas", statut: 400})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if(!isMatch) {
            return res
            .status(400)
            .json({message: "mot de passe incorrect", status: 400});
        }
        //les informations qui seront présentes dans le token
        //! ne pas mettre ici d'informations trop confidentielles car elles seront envoyées vers le front et pourront être potentiellement décryptées
        const payload = {
            id: user._id,
            login: user.login,
            email: user.email,
            isAdmin: user.isAdmin,
            image: user.image
        }
        //on encrypte le token à envoyer vers le front
        const token = jwt.sign(payload, process.env.PRIVATE_KEY, {expiresIn: '2hours'});
        
        //on envoie le token et les informations sur le user (non confidentielles) vers le front. Envoyer ces informations permettra d'y accéder plus facilement sans avoir besoin de refaire une requête pour les obtenir à nouveau.
        return res
        .status(200)
        .json({message: {
            token: token,
            user: {
            email: user.email,
            login: user.login,
            userId: user._id,
            admin: user.isAdmin,
            image: user.image
        }
        }});
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
})

//récupération de tous les users
router.get("/", auth, async(req, res) => {
    try {
        //! cette route contient une condition qui permet de tester si l'utilisateur qui l'appelle a le role admin. Elle doit être associé à auth, donné en argument à la méthode.
        if(!req.payload.isAdmin) {
            return res.status(403).json("Vous n'êtes pas autorisé")
        }
        const userList = await User.find().sort("login");
        res.status(200).json(userList)
    } catch (error) {
        res.json(error.message)
    }
})

//récupération d'un user par son id
router.get("/:id", async(req, res) => {
   
    try {
        //! cette route contient une condition qui permet de tester si l'utilisateur qui l'appelle a le role admin. Elle doit être associé à auth, donné en argument à la méthode.
        // if(!req.payload.isAdmin) {
        //     console.log("demande non autorisée");
        //     return res.status(403).json("Vous n'êtes pas autorisé")
        // }
        const user = await User.findById(req.params.id);
        console.log(user);
        res.status(200).json(user)
    } catch (error) {
        res.json(error.message)
    }
})



//mise à jour d'un user
//! attention cette méthode ne prévoit pas la modification de l'email : si on désire modifier l'email, il faudrait vérifier au préalable s'il existe déjà dans la bdd
router.put("/update/:id", uploadOptions.single("image"), async(req, res) => {
    try {
        let file = req.file
        let imagepath;
        
        
       
        const userId = await User.findById(req.params.id)
        if(!userId) return res.status(400).send('Aucun utilisateur trouvé')

        if(file){
            const fileName = req.file.filename;
            const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`
            imagepath = `${basePath}${fileName}`
        }else{
                imagepath = userId.image; 
        }
        // console.log(req.payload.isAdmin);
        //! cette route contient une condition qui permet de tester si l'utilisateur qui l'appelle a le role admin. Elle doit être associé à auth, donné en argument à la méthode.
        // if(!req.payload.isAdmin) {
        //     return res.status(403).json("Vous n'êtes pas autorisé")
        // }
        const user = await User.findByIdAndUpdate(req.params.id, {
            
            login: req.body.login,
            isAdmin: req.body.isAdmin,
            image: imagepath


        });

       user
        return res
        .status(200).json({statut: 200, message: "utilisateur mis à jour"})
    } catch (error) {
        res.status(500).json(error.message)
    }
})



router.delete("/delete/:id", auth, async (req, res) => {
    try {
        if(!req.payload.isAdmin) {
            return res.status(403).json("Vous n'êtes pas autorisé")
        }
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({statut: 404, message: "Cet utilisateur n'existe pas"});
        }
        //todo si on veut que seul l'auteur puisse supprimer son article c'est ici qu'il faut mettre une condition de test
        await user.remove();
        return res
        .status(200).json({statut: 200, message: "Utilisateur supprimé"})
    } catch (error) {
        res.status(500).json(error.message)
    }
})



module.exports = router;