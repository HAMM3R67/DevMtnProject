var app = angular.module('refrigiChef');

app.service('recipeService', function($http, $q, $firebaseArray, $firebaseObject, fb){
	
	var key = 'd4c39b34edfa725f0882fc2008161d90'
	
	this.getRecipes = function(ingredient){
		return $http.get('http://food2fork.com/api/search?key=' + key + '&q=' + ingredient)
	}
	
	this.getRecipe = function(rId){
		return $http.get('http://food2fork.com/api/get?key=' + key + '&q=' + rId)
	}
	
	this.saveRecipes = function(recipes){
		var ref = new Firebase(fb.url + '/recipes' + recipes);
		return $firebaseObject(ref);
	}
	
	this.getPantryItems = function(){
		return //pantry list as created by the user
	}
	
})