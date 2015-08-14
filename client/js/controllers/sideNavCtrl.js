(function (angular){
    'use strict';
    var ngModule = angular.module('eos.sideNavCtrl', ['ngMaterial']);


    ngModule.controller('sideNavCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

    }]);

}(window.angular));