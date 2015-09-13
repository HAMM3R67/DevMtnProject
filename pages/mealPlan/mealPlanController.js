var app = angular.module('refrigiChef');

app.controller('mealPlanController', function($scope, mealPlanService, userService, recipeService, $q){
	
  $scope.savedRecipes = recipeService.getSavedRecipes();
  console.log($scope.savedRecipes)
  $scope.meals = mealPlanService.getMeals();
  console.log($scope.meals)
  
  $scope.saveRecipeDate = function(recipeData){
    mealPlanService.saveRecipeDate(recipeData, $scope.dateString)
  }
  
  
  
  $scope.dateObject = new Date(); 
  $scope.$watch('dateObject.getTime()', function(){
    if(!$scope.dateObject.getYear) return;
	  $scope.dateString = $scope.dateObject.getYear() + '-' + $scope.dateObject.getMonth() + '-' + $scope.dateObject.getDate();
  })

  $scope.minDate = new Date();
  $scope.maxDate = new Date(2020, 5, 22);


})