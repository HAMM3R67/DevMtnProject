var app = angular.module('refrigiChef');

app.controller('refrigeratorController', function($scope, $log, $location, $routeParams, $firebaseArray, $firebaseObject, $http, recipeService, userService){
	
	// 	$scope.items = [
	// 		'The first choice!',
	// 		'And another choice for you.',
	// 		'but wait! A third!'
	// 	];
	// 
	// 	$scope.status = {
	// 		isopen: false
	// 	};
	// 
	// 	$scope.toggled = function(open) {
	// 		$log.log('Dropdown is now: ', open);
	// 	};
	// 
	// 	$scope.toggleDropdown = function($event) {
	// 		$event.preventDefault();
	// 		$event.stopPropagation();
	// 		$scope.status.isopen = !$scope.status.isopen;
	// 	};

	
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
	
	
	
	$scope.toggleRecipe = function(recipeData){
		recipeService.saveRecipe(recipeData)
	}
	
	
	
	//testing 3 way data binding with Firebase
		//var ref = new Firebase("https://refrigi-chef.firebaseio.com/data");
		// download the data into a local object
		//$scope.data = $firebaseObject(ref);
		// putting a console.log here won't work, see below
		
		// download the data into a local object
		//var syncObject = $firebaseObject(ref);
	
		 // synchronize the object with a three-way data binding
		// click on `index.html` above to see it used in the DOM!
		//	syncObject.$bindTo($scope, "data");
	
	
	
	//end of controller
	});
	