var app = angular.module('refrigiChef');

app.controller('recipesController', function($scope, recipeService){
	
	$scope.getRecipe = function(){
		recipeService.getRecipes($scope.ingredients).then(function(results)){
			$scope.recipes = results
		}
	}
	
})