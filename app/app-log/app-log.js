'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('appLog').
  component('appLog', {
    template: `This is appLog component`,
    // templateUrl: 'afa/item-list/item-list.template.html',
    controller: [ 'routeTemplateMonitor', function AppLogController( routeTemplateMonitor) {
      var self = this;
      self.orderProp = 'age';
     // console.log(routeTemplateMonitor);
      routeTemplateMonitor.startMonitoring()

    
    }]
  })
;