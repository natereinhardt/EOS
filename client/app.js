(function (angular) {
    'use strict';
    var app = angular.module('eos', [
        'ngMaterial',
        'ngRoute',
        'ngResource',
        'eos.topNavCtrl',
        'eos.opsCtrl',
        'eos.dashboardCtrl',
        'eos.priceAdmin'
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
        $routeProvider.when(
            '/priceAdmin', {
                templateUrl: 'priceAdmin/priceAdmin.html',
                pageName: 'Payout Price Admin Panel'
            });
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);

    }]);

   app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('deep-orange');
    });

}(window.angular));


