portfolio.controller('mainController', function(projectFactory){
  console.log('in mainController')
  var that = this
  this.errors = []
})

portfolio.controller('aboutController', function(projectFactory){
  console.log('in aboutController')
  var that = this
  this.projects = []
  console.log("projectFactory.allprojects", projectFactory.allprojects);
  this.getprojects = function(){
    var array = []
    for (var i = projectFactory.allprojects.length -1; i >= 0; i--) {
      console.log(projectFactory.allprojects[i]);
      if (projectFactory.allprojects[i].category == "about") {
        array.push(projectFactory.allprojects[i])
      }
    }
    this.projects = array
  }
  this.getprojects()
  console.log(this.projects);


  this.errors = []

})
portfolio.controller('projectsController', function(projectFactory){
  console.log('in projectsController')
  var that = this


  this.errors = []

})
portfolio.controller('designsController', function(projectFactory){
  console.log('in designsController')
  var that = this


  this.errors = []

})
portfolio.controller('adminController', function(projectFactory){
  console.log('in adminController')

  var that = this
  this.login = function () {
    console.log( "logging in ",this.admin);
    projectFactory.login(this.admin, function(){
      console.log(sessionStorage.sessionAdmin);
    })
  }
  this.errors = []

})

portfolio.controller('editController', function(projectFactory, $location){
  console.log('in editController')
  var that = this
  this.newproject = {
    links: []
  }
  if (!sessionStorage.sessionAdmin) {
    $location.path('/')
  }

  this.errors = []

  this.logout = function(){
    projectFactory.logout()
  }

  this.create = function (){
    console.log(this.newproject);
    projectFactory.create(that.newproject, function(){
      that.allprojects = projectFactory.allprojects
    })
  }

})
