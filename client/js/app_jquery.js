$(document).ready(function(){
  // Initialize collapse button
  $(".button-collapse").sideNav({
    closeOnClick: true
  })

  $(".sidenav .nav-button#nav"+location.hash.slice(2)).addClass("active")
  console.log("current location for button", location.hash.slice(2));
  $(window).on('hashchange', function(){
    $(".sidenav .nav-button").removeClass("active");
    if (location.hash.slice(2) == "design" || location.hash.slice(2) == "about" || location.hash.slice(2) == 'projects') {
      $(".sidenav .nav-button#nav"+location.hash.slice(2)).addClass("active")
    }
  })
})
