app.controller('opsCtrl', ['$scope', '$resource' , function ($scope, $resource){
        $scope.ops = [
            {name : "First Op"},
            {name : "Second Op"}
        ];

        console.log($scope.ops.length);
        $scope.createOp = function (){
            $scope.ops.push({name: $scope.opName});
            $scope.opName = '';
        }
    }]);

