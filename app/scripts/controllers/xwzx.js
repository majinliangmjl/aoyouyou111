angular.module("my")
	.controller('yhs_xwzx',['$scope','$http','$state',function($scope,$http,$state){	

			$.ajax({
				type:"get",
				url:"http://192.168.191.111:8005/item/sousuo1",
				async:true,
				data:{
					base1:"angular"
				},
				success: function(data){
					for(var i=0;i<data.length;i++){
						$(".angu1").html('<a href="http://localhost:9000/#!/index.xq?'+data[0].uid+'">'+data[0].biaoti+'</a>')
						$(".angu2").html('<a href="http://localhost:9000/#!/xq?'+data[1].uid+'">'+data[1].biaoti+'</a>')
					    $(".angu3").html('<a href="http://localhost:9000/#!/xq?'+data[2].uid+'">'+data[2].biaoti+'</a>')
//					    $(".angu4").html('<a href="http://localhost:9000/#!/xq?'+data[3].uid+'">'+data[3].biaoti+'</a>')
						$(".xwang").append('<li><a href="http://localhost:9000/#!/xq?'+data[i].uid+'">'+data[i].biaoti+'</a></li>')
					}
					console.log(data)
				}
				
			});
			$.ajax({
				type:"get",
				url:"http://192.168.191.111:8005/item/sousuo2",
				async:true,
				data:{
					base1:"css3"
				},
				success: function(data){
					for(var i=0;i<data.length;i++){
						$(".css1").html('<a href="http://localhost:9000/#!/xq?'+data[0].uid+'">'+data[0].biaoti+'</a>')
						$(".css2").html('<a href="http://localhost:9000/#!/xq?'+data[1].uid+'">'+data[1].biaoti+'</a>')
					    $(".css3").html('<a href="http://localhost:9000/#!/xq?'+data[2].uid+'">'+data[2].biaoti+'</a>')
					    $(".css4").html('<a href="http://localhost:9000/#!/xq?'+data[3].uid+'">'+data[3].biaoti+'</a>')
						$(".xwcss").append('<li><a href="http://localhost:9000/#!/index/index.xq?'+data[i].uid+'">'+data[i].biaoti+'</a></li>')
					}
					console.log(data)
				}
				
			});
			$.ajax({
				type:"get",
				url:"http://192.168.191.111:8005/item/sousuo3",
				async:true,
				data:{
					base1:"h5"
				},
				success: function(data){
					for(var i=0;i<data.length;i++){
						$(".html1").html('<a href="http://localhost:9000/#!/xq?'+data[0].uid+'">'+data[0].biaoti+'</a>')
						$(".html2").html('<a href="http://localhost:9000/#!/xq?'+data[1].uid+'">'+data[1].biaoti+'</a>')
					    $(".html3").html('<a href="http://localhost:9000/#!/xq?'+data[2].uid+'">'+data[2].biaoti+'</a>')
					    $(".html4").html('<a href="http://localhost:9000/#!/xq?'+data[3].uid+'">'+data[3].biaoti+'</a>')
						$(".xwhtml").append('<li><a href="http://localhost:9000/#!/xq?'+data[i].uid+'">'+data[i].biaoti+'</a></li>')
					}
					console.log(data)
				}
				
			});
			$.ajax({
				type:"get",
				url:"http://192.168.191.111:8005/item/sousuo4",
				async:true,
				data:{
					base1:"javascript"
				},
				success: function(data){
					for(var i=0;i<data.length;i++){
						$(".javascript1").html('<a href="http://localhost:9000/#!/xq?'+data[0].uid+'">'+data[0].biaoti+'</a>')
						$(".javascript2").html('<a href="http://localhost:9000/#!/xq?'+data[1].uid+'">'+data[1].biaoti+'</a>')
					    $(".javascript3").html('<a href="http://localhost:9000/#!/xq?'+data[2].uid+'">'+data[2].biaoti+'</a>')
					    $(".javascript4").html('<a href="http://localhost:9000/#!/xq?'+data[3].uid+'">'+data[3].biaoti+'</a>')
						$(".xwjavascript").append('<li><a href="http://localhost:9000/#!/xq?'+data[i].uid+'">'+data[i].biaoti+'</a></li>')
					}
					console.log(data)
				}
				
			});
			$.ajax({
				type:"get",
				url:"http://192.168.191.111:8005/item/sousuo5",
				async:true,
				data:{
					base1:"jq"
				},
				success: function(data){
					for(var i=0;i<data.length;i++){
						$(".jq1").html('<a href="http://localhost:9000/#!/xq?'+data[0].uid+'">'+data[0].biaoti+'</a>')
						$(".jq2").html('<a href="http://localhost:9000/#!/xq?'+data[1].uid+'">'+data[1].biaoti+'</a>')
					    $(".jq3").html('<a href="http://localhost:9000/#!/xq?'+data[2].uid+'">'+data[2].biaoti+'</a>')
					    $(".jq4").html('<a href="http://localhost:9000/#!/xq?'+data[3].uid+'">'+data[3].biaoti+'</a>')
						$(".xwjq").append('<li><a href="http://localhost:9000/#!/xq?'+data[i].uid+'">'+data[i].biaoti+'</a></li>')
					}
					console.log(data)
				}
				
			});
	}])

