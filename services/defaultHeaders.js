var app = angular.module('refrigiChef');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-REST-API-Key': 'd4c39b34edfa725f0882fc2008161d90'}//'X-Parse-Application-Id': 'd4c39b34edfa725f0882fc2008161d90'}, 
      return config;
    }
  };
});
