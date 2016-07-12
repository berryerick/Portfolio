portfolio.controller('mainController', function(projectFactory){
  console.log('in mainController')
  var that = this
  this.errors = []
  projectFactory.getprojects(function(){
    that.allprojects = projectFactory.allprojects
  })
})

portfolio.controller('aboutController', function(projectFactory){
  console.log('in aboutController')
  var that = this
  this.errors = []
  this.projects = []

  that.getprojects = function(){
    var array = []
    for (var i = that.allprojects.length -1; i >= 0; i--) {
      console.log(that.allprojects[i]);
      if (that.allprojects[i].category == "about") {
        array.push(that.allprojects[i])
      }
    }
    that.projects = array
  }

  if (!projectFactory.allprojects) {
    projectFactory.getprojects(function(){
      that.allprojects = projectFactory.allprojects
      that.getprojects()
    })
  } else {
    that.allprojects = projectFactory.allprojects
    that.getprojects()
  }


})
portfolio.controller('projectsController', function(projectFactory){
  console.log('in projectsController')
  var that = this
  this.errors = []

  this.getprojects = function(){
    var array = []
    for (var i = projectFactory.allprojects.length -1; i >= 0; i--) {
      console.log(projectFactory.allprojects[i]);
      if (projectFactory.allprojects[i].category == "projects") {
        array.push(projectFactory.allprojects[i])
      }
    }
    that.projects = array
    console.log('***************', that.projects)
  }

  if (!projectFactory.allprojects) {
    projectFactory.getprojects(function(){
      that.allprojects = projectFactory.allprojects
      that.getprojects()
    })
  } else {
    that.allprojects = projectFactory.allprojects
    that.getprojects()
  }

})
portfolio.controller('designsController', function(projectFactory){
  console.log('in designsController')
  var that = this
  this.errors = []
  this.getprojects = function(){
    var array = []
    for (var i = projectFactory.allprojects.length -1; i >= 0; i--) {
      console.log(projectFactory.allprojects[i]);
      if (projectFactory.allprojects[i].category == "design") {
        array.push(projectFactory.allprojects[i])
      }
    }
    that.projects = array
  }
  if (!projectFactory.allprojects) {
    projectFactory.getprojects(function(){
      that.allprojects = projectFactory.allprojects
      that.getprojects()
    })
  } else {
    that.allprojects = projectFactory.allprojects
    that.getprojects()
  }

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
  this.newproject = { links: [] }

  // check for admin permissions
  if (!sessionStorage.sessionAdmin) $location.path('/')

  this.errors = []

  this.logout = function(){
    projectFactory.logout()
  }

  this.getprojects = function(){
    this.allprojects = projectFactory.allprojects
    var projects = []
    var design = []
    var about = []
    for (var i = this.allprojects.length -1; i >= 0; i--) {
      console.log(this.allprojects[i]);
      if (this.allprojects[i].category == "projects") {
        projects.push(this.allprojects[i])
      }else if (this.allprojects[i].category == "design") {
        design.push(this.allprojects[i])
      }else if (this.allprojects[i].category == "about") {
        about.push(this.allprojects[i])
      }
    }
    this.projects = projects
    this.design = design
    this.about = about
  }
  this.getprojects()

  this.create = function(){
    console.log(this.newproject);
    // this.allprojects.push(this.newproject)
    // this.getprojects()

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
  // check for admin permissions

  if (!sessionStorage.sessionAdmin) $location.path('/')

  this.errors = []

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
