function openMenu(){
  var navBar = document.getElementById("navbar-tabs");

  // If menu already open, then close
  if(navBar.classList.contains("open")){
    navBar.style.display = "none";
    navBar.classList.remove("open");
  } else{
    // otherwise, open the menu
    navBar.style.display = "block";
    navBar.className = navBar.className + " open ";
  }
}
