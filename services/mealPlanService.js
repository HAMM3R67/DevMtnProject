var app = angular.module('refrigiChef');

app.service('mealPlanService', function(userService, recipeService, fb, $firebaseObject){
	
	var userId = userService.getUserId();
	
	this.getMeals = function(){
			
		return $firebaseObject(new Firebase('https://refrigi-chef.firebaseio.com/' + userId + '/mealPlans'))
		
	}
	
	this.saveRecipeDate = function(recipeData, recipeDate){
	
		var mealPlanRecipeDatabase = $firebaseObject(new Firebase('https://refrigi-chef.firebaseio.com/' + userId + '/mealPlans'))
		mealPlanRecipeDatabase.$loaded().then(function(){
			
			mealPlanRecipeDatabase[recipeDate] = recipeData.recipe_id;
			
			mealPlanRecipeDatabase.$save()	
		})
		
	}
})