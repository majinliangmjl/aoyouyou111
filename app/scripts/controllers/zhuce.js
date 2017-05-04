angular.module("my")

.controller('zhuce',['$scope','$http','$state',function($scope,$http,$state){
	$scope.user = "";
	$scope.pwd = "";
	$scope.phone="";
	$scope.nc ="";
	
	$scope.y_zhuce = function(){
		if($scope.user==""||$scope.tel==""||$scope.pwd==""||$scope.nc==""){
//			alert("亲！输入不能为空哦")
			$('#popup').css({"opacity":"1","top":"40px"})
						 $(".cont2").html('亲！输入不能为空哦')
						$('#mask_shadow').css({"display":"block"})
						setTimeout(function () {
						    $("#popup").css({"opacity":"0","top":"20px"})
						    $(".cont2").html('亲！输入不能为空哦')
						    $('#mask_shadow').css({"display":"none"})
						    
						},1500);
		}else{
			//console.log(username)
			$http({
				method:'post',
				url:"http://192.168.191.121:8005/item/zhuce",
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
					//alert("注册成功，确定跳转到登陆页面")
					localStorage.setItem('yhm',$('.zcname').val())
					$('#popup').css({"opacity":"1","top":"40px"})
						 $(".cont2").html('注册成功，确定跳转到登陆页面')
						$('#mask_shadow').css({"display":"block"})
						setTimeout(function () {
						    $("#popup").css({"opacity":"0","top":"20px"})
						    $(".cont2").html('注册成功，确定跳转到登陆页面')
						    $('#mask_shadow').css({"display":"none"})
						    $state.go('login')
						},1500);
				}else if(reqs.data.flag==2){
					//alert("此用户名以重复")
					$('#popup').css({"opacity":"1","top":"40px"})
						 $(".cont2").html('此用户名以重复')
						$('#mask_shadow').css({"display":"block"})
						setTimeout(function () {
						    $("#popup").css({"opacity":"0","top":"20px"})
						    $(".cont2").html('此用户名以重复')
						    $('#mask_shadow').css({"display":"none"})
						    
						},1500);
				}else if(reqs.data.flag==3){
					//alert("注册失败")
					$('#popup').css({"opacity":"1","top":"40px"})
						 $(".cont2").html('注册失败')
						$('#mask_shadow').css({"display":"block"})
						setTimeout(function () {
						    $("#popup").css({"opacity":"0","top":"20px"})
						    $(".cont2").html('注册失败')
						    $('#mask_shadow').css({"display":"none"})
						    
						},1500);
				}
			},function(){
				alert("数据请求失败")
			})
		}
	}
}])