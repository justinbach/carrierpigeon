'use strict';

angular.module('carrierpigeon.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Pigeons',
        'link': 'pigeons'
    }, {
        'title': 'Create New Pigeon',
        'link': 'pigeons/create'
    }];
    
    $scope.isCollapsed = false;
}]);