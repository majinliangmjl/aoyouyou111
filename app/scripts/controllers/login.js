angular.module('my')
	.controller('yhs_login', ['$scope', '$http', '$state', function($scope, $http, $state) {
		$scope.username = "";
		$scope.password = "";
		$scope.username = localStorage.getItem('yhm')
		$scope.denglu = function() {
			if($scope.username == "" || $scope.password == "") {
//				alert("用户名和密码不能为空")
						$('#popup').css({"opacity":"1","top":"40px"})
						 $(".cont2").html('请输入用户名和密码')
						$('#mask_shadow').css({"display":"block"})
						setTimeout(function () {
						    $("#popup").css({"opacity":"0","top":"20px"})
						    $(".cont2").html('请输入用户名和密码')
						    $('#mask_shadow').css({"display":"none"})
						    
						},1500);
			} else {
				//console.log()
				$http({
					method: "POST",
					url: "http://192.168.191.133:8005/item/login",
					data: "username=" + $scope.username + "&password=" + $scope.password,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(function(reqs) {
					console.log(reqs)
					if(reqs.data.flag == 1) {
						
						$('#popup').css({"opacity":"1","top":"40px"})
						$(".cont2").html('登录成功')
						$('#mask_shadow').css({"display":"block"})
						setTimeout(function () {
						    $("#popup").css({"opacity":"0","top":"20px"})
						    $(".cont2").html('登录成功')
						    $('#mask_shadow').css({"display":"none"})
						    $state.go('index')
						},1500);
					} else if(reqs.data.flag == 2) {
						$('#popup').css({"opacity":"1","top":"40px"})
						$(".cont2").html('用户名不存在')
						$('#mask_shadow').css({"display":"block"})
						setTimeout(function () {
						    $("#popup").css({"opacity":"0","top":"20px"})
						    $(".cont2").html('用户名不存在')
						    $('#mask_shadow').css({"display":"none"})
						    
						},1500);
					} else if(reqs.data.flag == 3) {
						$('#popup').css({"opacity":"1","top":"40px"})
						$(".cont2").html('密码错误')
						$('#mask_shadow').css({"display":"block"})
						setTimeout(function () {
						    $("#popup").css({"opacity":"0","top":"20px"})
						    $(".cont2").html('密码错误')
						    $('#mask_shadow').css({"display":"none"})
						    
						},1500);
					}

				}, function() {
					alert("连接失败")
				})
			}
		}

	}])