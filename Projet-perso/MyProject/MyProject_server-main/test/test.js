const Post = require('../models/Post');
const assert = require('assert');

describe(' crud  post', () => {
    it('Post créé et trouvé', () => {
        const test =  new Post({
            author: 'testpost',
            title: 'testpost',
            content: 'testpost',
            
        });
        console.log(test);
         test.save().then(() => {
            assert(test.isNew);
            done();
         })
    })
    it('Post effacé et non trouvé'), done => {
        Post.findByIdAndDelete({title: "testpost"})
        .then(() => Post.findOne({title: "testpost"}))
        .then(Post => {
            assert(Post === null);
            done();
        });
    }
})