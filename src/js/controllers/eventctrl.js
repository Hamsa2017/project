app.controller('eventCtrl',['$scope','Restangular','$rootScope',function($scope,Restangular,$rootScope){
	

	$scope.data={
		 
          "eventname":"",
          "noofdays":"",
          "fromdate":"",
          "todate":"",
          "fromtime":"",
          "totime":"",
          "departmentname":"",
          "location":"",
          "description":""
          
	};
	

	
	
	
	
	/*Restangular.one('getDepartments').get().then(function(response){
		$scope.data1=response.data;
		
		
		$rootScope.events=[];
		angular.forEach($scope.data1,function(ename){
			$rootScope.events.push(ename.departmentname);
			
		})
	});*/
	Restangular.one('getDepartments').get().then(function(response){
		$scope.data1=response.data;
		
	
	
	$scope.events=[];
	angular.forEach($scope.data1,function(even){
		$scope.events.push(even.departmentname);
	})
})
	
	$scope.submit=function(){
	Restangular.all('event').post($scope.data).then(function(response){
		$scope.data2=response;
	})
	}
	
	
	
}])