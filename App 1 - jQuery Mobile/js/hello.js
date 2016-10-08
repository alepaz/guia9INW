angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://pymesv.com/cliente04sw/servicio/ws/producto.php').
        then(function(response) {
            $scope.greeting = response.data;
        });
});