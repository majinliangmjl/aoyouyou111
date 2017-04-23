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