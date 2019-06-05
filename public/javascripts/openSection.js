function openSection(sectionName){
  // Hide all tabs by default
  var i, containers;
  if(sectionName == 'index-container'){
    document.getElementById('projects-container').style.display = "none";
    document.getElementById('index-container').style.display = "block";
  } else{
        document.getElementById('projects-container').style.display = "block";
    document.getElementById('index-container').style.display = "none";
  }
}
