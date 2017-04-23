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
	$stateProvider.state('index', {
			url: "/index",
			templateUrl: "views/index.html"
	})
	.state('index.cont1', {
			url: "/index.cont1",
			templateUrl: "views/cont1.html"
	})
	$urlRouterProvider.otherwise("/index")

 							
}])

