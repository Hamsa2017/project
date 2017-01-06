
app.config(['RestangularProvider' , '$stateProvider' , '$urlRouterProvider' , function(RestangularProvider,$stateProvider,$urlRouterProvider){
	
	
	RestangularProvider.setBaseUrl('http://localhost:9001/OIA/services/rest/api/v1');
	
	      $urlRouterProvider.otherwise("/home");
	
	        $stateProvider
			
			    .state('home', {
					url:"/home" ,
					templateUrl:"home.html"
					})
					
				
				.state('login', {
					url:"/login" ,
					templateUrl:"views/login.html",
					controller:"LoginCtrl"
				
					
					
					
					})
					
					
					
					
					.state('tt', {
					url:"/tt" ,
					templateUrl:"views/tt.html"
					})
					
					
					.state('createrole', {
					url:"/createrole" ,
					templateUrl:"views/Partials/createrole.html",
					controller:"createroleCtrl"
					})
					
					 .state('createleave', {
						   url:"/createleave",
					   templateUrl:"views/Partials/createleave.html",
					   controller:"createleaveCtrl"
				    })
					   
					 .state('adddept', {
						   url:"/adddept",
					   templateUrl:"views/Partials/adddept.html",
					   controller:"addCtrl"
					   })
					   
					   
					    .state('addfeature', {
						   url:"/addfeature",
					   templateUrl:"views/Partials/addfeature.html",
					   controller:"addfeatureCtrl"
					   })
					   
					    /* .state('leaveperiod', {
						   url:"/leaveperiod",
					   templateUrl:"views/Partials/leaveperiod.html"
					   })*/
					   
					    .state('allotpermission', {
						   url:"/allotpermission",
					   templateUrl:"views/Partials/allotpermission.html",
					   controller:"allotpermissionCtrl"
					   })
					   
					   .state('workweek', {
						   url:"/workweek",
					   templateUrl:"views/Partials/workweek.html",
					   controller:"workweekCtrl"
					   })
					   
					    /*.state('role feature', {
						   url:"/role feature",
					   templateUrl:"views/Partials/role feature.html"
					   }) */
					    .state('createholiday', {
						   url:"/createholiday",
					   templateUrl:"views/Partials/createholiday.html",
					   controller:"createholidayCtrl"
					   }) 
					   
					   
					   .state('newregis',{
						url:"/newregis",
						templateUrl:"views/Partials/newregis.html",
						controller:"mainCtrl"
						})
					
					
					   
					   .state('myinfo', {
						   url:"/myinfo",
					   templateUrl:"views/Partials/myinfo.html",
					   controller:"MyInfo"
					   })
					   
					   
					   .state('myinfogetlist', {
						   url:"/myinfogetlist",
					   templateUrl:"views/Partials/myinfogetlist.html",
					   controller:"getCtrl"
					   })
					   
					   .state('cont', {
						   url:"/cont",
					   templateUrl:"views/Partials/cont.html",
					   controller:"countctrl"
					   }) 
					   
					   .state('ch', {
						   url:"/ch",
					   templateUrl:"views/Partials/ch.html",
					    controller:"changeCtrl"
					   })
					   
					    .state('createvisitors', {
						   url:"/createvisitors",
					   templateUrl:"views/Partials/createvisitors.html",
					   controller:"visitorsCtrl"
					   })
					   
					    .state('pagination1', {
						   url:"/pagination1",
					   templateUrl:"views/Partials/pagination1.html",
					   controller:"pageCtrl"
					   })
					   
					   
					    .state('attendance',{
					       url:"/attendance",
						   templateUrl:"views/Partials/attendance.html",
						   controller:"myAtt"
					   })
					  
					  /*.state('Usertracking', {
						   url:"/Usertracking",
					   templateUrl:"views/Partials/Usertracking.html"
					   })
					   
                       .state('Usertracking2', {
						   url:"/Usertracking2",
					   templateUrl:"views/Partials/SubPartials/Usertracking2.html"
					   }) */
					   
					   .state('timesheet', {
						   url:"/timesheet",
					   templateUrl:"views/Partials/timesheet.html",
					   controller:"myTime"
					   
					   }) 
					   
					  /* .state('swipedetailsnew', {
						   url:"/swipedeatilsnew",
					   templateUrl:"views/Partials/swipedetailsnew.html"
					   }) 
					   
					   
					   
					   
					   
					   
					   
					    .state('applyleave', {
						   url:"/applyleave",
					   templateUrl:"views/Partials/applyleave.html"
					   })
					  
					   
					   
					   
					    .state('searchholi', {
						   url:"/searchholi",
					   templateUrl:"views/Partials/searchholi.html"
					   })
					   
					   
					   .state('mang1', {
						   url:"/mang1",
					   templateUrl:"views/Partials/mang1.html"
					   })*/
					   
					    .state('event', {
						   url:"/event",
					   templateUrl:"views/Partials/event.html",
					   controller:"eventCtrl"
					   }) 
					   
					   
					   
					 
					   
					   
					   
					   
					   

					   
}]);




















						