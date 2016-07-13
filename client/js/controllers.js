portfolio.controller('aboutController', function(projectFactory){
  console.log('in aboutController')
  var that = this
  this.errors = []
  this.projects = []

  if (!projectFactory.about) {
    projectFactory.index(function(){
      that.projects = projectFactory.about
    })
  } else {
    that.projects = projectFactory.about
  }


})
portfolio.controller('projectsController', function(projectFactory){
  console.log('in projectsController')
  var that = this
  this.errors = []
  this.projects = []

  if (!projectFactory.allprojects) {
    projectFactory.index(function(){
      that.projects = projectFactory.projects
    })
  } else {
    that.projects = projectFactory.projects
  }

})
portfolio.controller('designsController', function(projectFactory){
  console.log('in designsController')
  var that = this
  this.errors = []
  this.projects = []

  if (!projectFactory.allprojects) {
    projectFactory.index(function(){
      that.projects = projectFactory.design
    })
  } else {
    that.projects = projectFactory.design
  }

})
portfolio.controller('adminController', function(projectFactory){
  console.log('in adminController')

  var that = this
  this.errors = []

  this.login = function () {
    console.log( "logging in ",this.admin);
    projectFactory.login(this.admin, function(){
      // console.log(sessionStorage.sessionAdmin);
    })
  }
})

portfolio.controller('editController', function(projectFactory, $location){
  // console.log('in editController')
  var that = this
  this.newproject = { links: [] }
  this.errors = []

  // check for admin permissions
  if (!sessionStorage.sessionAdmin) $location.path('/')

  this.logout = function(){
    projectFactory.logout()
  }

  this.getprojects = function(){
    that.allprojects = projectFactory.allprojects
    that.projects = projectFactory.projects
    that.design = projectFactory.design
    that.about = projectFactory.about
    projectFactory.index(function () {
      that.allprojects = projectFactory.allprojects
      that.projects = projectFactory.projects
      that.design = projectFactory.design
      that.about = projectFactory.about
    })
  }
  this.getprojects()

  this.create = function(){
    projectFactory.create(that.newproject, function(){
      that.allprojects = projectFactory.allprojects
      that.getprojects()
      that.newproject = { links: [] }
    })
  }

  this.delete = function(id){
    if (confirm('Are you sure you want to delete this?')) {
      projectFactory.delete(id, function(){
        that.getprojects()
      })
    }

  }

})
portfolio.controller('editOneController', function(projectFactory, $location, $routeParams){
  console.log('in editOneController')
  var that = this
  this.newproject = { links: [] }
  this.errors = []

  // check for admin permissions
  if (!sessionStorage.sessionAdmin) $location.path('/')

//get one project to edit
  this.getproject = function(){
    console.log($routeParams.id);
    for (var i = projectFactory.allprojects.length -1; i >= 0; i--) {
      console.log(projectFactory.allprojects[i]);
      if (projectFactory.allprojects[i]._id == $routeParams.id) {
        this.project = projectFactory.allprojects[i]
        return
      }
    }
  }
  this.getproject()

  this.update = function(){
    console.log("updating",this.project);
    projectFactory.update( that.project, $routeParams.id, function(){
      $location.path('/edit_projects')
    })
  }

  this.logout = function(){
    projectFactory.logout()
  }

})
