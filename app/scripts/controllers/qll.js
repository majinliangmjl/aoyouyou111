angular.module('my')
.controller("shijian",["$scope","$timeout", function($scope,$timeout) {
	function timer(){
			$scope.time = (new Date()).getTime();
					$timeout(function(){
					timer()
			},1000)
	}
	timer();
}])
.controller("tjxw",["$scope","$timeout","$http", function($scope,$timeout,$http) {
//			var files;
//			$('.file').change(function(element) {
//				console.log(this.files);
//				files = this.files[0];
//			})
//		   $scope.tjxw=function(){
//		   		var fd = new FormData();
//				fd.append("btn", files);
//				
//		   		$http({
//		     		method:'post',
//		     		url: "http://192.168.191.133:8005/item/images",
//		     		processData: false,
//					contentType: false,
//		     		data:{	     		
//		     			fd
//		     		},
//		     		headers: {
//						'Content-Type': 'application/x-www-form-urlencoded'
//					}
//		     		
//		     	}).then(function(){
//					$http({
//			     		method:'post',
//			     		url: "http://192.168.191.133:8005/item/add",
//			     		processData: false,
//						contentType: false,
//			     		data:{
//			     			biaoti:$scope.biaoti,
//			     			zuozhe:$scope.name,
//			     			regtime:$scope.datee,
//			     			neirong:$scope.cont,
//			     			base1:$scope.xwt,
//			     			images:e.name
//			     		},
//			     		headers: {
//							'Content-Type': 'application/x-www-form-urlencoded'
//						}
//			     	}).then(function(){
//		//	     		alert('登录成功')	
//			     	},function(){
//			     		alert('error')
//			     	})	
//		     	},function(){
//		     		alert('error')
//		     	})
//		   }			
}])
	
/*新闻分类*/
.controller("xwfl",["$scope","$timeout","$http", function($scope,$timeout,$http) {
			$http({
		     	method:'get',
		     	url: "http://192.168.191.133:8005/item/list",
		     	data:{
		     		base1:'h5'
		     	},
		     	processData: false,
				contentType: false,
		     	headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
		     		
		     }).then(function(e){
				$scope.data=e;
				console.log(e)
		     },function(){
		     	alert('error')
		     })
	
}])
