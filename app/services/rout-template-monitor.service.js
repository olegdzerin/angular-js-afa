

angular.module('phonecatApp').factory('batchLog', ['$interval', '$log', function($interval, $log) {
  var messageQueue = [];
  console.log('message')
  function log() {
      console.log(1);
    if (messageQueue.length) {
      $log.log('batchLog messages: ', messageQueue);
      messageQueue = [];
    }
  }

  // start periodic checking
  $interval(log, 50000);

  return function(message) { 
       console.log(messageQueue);
       messageQueue.push(message);
      
    
  }
}]);


// angular.module('phonecatApp').factory('counter'[function(){

// }])
/**
 * `routeTemplateMonitor` monitors each `$route` change and logs the current
 * template via the `batchLog` service.
 */
 angular.module('phonecatApp').factory('routeTemplateMonitor', ['$route', 'batchLog', '$rootScope',
  function($route, batchLog, $rootScope) {
    return {
      startMonitoring: function() {
        var event; 
     
         
       event = $rootScope.$on('$routeChangeSuccess', function() {
          //  console.log($route.current);
           // console.log(event)
       batchLog($route.current ? $route.current.template : null);  
        });
       
      }
    };
  }]);

