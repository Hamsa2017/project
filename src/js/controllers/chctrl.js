app.controller('changeCtrl',['$scope','Restangular','$rootScope',function($scope,Restangular,$rootScope){
		
		
		 // Set the default value of inputType
  $scope.inputType = 'password';
  
  // Hide & show password function
  $scope.hideShowPassword = function(){
    if ($scope.inputType == 'password')
      $scope.inputType = 'text';
    else
      $scope.inputType = 'password';
  };
		
	
    
	$scope.data={
			
			
			"currentpassword":"",
			"newpassword":"",
            "employeeid":$rootScope.id1[0]
			 };
  
	
    $scope.RegisterUser=function(){
		 Restangular.all('changepassword').post($scope.data).then(function(response) {
             $scope.result = response.data;
			 
			 
			 
			 
			 if ( $scope.result.status==" successful"){
			 alert('Success');
			 }
		else{
		    alert('failure');
		}
			 });
    }
console.log($scope.id1)	
	
	
		}]);