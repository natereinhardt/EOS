(function (angular) {
    'use strict';

    var ngModule = angular.module('eos.priceAdmin', []);

    ngModule.controller('priceAdmin', function ($http) {

        var vm = this;
        vm.items = [];

        vm.getPrices = getPrices;

        init();

        function init(){
            getPrices();
        }

        function getPrices() {
            return $http.get('/api/crest/priceData').then(function (response){
                vm.items.push(response.data);
            });
        }

    });
}(window.angular));

