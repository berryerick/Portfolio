$(document).ready(function(){
  // Initialize collapse button
  $(".button-collapse").sideNav({
    closeOnClick: true
  })

  $(".sidenav .nav-button#nav"+location.hash.slice(2)).addClass("active")
  console.log("current location for button", location.hash.slice(2));
  $(window).on('hashchange', function(){
    $(".sidenav .nav-button").removeClass("active");
    $(".sidenav .nav-button#nav"+location.hash.slice(2)).addClass("active")
  })
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
})
