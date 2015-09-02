var app = angular.module('refrigiChef', ['ngRoute', 'firebase']);

app.constant('fb', {
	url: 'https://refrigi-chef.firebaseio.com/'
})

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home/home.html',
		controller: 'homeController'
	})
	.when('/refrigerator', {
		templateUrl: 'pages/refrigerator/refrigerator.html',
		controller: 'refrigeratorController'
	})
	.when('/pantry', {
		templateUrl: 'pages/pantry/pantry.html',
		controller: 'pantryController'
	})
	.when('/recipes/:recipeId', {
		templateUrl: 'pages/recipes/recipes.html',
		controller: 'recipesController'
	})
	.when('/shopList', {
		templateUrl: 'pages/shopList/shopList.html',
		controller: 'shopListController'
	})
	.when('/mealPlan', {
		templateUrl: 'pages/mealPlan/mealPlan.html',
		controller: 'mealPlanController'
	})
	.otherwise({
		redirectTo: '/'
	});
});