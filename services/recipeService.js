var app = angular.module('refrigiChef');

app.service('recipeService', function($http, $q){
	
	var key = 'd4c39b34edfa725f0882fc2008161d90'
	
	this.getRecipes = function(ingredient){
		return $http.get('http://food2fork.com/api/search?key=' + key + '&q=' + ingredient)
	}
	
	this.getRecipe = function(rId){
		return $http.get('http://food2fork.com/api/get?key=' + key + '&q=' + rId)
	}
	
	
})