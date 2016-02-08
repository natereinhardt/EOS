(function (angular) {
    'use strict';
    var ngModule = angular.module('eos.topNavCtrl', ['ngMaterial']);


    ngModule.controller('topNavCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil) {
        $scope.toggleRight = buildToggler('right');
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                    });
            }, 200);
            return debounceFn;
        }

        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                });
        };
    });
}(window.angular));