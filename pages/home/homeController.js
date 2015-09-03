var app = angular.module('refrigiChef');

app.controller('homeController', function($scope, $location, userService){
	
	$scope.loginWithGoogle = function(){
		userService.loginWithGoogle();
	}
	
	$scope.loginWithFacebook = function(){
		userService.loginWithFacebook();
	}
	
	//below is email verification code, I am not sure exactly how it works...
// 	$scope.authObj.$createUser({
// 		email: "my@email.com",
// 		password: "mypassword"
// 	}).then(function(userData) {
//  		 console.log("User " + userData.uid + " created successfully!");
// 
//   	return $scope.authObj.$authWithPassword({
// 		email: "my@email.com",
// 		password: "mypassword"
//   	});
// 	}).then(function(authData) {
// 		console.log("Logged in as:", authData.uid);
// 	}).catch(function(error) {
// 		console.error("Error: ", error);
// 	});
	
})