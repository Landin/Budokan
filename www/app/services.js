angular.module('starter.services', [])

.factory('Swipe', function($http, $q) {
    var result;
    
    return {
      skicka: function(data) {

        // Starta promise
        var deferred = $q.defer();
          
        $http({
            method: 'POST',
            url: 'http://localhost:3000/rfid/swipe',
            data: data,
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function() {
            deferred.reject('Du he gick int så bra');
        });
          
        return deferred.promise;
      }
    }
});