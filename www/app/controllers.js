'use strict';

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('swipeCtrl', function($scope, Swipe){
    var self = this
    
    $scope.callswipe = function() {
        var data = { "number": self.number};
        var result = Swipe.skicka(data).then(function(data){
            $scope.message = data;
        });
    };
    
    $scope.serialtest = function() {
        console.log();
    }
});