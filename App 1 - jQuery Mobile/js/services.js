angular.module('myAppServices', ['ngResource']).

  factory('BreakinBadChar', function($resource){

  return $resource('http://pymesv.com/cliente04sw/servicio/ws/producto.php', {}, {

    query: {method:'GET', params:{resourceName:'breaking_bad_char'}, isArray: true}

  });

});