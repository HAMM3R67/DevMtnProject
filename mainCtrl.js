var app = angular.module('recipeApp');

app.controller('recipeController', function($scope, recipeService){
	
	$scope.getRecipe = function(){
		recipeService.getRecipe($scope.searchRecipe).the(function(result){
			console.log(result)
	
		})
	}
	
})