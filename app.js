var app = angular.module('refrigiChef', ['ngRoute']);

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
	.when('/recipe/:recipeId', {
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