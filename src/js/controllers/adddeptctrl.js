app.controller('addCtrl',['$scope','Restangular', function($scope,Restangular){

	

$scope.adddepartments = [
];
$scope.addRow = function(){		
	$scope.adddepartments.push({ 'deptname':$scope.data.departmentname, 'manager': $scope.data.managername, 'status':$scope.data.status });
	/*$scope.departmentname='';
	$scope.managername='';
	$scope.status='';*/
};

$scope.data={
	"departmentname":"",
	"managername":"",
	"status":""
	};



console.log($scope.data);





$scope.submit=function(){
Restangular.all('createDepartment').post($scope.data).then(function(response){
$scope.data1=response.data;
});
}



}]);


