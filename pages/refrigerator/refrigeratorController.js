var app = angular.module('refrigiChef');

app.controller('refrigeratorController', function($scope, $location, $routeParams, $firebaseArray, $firebaseObject, $http, recipeService, userService){
	
	$scope.user = userService.getLoggedInUser();
	
	$scope.getRecipe = function(){
		//gets a list of recipes based off the ingredients that are input into the box
		recipeService.getRecipes($scope.ingredient1, $scope.ingredient2, $scope.ingredient3)
		.then(function(results){
			console.log(results.data.recipes)
			$scope.recipes = results.data.recipes
			//The below will reset the input boxes once the button has been clicked and data returned
			$scope.ingredient1 = ""; 
			$scope.ingredient2 = ""; 
			$scope.ingredient3 = "";
		})
	}
	
	var currentUser = userService.getLoggedInUser();
	
	//logout
	$scope.logout = function(){
		userService.logout();
	}
	//save Recipes to firebase under userID
	var ref = new Firebase('https://refrigi-chef.firebaseio.com/recipes');
	
	var recipes = $firebaseArray(ref);
	
	$scope.saveRecipe = function (data){
		recipes.$add(data).then(function(){
			console.log('Recipe successfully saved to firebase!!!')
		})
	}
})
	
	// $scope.saveRecipe = function(){
	// 	//$scope.selectedRecipe isn't what needs to be passed in getRecipes...the recipe id
	// 	//needs to pass in that function
	// 	recipeService.getRecipes($scope.selectedRecipe).then(function(savedResults){
	// 		console.log(savedResults.data.recipes.recipe_id)
	// 		$scope.savedRecipes = savedResults.data.recipes.recipe_id
	// 	})
	//   }
	// })
	
	//creating a new Firebase array
// 	var ref = new Firebase('https://refrigi-chef.firebaseio.com/recipes');
// ​
//     var recipes = $firebaseArray(ref);
// ​
// 	(function(data){
// 		recipes.$add(data).then(function(){
// 			console.log('recipe succesfully saved to firebase!!')
// 		});
// 	})
	
	
	
	//I want to be able to select recipes that are returned from the API and save them to Firebase
	// var recipeId = parseInt($routeParams.recipeId)
	// 
	// $scope.selectedRecipe = {};
	// var savedRecipes = recipeService.saveRecipes(recipes);
	// 
	// savedRecipes.$bindTo($scope, 'savedRecipes')// creates $scope.savedRecipes with a 3 way binding
	// 
	// $scope.saveRecipe = function(){
	// 	if(!$scope.selectedRecipe){
	// 		return false; //Don't do anything if no recipes are selected
	// 	}
	// }
	// 
	// var newRecipe = {
	// 	
	// }
	