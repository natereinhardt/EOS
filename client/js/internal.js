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
            .primaryPalette('blue-grey')
            .accentPalette('orange');
    });

}(window.angular));



(function (angular){
    'use strict';
    var ngModule = angular.module('eos.dashboardCtrl',[]);

    ngModule.controller('dashboardCtrl', function ($scope){
        $scope.welcome = 'Welcome To The Dashboard!!!'


    })

}(window.angular));



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
            }
        }
    );
}(window.angular));


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
    })
}(window.angular));
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
            .primaryPalette('blue-grey')
            .accentPalette('orange');
    });

}(window.angular));



(function (angular){
    'use strict';
    var ngModule = angular.module('eos.dashboardCtrl',[]);

    ngModule.controller('dashboardCtrl', function ($scope){
        $scope.welcome = 'Welcome To The Dashboard!!!'

    })

}(window.angular));



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
            }
        }
    );
}(window.angular));


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
    })
}(window.angular));