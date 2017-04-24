angular.module('my')
	.controller('yhs_login',['$scope','$http','$state',function($scope, $http, $state){
		$scope.username = "";
		$scope.password = "";
		$scope.denglu = function(){
			if($scope.username == ""|| $scope.password == ""){
				alert("用户名和密码不能为空")
			}else{
				//console.log()
				$http({
					method:"POST",
					url:"http://192.168.43.109:8005/item/login",					
				data: {
					username: $scope.username,
					password: $scope.password
				},
//				data:"username=" +$scope.username +"&password=" +$scope.password,
				headers:{'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(function(reqs){
					console.log(reqs)
					if(reqs.data.flag==1){
						
						alert("登入成功")
						$state.go('index')
					}else if(reqs.data.flag==2){
						alert("用户名不存在")
					}else if(reqs.data.flag==3){
						alert("密码错误")
					}
					
				},function(){
					alert("连接失败")
				})
			}
		}
		
	}])