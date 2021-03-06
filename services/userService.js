var app = angular.module('refrigiChef')

app.service('userService', function($firebaseAuth, fb, $location){
	
	var user = {
		name: ''
	};
	
	var ref = new Firebase(fb.url);
	var authObj = $firebaseAuth(ref);
	
	setAuthInfo();
	authObj.$onAuth(function(){
		setAuthInfo();
	})
	
	var info;
	function setAuthInfo(){
		//Set the user object if already logged in on page refresh
		info = authObj.$getAuth();
		if(info){
			if(info.google){
				info.name = info['google'].displayName
			} else if(info.facebook){
				info.name = info['facebook'].displayName
			} else if(info.password){
				info.name = info['password'].email
			} else{
				info.name = '';
			}
		}
	}
		
	this.getLoggedInUser = function(){
		return info;
	}	
	
	this.getUserId = function (){
		if(!info){
			return
		}
		return info.uid
	}
	
	this.loginWithGoogle = function(){
		
		authObj.$authWithOAuthPopup('google').then(function(authData){
            $location.path('refrigerator')                        
            console.log("Logged in as:", authData.uid);
         }).catch(function(error) {
            console.error("Authentication failed:", error);
		});
	}
	
	this.loginWithFacebook = function(){
        
        authObj.$authWithOAuthPopup("facebook").then(function(authData) {
            $location.path('refrigerator')                        
            console.log("Logged in as:", authData.uid);
         }).catch(function(error) {
            console.error("Authentication failed:", error);
         });
     
    }
	
	this.createUser = function(email, password){
		authObj.$createUser({
			email: email,
			password: password
	}).then(function(userData) {
			console.log("User " + userData.uid + " created successfully!");
	
	return authObj.$authWithPassword({
		email: email,
		password: password
	});
	}).then(function(authData) {
	console.log("Logged in as:", authData.uid);
	}).catch(function(error) {
	console.error("Error: ", error);
	});
	}
	
	this.loginUser = function (email, password){
		return authObj.$authWithPassword({
		email: email,
		password: password
	 });
	}
	
	 this.logout = function(){
        authObj.$unauth();
        $location.path('/');
    }
	
	
	
});