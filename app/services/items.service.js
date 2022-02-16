angular.module('phonecatApp')
.factory('itemsService', [function(){
    var choosedItems = [];
    var order = [];

    return {
        addItem: function(item){
            changedItem = {...item};
          changedItem["number-of-box"] = changedItem["number-of-box"] + 1;
          changedItem.volume_boxes = changedItem["number-of-box"] * changedItem["volume-box"]
           choosedItems.push(changedItem);
           console.log(choosedItems);
        },
        choosedItems: choosedItems,
        getItems: function(){
            return choosedItems
        }
    }

}])