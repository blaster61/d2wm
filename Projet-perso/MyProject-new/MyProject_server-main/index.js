const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require("mongoose");
const cors = require("cors")
const helmet = require("helmet");
const multer = require("multer");

require("dotenv").config();
const Post = require("./models/Post");




app.use(cors());





app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({extended: true}));

app.use('/public/uploads', express.static(__dirname + '/public/uploads'))
const MONGO_URI = process.env.MONGO_URI;
mongoose.set('strictQuery', false)
mongoose.connect(MONGO_URI)
.then(()=>console.log("La connexion à la BDD est établie"))
.catch((error) => console.log(error))








const userRoute = require("./routes/userRoute");
app.use("/user", userRoute);
const postRoute = require("./routes/postRoute");


app.use("/post", postRoute);



const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Le serveur est à l'écoute sur le port ${PORT}`));
