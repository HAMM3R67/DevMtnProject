var app = angular.module('refrigiChef');

app.controller('refrigeratorController', function($scope){
	
	$scope.getRecipe = function(){
		//gets a list of recipes based off the ingredients that are input into the box
		recipeService.getRecipes($scope.ingredients).then(function(results){
			console.log(results.data)
			$scope.recipes = results
		})
	}
})