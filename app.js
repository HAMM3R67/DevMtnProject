var app = angular.module('recipeApp', ['ngRoute']);
// .constant('fb', {
//     url: 'https://hammers-rtfm-app.firebaseio.com/'
//     })
app.config(function($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: 'index.html'
            }).
            when('/recipes', {
                templateUrl: 'recipes/recipe.html'
            }).
            otherwise({
                redirectTo: '/'
            })
});
