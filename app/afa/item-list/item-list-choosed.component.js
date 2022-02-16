'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('itemList').
component('itemListchoosed', {
  templateUrl: 'afa/item-list/item-list-choosed.template.html',
  controller: ['$http', 'itemsService', function ChoosedListController($http, itemsService) {
    var self = this;
    self.orderProp = 'age';
    // console.log(routeTemplateMonitor);
    //  routeTemplateMonitor.startMonitoring()
 console.log(itemsService.getItems());
    $http.get('items/items.json').then(function (response) {
    //  console.log(response.data);
      var result;
      self.items = response.data.filter((item) => {
         result = false;
      
        for (let element of itemsService.getItems()) {
          console.log(item.id, element.id)
          if (item.id === element.id) {
            result = true;
            break;
          };
          
       }
        return result
      });
      // self.items = response.data;
    //  console.log(self.items);
    });

    // self.itemsChoosed = itemsService.getItems();
    //  self.items = itemsService.choosedItems
  }]
})