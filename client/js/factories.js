portfolio.factory('projectFactory', function($http, $location, $routeParams){
  var factory = {}
  factory.allprojects = []
  factory.getprojects = function(){
    $http.get('/projects').success(function(output){

      factory.allprojects = output
      console.log('project factory index method output: ', output)
    })
  }
  factory.getprojects()

  factory.login = function(info, callback){
    // console.log("in login with", info);
    $http.post('/login', info).success(function(output){
      if (output.status) {
        // console.log("output SUCCESSFUL:", output);
        sessionStorage.sessionAdmin = true
        $location.path('/edit_projects')
      }
      else {
        console.log('output unsuccessful', output);
      }
      callback()
    })
  }
  factory.logout = function(){
    sessionStorage.clear()
    $location.path("/admin")
  }

  factory.index = function(callback){
    factory.getprojects()
    callback(factory.allprojects)
  }

  factory.create= function (data, callback) {
    $http.post('/projects', data).success(function(output){
      console.log("post /projects output", output);
      if (output.saved) {
        factory.allprojects.push(output.project)
      }
      callback()
    })
  }
  factory.delete = function(id, callback){
    console.log('deleting', id);
    for (var i = 0; i < this.allprojects.length; i++) {
      if (this.allprojects[i]._id == id) {
        this.allprojects.splice(i, 1)
        console.log(this.allprojects);
      }
    }
    callback()
  }

  return factory
})
