'use strict';

//Pigeons service used for pigeons REST endpoint
angular.module('carrierpigeon.pigeons').factory('Pigeons', ['$resource', function($resource) {
    return $resource('pigeons/:pigeonId', {
        pigeonId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);