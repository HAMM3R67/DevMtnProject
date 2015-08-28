var app = angular.module('recipeApp');

app.controller('recipeController', function($scope, recipeService){
	
	$scope.getRecipeData = function(){
		recipeService.getRecipe($scope.searchRecipe).then(function(result){
			console.log(result)
			$scope.recipe = result.title
			$scope.searchRecipe = ''
		})
	}
	
});