portfolio.controller('mainController', function(projectFactory, $mdMedia, $mdSidenav){
  console.log('in mainController')
  var that = this
  this.toggleMenu = function(){
    $mdSidenav('nav').toggle()

    console.log("HELLO?");
  }
  // this.$watch(function(){return $mdMedia('ls');} function(big){
  //   that.bigScreen = big;
  // })
  // this.screenIsSmall = $mdMedia('sm')
  this.errors = []

})

portfolio.controller('aboutController', function(projectFactory, $mdMedia){
  console.log('in aboutController')
  var that = this

  // this.$watch(function(){return $mdMedia('ls');} function(big){
  //   that.bigScreen = big;
  // })
  // this.screenIsSmall = $mdMedia('sm')
  this.errors = []

})
