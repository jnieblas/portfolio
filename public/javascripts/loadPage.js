var page;

function load(){
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("lds-grid").style.display = "none";
  document.getElementById("stuff").style.display = "block";
}
