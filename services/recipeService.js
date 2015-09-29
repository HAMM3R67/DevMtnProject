var app = angular.module('refrigiChef');

app.service('recipeService', function($http, $q, $firebaseArray, $firebaseObject, userService, fb){
	
	var key = 'd4c39b34edfa725f0882fc2008161d90'
	
	this.getRecipes = function(ingredient){
		return $http.get('http://food2fork.com/api/search?key=' + key + '&q=' + ingredient)
		
	}
	
	this.getRecipe = function(rId){
		return $http.get('http://food2fork.com/api/get?key=' + key + '&' + rId)
			.success(function(data){
				recipes.$add(data).then(function(){
					console.log('recipe succesfully saved to firebase!!')
			});
		})
	}
	
	//Save recipes to Firebase
	
	
	this.saveRecipe = function(recipeData){
		var userId = userService.getLoggedInUser().uid;
	
		var userRecipeDatabase = $firebaseObject(new Firebase('https://refrigi-chef.firebaseio.com/' + userId + '/userRecipes'))
		userRecipeDatabase.$loaded().then(function(){
			
			userRecipeDatabase[recipeData.recipe_id] = recipeData;
			
			userRecipeDatabase.$save()	
		})
		
	}
	
	//get the recipes that are saved by the user
	
	this.getSavedRecipes = function(){
		var userId = userService.getLoggedInUser().uid;
		
		return $firebaseObject(new Firebase('https://refrigi-chef.firebaseio.com/' + userId + '/userRecipes'))
	}
	
	//Add items to the pantry, created by the user
		
	var pantryItems = [];
	
	var pantryItem = '';
	
	this.addPantryItem = function(pantryItem){
			pantryItems.push(pantryItem)
			console.log(pantryItems)
	}
	
})