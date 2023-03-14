const { body, validationResult } = require('express-validator');

function ControlEmail(req, res, next) {
  // Ajouter la validation de l'e-mail avec express-validator
  body('email').isEmail().withMessage('L\'adresse e-mail n\'est pas valide')(req, res, next);
}

module.exports = ControlEmail;
