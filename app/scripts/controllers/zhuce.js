//angular.module("aoyouyouApp")
//.controller('zhuce',['$scope','$http','$state',function($scope,$http,$state){
//	$scope.user = "";
//	$scope.pwd = "";
//	$scope.phone="";
//	$scope.we ="";
//	$scope.y_zhuce = function(){
//		if($scope.user==""||$scope.tel==""||$scope.pwd==""||$scope.we==""){
//			alert("亲！输入不能为空哦")
//		}else{
//			$http({
//				method:'post',
//				url:"http://192.168.43.109:8005/item/zhuce",
//				data:{
//					username:$scope.user,
//					password:$scope.pwd,
//					phone:$scope.phone
//				},
//				headers:{'Content-Type': 'application/x-www-form-urlencoded'}
//			}).then(function(reqs){
//				if(reqs. flag==1){
//					alert("注册成功，确定跳转到登陆页面")
//				}else if(reqs.flag==2){
//					alert("此用户名以重复")
//				}else if(reqs.flag==3){
//					alert("注册失败")
//				}
//			},function(){
//				alert("数据请求失败")
//			})
//		}
//	}
//}])
