// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

function solGrey(imgs) {
    var expandImg = document.getElementById("product-img-1");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

  function solGreen(imgs) {
    var expandImg = document.getElementById("product-img-2");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

function solBrown(imgs) {
    var expandImg = document.getElementById("product-img-3");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }


    
    
   
  