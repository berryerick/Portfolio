portfolio.factory('projectFactory', function($http, $location, $routeParams){
  var factory = {}
  factory.sessionAdmin = false

  factory.login = function(info, callback){
    console.log("in login with", info);
    $http.post('/login', info).success(function(output){
      if (output.status) {
        console.log("output SUCCESSFUL:", output);
        factory.sessionAdmin = true
        $location.path('/edit_projects')
      }
      else {
        console.log('output unsuccessful', output);
      }
    })
    callback()
  }

  factory.index = function(callback){
    $http.get('/users').success(function(output){
      console.log('user factory index method output: ', output)

      // factory.users = output
      // callback(factory.users)
    })
  }

  return factory
})
