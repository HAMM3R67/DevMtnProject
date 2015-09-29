var app = angular.module('refrigiChef');

app.controller('mainController', function($scope, $log, $location, $routeParams, $firebaseArray, $firebaseObject, $http, recipeService, userService){

$scope.logout = function(){
		userService.logout();
	}
	
}