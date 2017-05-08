angular.module("my")
.controller('yhs_xq',['$scope','$http',function($scope,$http){
	var lb1=location.href;
	var lb2=lb1.split("?")
	var uid=lb2[1]
	console.log(uid)
	
	$.ajax({
		type:"get",
		url:"http://192.168.191.111:8005/item/list2",
		async:true,
		data:{
			uid:uid
		},
		success: function(data){
			console.log(data)
			$(".bt").html(data[0].biaoti)
			$('.zz').html("作者："+data[0].zuozhe)
			
		    $('.yhs_box1').html(data[0].neirong)
		    $('.imgg').html("<img src="+'http://192.168.191.111:8005/images/'+data[0].images+">")
			
		}
	})
	
}])
