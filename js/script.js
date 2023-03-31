// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  function myFunction(imgs) {
    if((document.body.className.match('.sol-lamp-grey'))){
      var expandImg = document.getElementById("product-img-1");
      expandImg.src = imgs.src;
      expandImg.parentElement.style.display = "block";
    
    }else if(('body').is('.sol-lamp-green')){
      var expandImg = document.getElementById("product-img-2");
      expandImg.src = imgs.src;
      expandImg.parentElement.style.display = "block";

    }else if(('body').is('.sol-lamp-brown')){
    
      var expandImg = document.getElementById("product-img-3");
      expandImg.src = imgs.src;
      expandImg.parentElement.style.display = "block";

    }else if(('body').is('.light-wall-v1')){

      var expandImg = document.getElementById("product-img-4");
      expandImg.src = imgs.src;
      expandImg.parentElement.style.display = "block";

    }else if(('body').is('.light-wall-v2')){

      var expandImg = document.getElementById("product-img-5");
      expandImg.src = imgs.src;
      expandImg.parentElement.style.display = "block";

    }else if(('body').is('.light-path')){

      var expandImg = document.getElementById("product-img-6");
      expandImg.src = imgs.src;
      expandImg.parentElement.style.display = "block";

    }else if(('body').is('.light-fen-v1')){

      var expandImg = document.getElementById("product-img-7");
      expandImg.src = imgs.src;
      expandImg.parentElement.style.display = "block";

    }else if(('body').is('.light-fen-v2')){

      var expandImg = document.getElementById("product-img-8");
      expandImg.src = imgs.src;
      expandImg.parentElement.style.display = "block";

    }else if(('body').is('.light-fen-v3')){

      var expandImg = document.getElementById("product-img-9");
      expandImg.src = imgs.src;
      expandImg.parentElement.style.display = "block";
    }
  
  }
  