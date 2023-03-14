const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const auth = require("../middleware/auth")
const multer = require('multer');
const path = require('path');
const User = require("../models/User");

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
  //création d'un post
  router.post("/new",uploadOptions.single("image"), async (req, res)=> {
      try {
  
          console.log(req.body.formData);
          console.log(req.file);
          
          const file = req.file;

          let post;
        

        //   Si le champ image est obligatoire, il faut décommenter la ligne ci-dessous
        //   if(!file) return res.status(400).json("Pas d'image dans la requête")
          if(file){

            const fileName = req.file.filename
  
           const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`
          //on stocke les valeurs récupérées dans le body de la reqsuête, envoyées depuis le front, dans un objet de type Post
           post = new Post({
              author: req.body.author,
              title: req.body.title,
              content: req.body.content,
              image: `${basePath}${fileName}`
          });
       
          }else{
         post = new Post({
                author: req.body.author,
                title: req.body.title,
                content: req.body.content,
            
            });
           
          }
          
  
          //on persiste le post dans la bdd. La méthode save() nous retourne une copie de post, stockée dans newPost
          const newPost = await post.save();
  
          console.log("création réussie");
          //on envoie une réponse vers le front pour dire que tout s'est bien passé, ainsi que le post lui même, stocké dans la réponse
          return res
              .status(201)
              .json({message: `l'article ${newPost.title} a été créé`, post: newPost});
      
          } catch(error) {
          return res
              .status(500)
              .json({message: error.message, status: 500})
      }
      }
  );
  router.post("/add-comment/:id", async (req,res) =>{
    
    try {
        const {id} = req.params
        // console.log(req.body.idAuthor);
        const user = await User.findById(req.body.idAuthor)
        const resultImg = user
        console.log(resultImg.image);
    
        let comment = {
            login: req.body.login,
            comment: req.body.comment,
            date: new Date(),
            image: resultImg.image
        }
        console.log(comment);
        const post = Post.updateOne({_id: id},{$push: {comments:comment}})
        if(!post) {
            return res.status(404).json({statut: 404, message: "cet article n'existe pas"});
        }
        //todo si on veut que seul l'auteur puisse mettre à jour son article c'est ici qu'il faut mettre une condition de test. Ici cette sécurisation a été mise en place côté front (voire client\src\app\components\edit-user\edit-user.component.ts)
        await post
        return res
        .status(200).json({statut: 200, message: "Commentaire inséré avec succès"})
    } catch (error) {
        res.status(500).json(error.message)
    }
   
})
router.post("/search", async (req, res) => {
    // db.articles.createIndex( { subject: "text" } )
console.log(req.body.search);
    const inputSearch = req.body.query
    console.log(inputSearch);
    
     const post = await Post.find({$text: {$search: inputSearch, $language:"fr"}})

     await post

     res
     .status(200)
     .json(post)
})

//récupérer tous les posts
router.get("/", async(req, res) => {
    try {
        const result = await Post.find().sort("-createdAt").populate("author")
      
        
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//récupérer un post par son id
router.get("/:id", async(req, res) => {
    try {

        const post = await Post.findById(req.params.id).sort([['comments.date', -1]])
       console.log(post);
        res.status(200).json(post)
    } catch (error) {
        res.json(error.message)
    }
})

//supprimer un post
router.delete("/delete/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({statut: 404, message: "cet article n'existe pas"});
        }
        //todo si on veut que seul l'auteur puisse supprimer son article c'est ici qu'il faut mettre une condition de test
        await post.remove();
        return res
        .status(200).json({statut: 200, message: "article supprimé"})
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.put("/delete-comment/:id", async(req, res) => {
    const {idComment} = req.body
    console.log(idComment);
    try {
        const post = await Post.updateOne({_id:req.params.id},{$pull: {comments: {_id: idComment}}});
        if(!post) {
            return res.status(404).json({statut: 404, message: "Ce commentaire n'existe pas"});
        }
        //todo si on veut que seul l'auteur puisse supprimer son article c'est ici qu'il faut mettre une condition de test
        await post
        return res
        .status(200).json({statut: 200, message: "Commentaire supprimé"})
    } catch (error) {
        res.status(500).json(error.message)
    }
})





//mettre à jour un post
router.put("/update/:id", uploadOptions.single("image"), async(req, res) => {
    try {
        let file = req.file
        let imagepath;
        
        
       
        const postId = await Post.findById(req.params.id)
        if(!postId) return res.status(400).send('Aucun article trouvé')

        if(file){
            const fileName = req.file.filename;
            const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`
            imagepath = `${basePath}${fileName}`
        }else{
                imagepath = postId.image; 
        }
        // console.log(req.payload.isAdmin);
        //! cette route contient une condition qui permet de tester si l'utilisateur qui l'appelle a le role admin. Elle doit être associé à auth, donné en argument à la méthode.
        // if(!req.payload.isAdmin) {
        //     return res.status(403).json("Vous n'êtes pas autorisé")
        // }
        const post = await Post.findByIdAndUpdate(req.params.id, {
            
            title: req.body.title,
            content: req.body.content,
            image: imagepath


        });
console.log(post);
       post
        return res
        .status(200).json({statut: 200, message: "Post mis à jour"})
    } catch (error) {
        res.status(500).json(error.message)
    }
    
    
    // try {
    //     const post = await Post.findById(req.params.id);
    //     if(!post) {
    //         return res.status(404).json({statut: 404, message: "cet article n'existe pas"});
    //     }
    //     //todo si on veut que seul l'auteur puisse mettre à jour son article c'est ici qu'il faut mettre une condition de test. Ici cette sécurisation a été mise en place côté front (voire client\src\app\components\edit-user\edit-user.component.ts)
    //     await post.updateOne(req.body);
    //     return res
    //     .status(200).json({statut: 200, message: "article mis à jour"})
    // } catch (error) {
    //     res.status(500).json(error.message)
    // }
})

module.exports = router;