portfolio.factory('projectFactory', function($http, $location, $routeParams){
  var factory = {}


  factory.index = function(callback){
    $http.get('/users').success(function(output){
      console.log('user factory index method output: ', output)
      // factory.users = output
      // callback(factory.users)
    })
  }

  return factory
})
