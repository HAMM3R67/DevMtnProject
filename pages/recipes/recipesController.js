var app = angular.module('refrigiChef');

app.controller('recipesController', function($scope, recipeService){
	
	$scope.getRecipe = function(){
		//gets a list of recipes based off the ingredients that are input into the box
		recipeService.getRecipe($scope.recipe).then(function(results){
			console.log(results.data)
			$scope.recipe = results
		})
	}
	
})