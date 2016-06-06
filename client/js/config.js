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
  .otherwise({
    redirectTo: '/about'
  })
})
