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
        // console.log(remaining); // Thay thế dòng này bằng hành động bạn muốn thực hiện sau mỗi giây
        countDown.innerText = `${remaining}`;
        if (remaining > 0) {
          requestId = requestAnimationFrame(handleFrame);
        }
        if(remaining === 0) {
            btn.style.cursor = "pointer";
            btn.classList.remove("hidden");
            action();
        }
      }
    }
  
    function update() {
      if (document.visibilityState === 'visible') {
        start = performance.now() - (elapsed * 1000); // Cập nhật thời điểm bắt đầu dựa trên thời gian đã trôi qua trước đó
        requestId = requestAnimationFrame(handleFrame);
      } else {
        cancelAnimationFrame(requestId); // Hủy yêu cầu requestAnimationFrame nếu trạng thái hiển thị là 'hidden'
      }
    }
  
    update();
  
    // Lắng nghe sự kiện visibilitychange
    document.addEventListener('visibilitychange', update);
  }
  
//   countdown(30); // Bắt đầu đếm ngược từ 30 giây
  
  countdown(10); // Bắt đầu đếm ngược từ 30 giây


btn.addEventListener("click", function(e) {
  window.location = "https://chinh.io.vn";
});
  