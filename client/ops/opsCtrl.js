(function (angular) {
    'use strict';

    var ngModule = angular.module('eos.opsCtrl', []);

    ngModule.controller('opsCtrl', function ($http) {

        var vm = this;
        vm.ops = [];

        vm.createOp = createOp;
        vm.listOps = listOps;

        init();

        function init(){
            listOps();
        }

        function createOp(opName) {
            return $http.post('/api/ops/' + encodeURIComponent(opName)).then(function (response){
                vm.ops.push(response.data);
                vm.opName = '';
            });
        }

        function listOps(){
            return $http.get('/api/ops').then(function (response) {
                vm.ops = response.data;
            });
        }

    });
}(window.angular));

