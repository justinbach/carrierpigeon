'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Pigeon Schema
 */
var PigeonSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    // CRAZY IDEA: What if pigeons don't have a subject? Real mail doesn't...
//    subject: {
//        type: String,
//        default: '',
//        trim: true
//    },
    message: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    recipient: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    sent: {
        type: Boolean,
        default: false
    },
    read: {
        type: Boolean,
        default: false
    }
});

/**
 * Validations
 */
PigeonSchema.path('message').validate(function(message) {
    return message.length;
}, 'Message cannot be blank');

/**
 * Statics
 */
PigeonSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Pigeon', PigeonSchema);
