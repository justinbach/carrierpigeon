'use strict';

module.exports = function(app, passport, auth) {
    //User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);
    app.get('/users/me', users.me);

    //Setting up the users api
    app.post('/users', users.create);

    //Setting the local strategy route
    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: true
    }), users.session);

    //Finish with setting up the userId param
    app.param('userId', users.user);

    //Pigeon Routes
    var pigeons = require('../app/controllers/pigeons');
    app.get('/pigeons', pigeons.all);
    app.post('/pigeons', auth.requiresLogin, pigeons.create);
    app.get('/pigeons/:pigeonId', pigeons.show);
    app.put('/pigeons/:pigeonId', auth.requiresLogin, auth.pigeon.hasAuthorization, pigeons.update);
    app.del('/pigeons/:pigeonId', auth.requiresLogin, auth.pigeon.hasAuthorization, pigeons.destroy);

    //Finish with setting up the pigeonId param
    app.param('pigeonId', pigeons.pigeon);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};
