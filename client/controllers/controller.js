var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello world from controller");
    
    $http.get('/recipes').success(function(response) {
       console.log("I got the data I requested");
       $scope.recipes = response;
    });
    
}]);