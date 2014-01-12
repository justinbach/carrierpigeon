'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Article = mongoose.model('Pigeon'),
    _ = require('lodash');


/**
 * Find pigeon by id
 */
exports.pigeon = function(req, res, next, id) {
    Article.load(id, function(err, pigeon) {
        if (err) return next(err);
        if (!pigeon) return next(new Error('Failed to load pigeon ' + id));
        req.pigeon = pigeon;
        next();
    });
};

/**
 * Create a pigeon
 */
exports.create = function(req, res) {
    var pigeon = new Pigeon(req.body);
    pigeon.user = req.user;

    pigeon.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                pigeon: pigeon
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Update a pigeon
 */
exports.update = function(req, res) {
    var pigeon = req.pigeon;

    pigeon = _.extend(pigeon, req.body);

    pigeon.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                pigeon: pigeon
            });
        } else {
            res.jsonp(pigeon);
        }
    });
};

/**
 * Delete a pigeon - probably should remove this
 */
exports.destroy = function(req, res) {
    var pigeon = req.pigeon;

    pigeon.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                pigeon: pigeon
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Show a pigeon
 */
exports.show = function(req, res) {
    res.jsonp(req.pigeon);
};

/**
 * List of pigeons
 */
exports.all = function(req, res) {
    Pigeon.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(pigeons);
        }
    });
};