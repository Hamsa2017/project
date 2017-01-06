app.controller('LoginCtrl',['$scope','$state','Restangular','$rootScope',function($scope,$state,Restangular,$rootScope){
$scope.data={ 
       "emailid":"",
       "password":""
    };
	
	 
 


$scope.submit=function(){
     Restangular.all ('login').post($scope.data).then(function(response) {
		     $rootScope.login = true;
			 
             $scope.result = response.data;
			 $rootScope.result1=response.status;
			 
			 
			 $rootScope.id1=[];
			  angular.forEach( $scope.result, function(logi) {
                 $rootScope.id1.push(logi.employeeid);
				   })
				   
				 $rootScope.role=[];
			  angular.forEach( $scope.result, function(logrole) {
		 
                 $rootScope.role.push(logrole.rolename);
	
			 
			 })
			 
			 $rootScope.profileid1=[];
			 angular.forEach($scope.result, function(proid){
				 $rootScope.profileid1.push(proid.profileid);
			 })
             
             
             
			 
if($rootScope.role == "Admin"){
	 $state.go('tt');
}
else{
	$state.go('nav');
		
}		 
			 
		/*	 if(result.rolename==Admin){
				 alert('Sucess:'+$state.go('configgg'));
			 }
			 else{
                  alert('Sucess:'+$state.go());				 
			 }*/
			
		/* console.log($scope.role);		  */
			 
			
		
	
})
}


}]);	