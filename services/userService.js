var app = angular.module('refrigiChef')

app.service('userService', function($firebaseAuth, fb, $location){
	
	var user = {
		name: ''
	};
	
	var ref = new Firebase(fb.url);
	var authObj = $firebaseAuth(ref);
	
	//Set the user object if already logged in on page refresh
	var info = authObj.$getAuth();
		if(info){
			if(info.google){
				user.name = info['google'].displayName
			} else if(info.facebook){
				user.name = info['facebook'].displayName
			} else{
				user.name = '';
			}
		}
		
	this.getLoggedInUser = function(){
		return user;
	}	
	
	this.loginWithGoogle = function(){
		
		authObj.$authWithOAuthPopup('google').then(function(authData){
			user.name = authData.google.displayName;
            $location.path('refrigerator')                        
            console.log("Logged in as:", authData.uid);
         }).catch(function(error) {
            console.error("Authentication failed:", error);
		});
	}
	
	this.loginWithFacebook = function(){
        
        authObj.$authWithOAuthPopup("facebook").then(function(authData) {
            user.name = authData.facebook.displayName;
            $location.path('refrigerator')                        
            console.log("Logged in as:", authData.uid);
         }).catch(function(error) {
            console.error("Authentication failed:", error);
         });
     
    }
	
	 this.logout = function(){
        authObj.$unauth()
        $location.path('');
    }
	
	
	
});