const User = require('../models/User');
const assert = require('assert');
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log("La connexion à la BDD a été établie."))
    .catch((error) => console.log(error))

describe(' crud  user', () => {
    it('user créé et trouvé', () => {
        const test =  new User({
            login: 'testlogin',
            email: 'testemail',
            password: 'testpassword',
            isAdmin: 'testisAdmin',
        });
        console.log(test);
         test.save().then(() => {
            assert(test.isNew);
            done();
         })
    })
    it("user effacé et non trouvé", () => {
        const find = User.findOneAndDelete({ title: 'testuser' }).lean()
        find.then(() => {
            assert(find.title === 'testuser')
        })
    })
    }
)