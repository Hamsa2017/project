// Define the application
/*app = angular.module('myApp', ['restangular','angularUtils.directives.dirPagination']);*/

// Configure the application
/*app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://192.168.0.114:9001/OIA/services/rest/api/v1'); 
        // Note that we run everything on the localhost
});*/

// Define the controller
app.controller('pageCtrl',['$scope','Restangular', function($scope, Restangular) {
    Restangular.one('visitors').get().then(function(result) {
        $scope.tasks = result.data;
    });
}]);













 /* Standardize data format (extract from meta-data where needed)
app.config(function(RestangularProvider) {
    // add a response intereceptor
    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      var extractedData;
      // .. to look for getList operations
      if (operation === "getList") {
        // .. and handle the data and meta data
        extractedData = data.body;
		extractedData.error = data.error;
            extractedData.paging = data.paging;
      } else {
        extractedData = data.data;
      }
      return extractedData;
    });
 });    */