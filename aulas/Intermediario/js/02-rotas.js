var usuarios = angular.module('usuarios', ['ngRoute']);

usuarios.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when(
			'/',
			{
				templateUrl:'02-rotas/listagem.html'
			}
		)
		.when(
			'/editar/:index',
			{
				controller:'editando',
				templateUrl:'02-rotas/editar.html'
			}
		)
		.when(
			'/adicionar',
			{
				controller:'adicionar',
				templateUrl:'02-rotas/adicionar.html'
			}
		)
}]);

usuarios.controller('listagem', ['$scope', function($scope){
	$scope.usuarios = [
		{
			'nome':'Alef',
			'sobrenome':'Richard',
			'cidade':'Belo Horizonte',
			'senha':'1234'
		},
		{
			'nome':'Richard',
			'sobrenome':'Alef',
			'cidade':'Carandaí',
			'senha':'4321'
		}
	];

	$scope.remover = function(indice, nome) {
		if(confirm("Tem certeza que deseja remover "+nome+"?")) {
			$scope.usuarios.splice(indice, 1);
			$location.path('/');
		}
	}

}]);

usuarios.controller('adicionar', [
	'$scope', '$location',
	function($scope, $location){

		$scope.add = function() {
			$scope.usuarios.push($scope.usuario);
			$location.path('/');
		}

	}
])

usuarios.controller('editando', [
	'$scope', '$routeParams', '$location',
	function($scope, $routeParams, $location){
		$scope.usuario = $scope.usuarios[$routeParams.index];

		$scope.edit = function() {
			$scope.usuarios.splice($routeParams.index, 1, $scope.usuario);
			//$scope.retorno = 'Atualizado com sucesso';
			$location.path('/');
		}

	}
]);