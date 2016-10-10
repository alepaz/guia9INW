var app = angular.module('myApp', ['ngStorage']);
var controllers = {};

controllers.navCtrl = function($scope, $window) {
    $scope.goTo = function(path) {
        $window.location.href = (path + '.html');
    }
}

controllers.listaCtrl = function($scope, $http, $sessionStorage, $window) {
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
    $scope.cantidad = 1;
    $scope.carrito = [];

    if ($sessionStorage.producto != null) {
        $scope.producto = $sessionStorage.producto;
    }

    if ($localStorage.carrito != null) {
        $scope.carrito = $localStorage.carrito;
    }

    $scope.addCarrito = function(item) {
        if ($scope.cantidad > 0) {
            $scope.carrito.push({ "item": item, "cantidad": $scope.cantidad });
            $localStorage.carrito = $scope.carrito;
            alert("Se ha(n) agregado " + $scope.cantidad + " " + item.nombre + " al carrito correctamente");
        }
    }

    $scope.goBack = function() {
        $window.history.back();
    }
}

controllers.carritoCtrl = function($scope, $localStorage, $window) {
    $scope.carrito = [];
    $scope.total = 0;

    if ($localStorage.carrito != null) {
        $scope.carrito = $localStorage.carrito;
        $scope.carrito.forEach(function(p) { 
            $scope.total += (p.item.precio * p.cantidad);
        })
    }

    $scope.remove = function(item) {
        let itemIndex = $scope.carrito.indexOf(item);
        $scope.carrito.splice(itemIndex, 1);
        $scope.total -= (item.item.precio * item.cantidad);
        $localStorage.carrito = $scope.carrito;
    }

    $scope.limpiarCarrito = function() {
        $scope.carrito = null;
        $localStorage.carrito = $scope.carrito;
        $scope.total = 0;
    }

    $scope.isShowed = function() {
        return ($scope.total > 0) ? true : false;
    }
    
}

app.controller(controllers);