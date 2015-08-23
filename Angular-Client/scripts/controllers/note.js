'use strict';

angular.module('Client')
	.controller('IndexNoteCtrl',function(){})
	.controller('CreateNoteCtrl',function($scope, NoteResource){
		$scope.title="Crear Nota";
		$scope.button="Guardar";
		$scope.Note={};
		$scope.saveNote = function(){
			//console.log($scope.Note);
			NoteResource.save($scope.Note);
		};
	});