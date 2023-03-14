const articleModule = require('./Articles');

articleModule.getAllArticles(function(err, articles) {
  if (err) {
    console.log('Erreur lors de la récupération des articles :', err);
    return;
  }
  
  console.log('Articles trouvés :', articles);
});
