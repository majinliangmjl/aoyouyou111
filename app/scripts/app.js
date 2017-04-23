'use strict';

/**
 * @ngdoc overview
 * @name aoyouyouApp
 * @description
 * # aoyouyouApp
 *
 * Main module of the application.
 */
angular.module('aoyouyouApp', ['ui.router'])
.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$stateProvider.state("login",{
		//登陆
		url:'/login',
		templateUrl:'views/login.html'
	}).state("zhuce",{
        //注册
        url:'/zhuce'
        ,templateUrl:'views/zhuce.html'
      })
      $urlRouterProvider.otherwise("/login")
}
	
])

.controller('zhuce',['$scope','$http','$state',function($scope,$http,$state){
	$scope.user = "";
	$scope.pwd = "";
	$scope.phone="";
	$scope.we ="";
	$scope.y_zhuce = function(){
		if($scope.user==""||$scope.tel==""||$scope.pwd==""||$scope.nc==""){
			alert("亲！输入不能为空哦")
		}else{
			//console.log(username)
			$http({
				method:'post',
				url:"http://192.168.43.109:8005/item/zhuce",
//				data:{
//					username:$scope.user,
//					password:$scope.pwd,
//					phone:$scope.phone,
//					nicheng:$scope.nc
//				},
				data:"username="+$scope.user +"&password="+$scope.pwd +"&phone=" +$scope.phone +"&nicheng=" +$scope.nc,
				headers:{'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function(reqs){
				
				if(reqs.data.flag==1){
					alert("注册成功，确定跳转到登陆页面")
					
				}else if(reqs.data.flag==2){
					alert("此用户名以重复")
				}else if(reqs.data.flag==3){
					alert("注册失败")
				}
			},function(){
				alert("数据请求失败")
			})
		}
	}
}])

