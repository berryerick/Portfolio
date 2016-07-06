portfolio.controller('mainController', function(projectFactory){
  console.log('in mainController')
  var that = this


  this.errors = []

})

portfolio.controller('aboutController', function(projectFactory){
  console.log('in aboutController')
  var that = this


  this.errors = []

})
portfolio.controller('adminController', function(projectFactory, $rootScope){
  console.log('in adminController')
  var that = this
  this.login = function () {
    console.log(this.admin);
    projectFactory.login(this.admin, function(){
      $rootScope.sessionAdmin = projectFactory.sessionAdmin
      console.log($rootScope.sessionAdmin, projectFactory.sessionAdmin);
    })
  }
  // console.log(this);
  this.errors = []

})

portfolio.controller('editController', function(projectFactory, $location, $rootScope){
  console.log('in editController')
  var that = this
  var newproject = {
    title: "",
    abstract: "",
    links: [{title: "", url: ""},]
  }
  if (!$rootScope.sessionAdmin) {
    $location.path('/')
  }

  this.errors = []

})
