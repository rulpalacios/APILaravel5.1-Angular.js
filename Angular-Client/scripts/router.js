'use strict';

angular.module('Client',['ngResource','ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/notes',{
			templateUrl: 'views/note/index.html',
			controller: 'IndexNoteCtrl'
		})
		.when('/notes/new',{
			templateUrl: 'views/note/create.html',
			controller: 'CreateNoteCtrl'
		})
		.when('/notes/edit/:id',{
			templateUrl: 'views/note/create.html',
			controller: 'EditNoteCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});