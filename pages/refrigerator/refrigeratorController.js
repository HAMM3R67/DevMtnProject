var app = angular.module('refrigiChef');

app.controller('refrigeratorController', function($scope, $location, $routeParams, $firebaseArray, $firebaseObject, $http, recipeService, userService){
	
	$scope.user = userService.getLoggedInUser();
	
	$scope.getRecipe = function(){
		//gets a list of recipes based off the ingredients that are input into the box
		recipeService.getRecipes($scope.ingredient)
		.then(function(results){
			console.log(results.data.recipes)
			$scope.recipes = results.data.recipes
			//The below will reset the input boxes once the button has been clicked and data returned
			$scope.ingredient = ""; 			
		})
	}
	
	var currentUser = userService.getLoggedInUser();
	//logout
	$scope.logout = function(){
		userService.logout();
	}
	//save Recipes to firebase under userID
	$scope.savedRecipes = $firebaseObject(new Firebase('https://refrigi-chef.firebaseio.com/USER_ID/userRecipes'))
	
	$scope.savedRecipes['NEW_RECIPE_ID'] = {/*whatever the recipe info is*/}
	
	$scope.savedRecipes.$save()
	
	
	
	
	
	//end of controller
	});
	