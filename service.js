var app = angular.module('recipeApp');

app.service('recipeService', function($http){
	
	var key = "d4c39b34edfa725f0882fc2008161d90";
	var param = "search?key=" + key + "&q=";
	
	
	this.getRecipe = function(ingredient){
		var url = "http://food2fork.com/api/search"
		
		return $http.get(url + ingredient)
	}
	
});