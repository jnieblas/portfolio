/*
 Two separate functions are necessary, as opening/closing works
 differently for tech and projects.

 Also, since the HTML is only on the index page,
 these functions can not be referencing the same classes.
*/

function openTech(techName, elmnt) {
  // Check if tab is currently open. Close if it is.
  if(elmnt.classList.contains("open")){
    document.getElementById(techName).style.display = "none";
    elmnt.classList.remove("open");
  }

  else{
    // Hide all tabs by default
    var i, content, techButtons;
    content = document.getElementsByClassName("tech-item");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }

    // Reset background colors, prepping for tab switch
    techButtons = document.getElementsByClassName("tech");
    for (i = 0; i < techButtons.length; i++) {
      techButtons[i].style.backgroundColor = "";
      techButtons[i].classList.remove("open");
    }

    document.getElementById(techName).style.display = "block";
    elmnt.className = elmnt.className + " open ";
  }
}

function openProj(projName, elmnt) {
  // Hide all tabs by default
  var i, content, projButtons;
  content = document.getElementsByClassName("proj-item");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  // Reset background colors, prepping for tab switch
  projButtons = document.getElementsByClassName("projects");
  for (i = 0; i < projButtons.length; i++) {
    projButtons[i].style.backgroundColor = "";
    projButtons[i].classList.remove("open");
  }

  document.getElementById(projName).style.display = "block";
  elmnt.className = elmnt.className + " open ";
}
