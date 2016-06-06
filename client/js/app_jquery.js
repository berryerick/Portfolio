$(document).ready(function(){
  // Initialize collapse button
  $(".button-collapse").sideNav({
    closeOnClick: true,

  });
  $(".sidenav .nav-button").click(function(){
    $(".sidenav .nav-button").removeClass("active")
    $(this).addClass("active")
  })
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
})
