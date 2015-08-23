'use strict';

angular.module('Client')
	.controller('IndexNoteCtrl',function($scope, NoteResource){
		$scope.Notes = NoteResource.query();
	})
	.controller('CreateNoteCtrl',function($scope, NoteResource, $location, $timeout){
		$scope.title="Crear Nota";
		$scope.button="Guardar";
		$scope.Note={};
		$scope.saveNote = function(){
			NoteResource.save($scope.Note);
			Materialize.toast('Nota Creada.',5000,'green accent-4');
			$timeout(function(){
				$location.path('/notes');	
			},1000);
		};
	});