'use strict';

/**
 * @ngdoc overview
 * @name aoyouyouApp
 * @description
 * # aoyouyouApp
 *
 * Main module of the application.
 */

angular.module('my', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('login', {
			url: "/login",
			templateUrl: "views/login.html"
	})
	.state("zhuce",{
        //注册
        url:'/zhuce'
        ,templateUrl:'views/zhuce.html'
      })
	.state("index",{
        //注册
        url:'/index'
        ,templateUrl:'views/index.html'
     })
	.state("xq",{
        //详情
        url:'/xq'
        ,templateUrl:'views/xq.html'
      })
	.state('index.cont1', {
			url: "/index.cont1",
			templateUrl: "views/cont1.html"
	})
	.state('index.cont2', {
			url: "/index.cont2",
			templateUrl: "views/cont2.html"
	})
	.state('index.xq', {
			url: "/index.xq",
			templateUrl: "views/xq2.html"
	})
	.state('index.y_xwzx', {
			url: "/index.y_xwzx",
			templateUrl: "views/y_xwzx.html"
	})

	$urlRouterProvider.otherwise("/login")

}])

