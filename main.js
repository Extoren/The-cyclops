function initialSetup() {
    if (document.getElementById("red") != null) {
      setTimeout(function() {
        document.getElementById('red').style.display = 'block';
      }, 5000);
    }
  }

  initialSetup();

  function initialSetup2() {
    if (document.getElementById("blue") != null) {
      setTimeout(function() {
        document.getElementById('blue').style.display = 'block';
      }, 26000);
    }
  }

  initialSetup2()

  function initialSetup3() {
    if (document.getElementById("yellow") != null) {
      setTimeout(function() {
        document.getElementById('yellow').style.display = 'block';
      }, 10000);
    }
  }
  
  initialSetup3()






  var elem = document.documentElement;
        function openFullscreen() {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.mzRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
          }
        }
        
        function closeFullscreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mzExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
          }
        }
