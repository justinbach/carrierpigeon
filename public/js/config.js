'use strict';

//Setting up route
angular.module('carrierpigeon').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/pigeons', {
            templateUrl: 'views/pigeons/list.html'
        }).
        when('/pigeons/create', {
            templateUrl: 'views/pigeons/create.html'
        }).
        when('/pigeons/:pigeonId/edit', {
            templateUrl: 'views/pigeons/edit.html'
        }).
        when('/pigeons/:pigeonId', {
            templateUrl: 'views/pigeons/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('carrierpigeon').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);