app.controller('countctrl',['$scope','Restangular',function($scope,Restangular){

$scope.data={
	
      "employeeid":"",
      "street":"",  
      "area":"",
      "city":"",
      "state":"",
      "postal_code":"",    
      "country":"",
      "telephone":"",
      "personal_emailid":""
       
     
	
};

Restangular.one('states').get().then(function(response) {
             $scope.data1 = response.data;
			  	
 $scope.states = [];
     
      angular.forEach( $scope.data1, function(hname) {
        $scope.states.push(hname.statename);
        
      })
})




Restangular.one('cities').get().then(function(response)
{
	$scope.data2=response.data;
	
	$scope.cities=[];
	
	angular.forEach($scope.data2,function(hcity) {
		$scope.cities.push(hcity.cityname);
		
		
	})
})	
	
	/*$scope.submit=function(){
		var promise = oiaservice.addUserContactDetails($scope.data);
		promise.then(function(response){
			alert('Success:'+successfull);
		},function(reason){
			 alert('Failedfgdfhfhf:'+reason); 
		}
		
		);
	}*/
	
	
	
	
	
	
	/*app.controller('LoginController', ['$scope', 'DHCservice','$state', function($scope, DHCservice,$state) {
	  $scope.userDetails ={email:"",password:""};
	  $scope.registerUser = function() {
		  var promise = DHCservice.login($scope.userDetails);
		promise.then(function(response) {
					alert('Success: ' + $state.go('home'));
					}, function(reason) {
					  alert('Failed: ' + reason);
					}
			);
		}
    }]);*/
	
	
	$scope.submit=function(){
     Restangular.all ('addUserContactDetails').post($scope.data).then(function(response) {
             $scope.result = response;
			 })
    }
	
}]);	


	 