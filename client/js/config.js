var mean_belt = angular.module('portfolio', ['ngRoute'])

mean_belt.config(function($routeProvider){

  $routeProvider
  .when('/about',{
    templateUrl: "/partials/about.html"
  })
  .otherwise({
    redirectTo: '/about'
  })
})
