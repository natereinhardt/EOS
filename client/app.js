(function (angular) {
    'use strict';
    var app = angular.module('eos', [
        'ngMaterial',
        'ngRoute',
        'ngResource',
        'eos.topNavCtrl',
        'eos.opsCtrl',
        'eos.dashboardCtrl'
        ]);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
        $routeProvider.when(
           '/', {
               templateUrl: 'dashboard/dashboard.html',
               pageName: 'Dashboard'
           });
        $routeProvider.when(
           '/ops', {
                templateUrl: 'ops/ops.html',
                pageName: 'Operations'
            });
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);

    }]);

   app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('orange');
    });

}(window.angular));


