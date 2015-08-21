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
               templateUrl: 'views/dashboard.html',
               pageName: 'Dashboard',
               controller: 'dashboardCtrl'
           });
        $routeProvider.when(
            '/login', {
                templateUrl: 'views/login.html',
                pageName: 'Login'
            });
        $routeProvider.when(
            '/signup', {
                templateUrl: 'views/signUp.html',
                pageName: 'SignUp'
            });
        $routeProvider.when(
           '/ops', {
                templateUrl: 'views/ops.html',
                pageName: 'Operations',
                controller: 'opsCtrl'
            });
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);

    }]);

   app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-orange')
            .accentPalette('orange');
    });

}(window.angular));


