'use strict';

angular.module('Client')
	.controller('IndexNoteCtrl', function($scope, NoteResource, $location, $timeout) {
		$scope.Notes = NoteResource.query();

		$scope.removeNote = function(id) {
			NoteResource.delete({
				id: id
			});
			Materialize.toast('Nota Eliminada.', 5000, 'green accent-4');
			$timeout(function() {
				$location.path('/notes');
			}, 1000);
		};
	})
	.controller('CreateNoteCtrl', function($scope, NoteResource, $location, $timeout) {
		$scope.title = "Crear Nota";
		$scope.button = "Guardar";
		$scope.Note = {};
		$scope.saveNote = function() {
			NoteResource.save($scope.Note);
			Materialize.toast('Nota Creada.', 5000, 'green accent-4');
			$timeout(function() {
				$location.path('/notes');
			}, 1000);
		};
	})
	.controller('EditNoteCtrl', function($scope, NoteResource, $location, $timeout, $routeParams) {
		$scope.title = "Editar Nota";
		$scope.button = "Actualizar";
		$scope.Note = NoteResource.get({
			id: $routeParams.id
		});

		$scope.saveNote = function() {
			NoteResource.update($scope.Note);
			Materialize.toast('Nota Actualizada.', 5000, 'green accent-4');
			$timeout(function() {
				$location.path('/notes');
			}, 1000);
		};
	});