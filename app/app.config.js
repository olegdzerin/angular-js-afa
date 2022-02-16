'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/items', {
          template: '<item-list></item-list>'
        }).
        when('/items/:itemId', {
          template: '<item-detail></item-detail>'
        }).
        when('/items-choosed', {
          template: '<item-listchoosed></item-listchoosed>'
        }).
        when('/app-log', {
          template: '<app-log></app-log>'
        }).
        otherwise('/items');
    }
  ]);
