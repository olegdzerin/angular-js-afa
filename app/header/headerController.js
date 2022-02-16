'use strict';



  // (function(angular) {
    angular.module('itemList', [])
  .controller('HeaderController', ['$scope', function($scope) {
    $scope.username = 'World';
   console.log('d');
    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };
  }]);
  // })(window.angular);