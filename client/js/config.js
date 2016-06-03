var portfolio = angular.module('portfolio', ['ngMaterial', 'ngRoute'])

portfolio.config(function($routeProvider, $mdIconProvider, $mdThemingProvider){
  $mdIconProvider.icon('menu', './img/bars.svg', 200)
  $mdIconProvider.icon('linkedin', './img/linkedin.svg', 200)

  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('teal')
    // .dark()


  $routeProvider
  .when('/about',{
    templateUrl: "/partials/about.html"
  })
  .when('/design',{
    templateUrl: "/partials/design.html"
  })
  .otherwise({
    redirectTo: '/about'
  })
})
