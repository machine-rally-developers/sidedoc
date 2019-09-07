function openNav() {
  document.getElementById("mySidenav").style.width = "28%";
  document.getElementById("main").style.marginLeft = "30%";
  document.getElementById("main").style.width = "64%";
  document.getElementById("doc-button").style.display = "none";
  //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  /*document.getElementById("main").style.width = "100%"; */
  document.getElementById("main").style.width = "95%";
  document.getElementById("doc-button").style.display = "block";
  // document.body.style.backgroundColor = "white";
}
