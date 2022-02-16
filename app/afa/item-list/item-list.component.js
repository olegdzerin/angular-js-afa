'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'afa/item-list/item-list.template.html',
    controller: ['$http' , function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';
     // console.log(routeTemplateMonitor);
    //  routeTemplateMonitor.startMonitoring()

      $http.get('items/items.json').then(function(response) {
        self.items = response.data;
      });
    }]
  }).
    controller('HeaderController', ['$scope', '$rootScope', function($scope,$rootScope) {
    $scope.username = 'World';
    $rootScope.root = 'root'
    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };
  }]);


 
