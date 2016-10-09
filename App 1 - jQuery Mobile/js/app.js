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



app.controller(controllers);