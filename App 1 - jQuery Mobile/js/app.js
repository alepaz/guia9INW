var app = angular.module('myApp', []);
var controllers = {};

controllers.listaCtrl = function($scope, $http){
    $scope.data = [];
    $http.get("http://pymesv.com/cliente04sw/servicio/ws/producto.php")
	    .success(function(response) {
            $scope.data = response;
	        console.log(response)
	    });
}

controllers.cate1 = function($scope, $http){
    $scope.data = [];
    $http.get("http://pymesv.com/cliente04sw/servicio/ws/producto.php?opc=5&id=1")
	    .success(function(response) {
            $scope.data = response;
	        console.log(response)
	    });
}

controllers.cate2 = function($scope, $http){
    $scope.data = [];
    $http.get("http://pymesv.com/cliente04sw/servicio/ws/producto.php?opc=5&id=2")
	    .success(function(response) {
            $scope.data = response;
	        console.log(response)
	    });
}

controllers.cate3 = function($scope, $http){
    $scope.data = [];
    $http.get("http://pymesv.com/cliente04sw/servicio/ws/producto.php?opc=5&id=3")
	    .success(function(response) {
            $scope.data = response;
	        console.log(response)
	    });
}

controllers.cate4 = function($scope, $http){
    $scope.data = [];
    $http.get("http://pymesv.com/cliente04sw/servicio/ws/producto.php?opc=5&id=4")
	    .success(function(response) {
            $scope.data = response;
	        console.log(response)
	    });
}

controllers.cate5 = function($scope, $http){
    $scope.data = [];
    $http.get("http://pymesv.com/cliente04sw/servicio/ws/producto.php?opc=5&id=5")
	    .success(function(response) {
            $scope.data = response;
	        console.log(response)
	    });
}

controllers.producto = function($scope, $http){
    $scope.data = [];
    $http.get("http://pymesv.com/cliente04sw/servicio/ws/historial_compra.php?id=2")
	    .success(function(response) {
            $scope.data = response;
	        console.log(response)
	    });
}

controllers.pais = function($scope, $http){
    $scope.data = [];
    $http.get("http://pymesv.com/cliente04sw/servicio/ws/pais.php")
	    .success(function(response) {
            $scope.data = response;
	        console.log(response)
	    });
}

app.controller(controllers);