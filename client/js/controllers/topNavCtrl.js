(function (angular) {
    'use strict';
    var ngModule = angular.module('eos.topNavCtrl', ['ngMaterial']);


    ngModule.controller('topNavCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
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
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
            return debounceFn;
        }

        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    });
}(window.angular));