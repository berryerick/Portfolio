var portfolio = angular.module('portfolio',  ['ngRoute'])

portfolio.config(function($routeProvider){

  $routeProvider
  .when('/about',{
    templateUrl: "/partials/about.html"
  })
  .when('/design',{
    templateUrl: "/partials/design.html"
  })
  .when('/projects',{
    templateUrl: "/partials/projects.html"
  })
  .when('/admin',{
    templateUrl: "/partials/admin.html"
  })
  .when('/edit_projects',{
    templateUrl: "/partials/edit_projects.html"
  })
  .when('/edit/:id',{
    templateUrl: "/partials/edit_one.html"
  })
  .otherwise({
    redirectTo: '/about'
  })
})
