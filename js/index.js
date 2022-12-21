let app = angular.module("MyApp", []);
app.controller("formCtrl", function ($scope) {
    $scope.tarifa = 250;
    $scope.recorrido;
    $scope.descuento = 0;
    $scope.total;
    $scope.calcular = function () {

	if($scope.recorrido <= 300){
		$scope.total = $scope.tarifa
	}else if($scope.recorrido <= 1000){
		let tarifaExcesoXKm = 30;
		let adicional = $scope.recorrido - 300;
		$scope.total = $scope.tarifa + (adicional * tarifaExcesoXKm);
	}else if($scope.recorrido > 1000){
		let tarifaExcesoHasta1000 = 30;
		let tarifaExcesoMayor1000 = 20;

		let adicional = $scope.recorrido - 1000;
		let subtotal700 = 700 * tarifaExcesoHasta1000;
		$scope.total = $scope.tarifa + subtotal700 + (adicional * tarifaExcesoMayor1000);
	}

	if($scope.total > 500){
		$scope.descuento = (10 * $scope.total)/100
	}
	$scope.total = $scope.total - $scope.descuento;
  };
  $scope.calcular();

});

