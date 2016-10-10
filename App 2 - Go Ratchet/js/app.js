var app = angular.module('myApp', ['ngStorage']);
var controllers = {};

controllers.listaCtrl = function($scope, $http, $localStorage, $sessionStorage, $window) {
    $scope.productos = [];
    

    $http.get("http://pymesv.com/cliente04sw/servicio/ws/producto.php")
	    .success(function(response) {
            $scope.productos = response;
            console.log(response);
	    });


    $scope.setProducto = function(item) {
        $sessionStorage.producto = item;
        $window.location.href = 'producto.html';
    }
}

controllers.productoCtrl = function($scope, $localStorage, $sessionStorage, $window) {
    $scope.producto = {};
    $scope.carrito = [];

    if ($sessionStorage.producto != null) {
        $scope.producto = $sessionStorage.producto;
    }

    if ($localStorage.carrito != null) {
        $scope.carrito = $localStorage.carrito;
    }

    $scope.goBack = function() {
        $window.history.back();
    }

    $scope.addCarrito = function(item, cant) {
        $scope.carrito.push(item);
        console.log(item.nombre + " agregado/a al carrito");
        $localStorage.carrito = $scope.carrito;
    }
}

controllers.carritoCtrl = function($scope, $localStorage, $window) {
    $scope.carrito = [];

    if ($localStorage.carrito != null) {
        $scope.carrito = $localStorage.carrito;
    }

    $scope.limpiarCarrito = function(){
        $scope.carrito = null;
        $localStorage.carrito = $scope.carrito;
    }
}

app.controller(controllers);