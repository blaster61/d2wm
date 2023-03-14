// Import des dépendances
// const MongoClient = require('mongodb').MongoClient;

// // Configuration de la connexion à la base de données MongoDB
// const url = 'mongodb://localhost:27017';
// const dbName = 'myapp';

// // Fonction pour récupérer tous les articles
// function getAllArticles(callback) {
//     // Connexion à la base de données
//     MongoClient.connect(url, function (err, client) {
//         if (err) {
//             console.log('Erreur de connexion à la base de données :', err);
//             callback(err, null);
//             return;
//         }

//         // Sélection de la collection 'articles'
//         const db = client.db(dbName);
//         const collection = db.collection('articles');

//         // Recherche de tous les articles
//         collection.find({}).toArray(function (err, docs) {
//             if (err) {
//                 console.log('Erreur lors de la recherche des articles :', err);
//                 callback(err, null);
//                 return;
//             }

//             // Fermeture de la connexion à la base de données
//             client.close();

//             // Renvoi des articles trouvés à travers le callback
//             callback(null, docs);
//         });
//     });
// }

// // Exportation de la fonction pour être utilisée dans d'autres fichiers Node.js
// module.exports = { getAllArticles: getAllArticles };

