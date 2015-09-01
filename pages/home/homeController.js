var app = angular.module('refrigiChef');

app.controller('homeController', function($scope, $location, userService){
	
	$scope.loginWithGoogle = function(){
		userService.loginWithGoogle();
	}
	
	$scope.loginWithFacebook = function(){
		userService.loginWithFacebook();
	}
	
})