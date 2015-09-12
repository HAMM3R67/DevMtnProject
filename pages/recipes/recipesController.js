var app = angular.module('refrigiChef');

app.controller('recipesController', function($scope, userService, recipeService){
	
	$scope.savedRecipes = recipeService.getSavedRecipes();
	console.log($scope.savedRecipes)
	
})