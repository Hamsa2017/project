app.controller('mainCtrl',['$scope','Restangular',function($scope,Restangular){
		
		
		 // Set the default value of inputType
  $scope.inputType = 'password';
  
  // Hide & show password function
  $scope.hideShowPassword = function(){
    if ($scope.inputType == 'password')
      $scope.inputType = 'text';
    else
      $scope.inputType = 'password';
  };
		
	
    $scope.reloadPage = function(){window.location.reload();}
	

		 
		
		$scope.names=["Admin","Manager","Employee"];
		$scope.shifts=["Morning shift","General shift","Night shift"];
		$scope.dept=["Development","Testing","Production"];
		
		
		
		
		
		
		
		$scope.data={
			"firstname": "",
			"middlename": "",
			"lastname":"" ,
			"employeeid":"",
			"password": "",
			"emailid": "",
            /*   "confirmpassword":"",	 */		
			  "accesscardnumber":"",
			  "dateofbirth": "",
			  "dateofjoining": "",
			  "mobilenumber": "",
			  "gender": "", 
			  "status": "",
			  "remotelogin": "",
			   "deptname": "",
			    "shift": "",
			  "createdby": "sharan",
             "modifiedby": "akkkashh"
			 
	  
		};
  
  
  Restangular.one('getRolemaster').get().then(function(response) {
             $scope.rrrr= response.data;
			  	

});

	
	
  
  
	
    $scope.RegisterUser=function(){
		 Restangular.all ('Registration').post($scope.data).then(function(response) {
             $scope.result = response;
			 });
    }
		}]);