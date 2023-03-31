// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  function myFunction(imgs) {
    var expandImg = document.getElementById("product-img-1");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }
