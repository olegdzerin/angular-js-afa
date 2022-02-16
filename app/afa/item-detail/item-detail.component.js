'use strict';

// Register `phoneDetail` component, along with its associated controller and template

angular.
module('itemDetail').
component('itemDetail', {
  templateUrl: 'afa/item-detail/item-detail.template.html',
  controller: ['$http', '$routeParams', 'itemsService',
    function ItemDetailController($http, $routeParams, itemsService) {
      var self = this;
      self.acount_boxes = 0;
      self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
      };
      self.toChoosed = function () {
        console.log(self.acount_boxes);
        itemsService.addItem(self.item)
      }

      $http.get('items/' + $routeParams.itemId + '.json').then(function (response) {
        self.item = response.data;
        // console.log(self.item);
        self.setImage(self.item.images[0]);
      });
    }
  ]
});