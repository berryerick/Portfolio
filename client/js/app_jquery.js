$(document).ready(function(){
  // Initialize collapse button
  $(".button-collapse").sideNav({
    closeOnClick: true
  })
  $(".sidenav .nav-button#nav"+location.hash.slice(2)).addClass("active")
  console.log(location.hash.slice(2));
  $(".sidenav .nav-button").click(function(){
    $(".sidenav .nav-button").removeClass("active")
  })
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
})
