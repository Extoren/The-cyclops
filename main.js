function initialSetup() {
    if (document.getElementById("red") != null) {
      setTimeout(function() {
        document.getElementById('red').style.display = 'block';
      }, 8000);
    }
  }
  
  initialSetup();