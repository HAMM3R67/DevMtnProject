var app = angular.module('refrigiChef');

app.controller('pantryController', function($scope, userService, recipeService){
	
	$scope.addPantryItem = function(){
		recipeService.addPantryItem($scope.pantryItem).then(function(data){
			$scope.pantryItems = data
		})
	}
})
	
