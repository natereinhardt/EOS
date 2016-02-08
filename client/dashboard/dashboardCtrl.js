(function (angular) {
    'use strict';
    var ngModule = angular.module('eos.dashboardCtrl', []);

    ngModule.controller('dashboardCtrl', function () {

        var vm  = this;

        vm.welcome = 'Welcome To The Dashboard!!!';


    });
}(window.angular));


