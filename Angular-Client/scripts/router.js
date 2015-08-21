'use strict';

angular.module('Client',['ngResource','ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/notes',{
			templateUrl: 'views/note/index.html',
			controller: 'IndexNoteCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});