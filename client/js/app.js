(function(){
    
   
    var recipes = ["1","2","3","4"];
    angular
    .module("projectA", [])
    .controller("listCtrl",    
        function ListController($scope){
            $scope.data = recipes; 
            
        })
    
})();