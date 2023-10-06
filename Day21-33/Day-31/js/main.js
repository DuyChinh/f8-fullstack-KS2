var btn = document.querySelector(".btn");
var countDown = document.querySelector(".count-down");
function countdown(seconds) {
    var start = performance.now();
    var elapsed = 0;
    var remaining = seconds;
    var requestId;
  
    function handleFrame(timestamp) {
      elapsed = Math.floor((timestamp - start) / 1000);
      remaining = seconds - elapsed;
  
      if (remaining >= 0) {
        countDown.innerText = `${remaining}`;
        if (remaining > 0) {
          requestId = requestAnimationFrame(handleFrame);
        }
        if(remaining === 0) {
            btn.style.cursor = "pointer";
            btn.classList.remove("hidden");
            
            btn.addEventListener("click", function(e) {
              window.location = "https://chinh.io.vn";
            });
  
        }
      }
    }
  
    function update() {
      if (document.visibilityState === 'visible') {
        start = performance.now() - (elapsed * 1000); 
        requestId = requestAnimationFrame(handleFrame);
      } else {
        cancelAnimationFrame(requestId); 
      }
    }
  
    update();
    document.addEventListener('visibilitychange', update);
  }
  
countdown(30); 
  


