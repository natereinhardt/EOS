(function (angular) {
    'use strict';
    var app = angular.module('eos', [
        'ngRoute',
        'ngResource',
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
           '/ops', {
                templateUrl: 'views/ops.html',
                pageName: 'Operations',
                controller: 'opsCtrl'
            });
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);

    }]);

}(window.angular));


