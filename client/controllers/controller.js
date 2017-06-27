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
        .when('/recipe', {
            templateUrl : 'views/recipe.html',
            controller : 'RecipeCtrl'
        });
});

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/recipes'
    }).then(function successCallback(response) {
        $scope.recipes = response.data;
    }, function errorCallback(response) {
        console.log('Error');
    });
    
    //Fix this ugly code later
    $scope.showAdd = function() {
        $scope.bAddRecipe = $scope.bAddRecipe ? false : true;
    };
    
    $scope.sub = function() {
        $http({
            method: 'POST',
            url: '/addrecipe',
            data: $scope.formData
        }).then(function successCallback(response) {
            $scope.showAdd();
            $http({
            method: 'GET',
            url: '/recipes'
                }).then(function successCallback(response) {
                    $scope.recipes = response.data;
                }, function errorCallback(response) {
                    console.log('Error');
                });
        }, function errorCallback(response) {
            $scope.messae = "Error in posted data";
        });
    };
}]);


myApp.controller('RecipeCtrl', function($scope, $http, $routeParams, $location) {
    $http({
    method: 'GET',
    url: '/getRecipe?id='+$routeParams.id
        }).then(function successCallback(response) {
            console.log(response);
            $scope.recipe = response.data[0];
        }, function errorCallback(response) {
        });
});
