app.controller('createleaveCtrl',['$scope','Restangular','$rootScope',function($scope,Restangular,$rootScope){
$scope.data={ 
      "leavetype": "",
	  "noofdays":"",
	  "situational":"",
       "status":""
	   };
	   
	   
	   
	   
	   $scope.items = [];
  $scope.data.leavetype = '';
  $scope.add = function(){
    if ($scope.items.length < 100) {
      $scope.items.push($scope.data.leavetype);
    }
  }
  $scope.del = function(i){
    $scope.items.splice(i,1);
  }
  
  console.log($scope.items);
	   
	   $scope.submit=function(){
	Restangular.all("createLeaveType").post($scope.data).then(function(response){
		$scope.result=response.data;
	})
	   }
	   
}])