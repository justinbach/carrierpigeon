'use strict';

angular.module('carrierpigeon.pigeons').controller('PigeonsController', ['$scope', '$routeParams', '$location', 'Global', 'Pigeons', function ($scope, $routeParams, $location, Global, Pigeons) {
    $scope.global = Global;

    $scope.create = function() {
        var pigeon = new Pigeons({
            message: this.message
        });
        pigeon.$save(function(response) {
            $location.path('pigeons/' + response._id);
        });

        this.title = '';
        this.content = '';
    };

    $scope.remove = function(pigeon) {
        if (pigeon) {
            pigeon.$remove();

            for (var i in $scope.pigeons) {
                if ($scope.pigeons[i] === pigeon) {
                    $scope.pigeons.splice(i, 1);
                }
            }
        }
        else {
            $scope.pigeon.$remove();
            $location.path('pigeons');
        }
    };

    $scope.update = function() {
        var article = $scope.pigeon;
        if (!pigeon.updated) {
            pigeon.updated = [];
        }
        pigeon.updated.push(new Date().getTime());

        pigeon.$update(function() {
            $location.path('pigeons/' + pigeon._id);
        });
    };

    $scope.find = function() {
        Pigeons.query(function(pigeons) {
            $scope.pigeons = pigeons;
        });
    };

    $scope.findOne = function() {
        Pigeons.get({
            pigeonId: $routeParams.pigeonId
        }, function(pigeon) {
            $scope.pigeon = pigeon;
        });
    };
}]);