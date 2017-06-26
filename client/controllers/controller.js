var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
}]);
// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'AppCtrl'
        })

        // route for the about page
        .when('/addrecipe', {
            templateUrl : 'views/addrecipe.html',
            controller  : 'AddCtrl'
        });
});

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello world from controller");
    $http({
        method: 'GET',
        url: '/recipes'
    }).then(function successCallback(response) {
        $scope.recipes = response.data;
    }, function errorCallback(response) {
        console.log('Error');
    });
    
    
}]);

myApp.controller('AddCtrl', ['$scope','$http', function($scope, $http) {
    $scope.sub = function() {
        $http({
            method: 'POST',
            url: '/addrecipe',
            data: $scope.formData
        }).then(function successCallback(response) {
            window.location.href = "/";
        }, function errorCallback(response) {
            $scope.messae = "Error in posted data";
        });
    };
}]);