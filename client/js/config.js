var portfolio = angular.module('portfolio', ['ngMaterial', 'ngRoute'])

portfolio.config(function($routeProvider){

  $routeProvider
  .when('/about',{
    templateUrl: "/partials/about.html"
  })
  .otherwise({
    redirectTo: '/about'
  })
})
