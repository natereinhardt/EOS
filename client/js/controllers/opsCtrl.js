(function (angular) {
    'use strict';

    var ngModule = angular.module('eos.opsCtrl', []);

    ngModule.controller('opsCtrl',
        function opsCtrl($scope, $resource) {
            var Op = $resource("/api/ops");
            Op.query(function (results) {
                $scope.ops = results;
            });

            $scope.ops = [];

            console.log($scope.ops.length);
            $scope.createOp = function () {
                var op = new Op();
                op.name = $scope.opName;
                op.$save(function (result) {
                    $scope.ops.push(result);
                    $scope.opName = '';
                });
            };
        }
    );
}(window.angular));

