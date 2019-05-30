function openTab(tabName, elmnt) {
  // Check if tab is currently open. Close if it is.
  if(elmnt.classList.contains("open")){
    document.getElementById(tabName).style.display = "none";
    elmnt.classList.remove("open");
  }

  else{
    // Hide all tabs by default
    var i, content, tablinks;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }

    // Reset background colors, prepping for tab switch
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].classList.remove("open");
    }

    // Show the desired tab, specified by tabName
    document.getElementById(tabName).style.display = "block";
    elmnt.className = elmnt.className + " open ";
  }
}

document.getElementById("default").click();
