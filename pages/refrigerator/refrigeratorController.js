var app = angular.module('refrigiChef');

app.controller('refrigeratorController', function($scope, $location, $routeParams, recipeService, userService){
	
	$scope.user = userService.getLoggedInUser();
	
	$scope.getRecipe = function(){
		//gets a list of recipes based off the ingredients that are input into the box
		recipeService.getRecipes($scope.ingredient1, $scope.ingredient2, $scope.ingredient3, $scope.ingredient4, $scope.ingredient5)
		.then(function(results){
			console.log(results.data.recipes)
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
	
	
	//I want to be able to select recipes that are returned from the API and save them to Firebase
	$scope.selectedRecipe = {};
	var savedRecipes = recipeService.saveRecipes(recipes);
	
	savedRecipes.$bindTo($scope, 'savedRecipes')// creates $scope.savedRecipes with a 3 way binding
	
	$scope.saveRecipe = function(){
		if(!$scope.selectedRecipe){
			return false; //Don't do anything if no recipes are selected
		}
	}
	
	var newRecipe = {
		
	}
	// $scope.saveRecipe = function(){
	// 	recipeService.saveRecipes($scope.selectedRecipe).then(function(savedResults){
	// 		console.log(savedResults.data)
	// 		$scope.savedRecipes = savedResults.data.recipes
	// 	})
	// }
	
})