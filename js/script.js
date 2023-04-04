// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

// Get the button
let mybutton = document.getElementById("myBtn");
  
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}
  
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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

  function wallV1(imgs) {
    var expandImg = document.getElementById("product-img-4");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

function wallV2(imgs) {
    var expandImg = document.getElementById("product-img-5");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

function lightPath(imgs) {
    var expandImg = document.getElementById("product-img-6");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }
  
function lightFenV1(imgs) {
    var expandImg = document.getElementById("product-img-7");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

function lightFenV2(imgs) {
    var expandImg = document.getElementById("product-img-8");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  } 

function lightFenV3(imgs) {
    var expandImg = document.getElementById("product-img-9");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

    
    
   
  