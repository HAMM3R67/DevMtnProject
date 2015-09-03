var app = angular.module('refrigiChef');

app.controller('refrigeratorController', function($scope, recipeService, userService){
	
	$scope.user = userService.getLoggedInUser();
	
	$scope.getRecipe = function(){
		//gets a list of recipes based off the ingredients that are input into the box
		recipeService.getRecipes($scope.ingredient1, $scope.ingredient2, $scope.ingredient3, $scope.ingredient4, $scope.ingredient5).then(function(results){
			console.log(results)
			$scope.recipes = results.data.recipes
			//The below will reset the input boxes once the button has been clicked and data returned
			$scope.ingredient1 = ""; 
			$scope.ingredient2 = ""; 
			$scope.ingredient3 = ""; 
			$scope.ingredient4 = ""; 
			$scope.ingredient5 = "";
			
		})
	}
	
	var currentUser = userService.getLoggedInUser();
	
	$scope.saveRecipe = function(){
		
	}
	
})