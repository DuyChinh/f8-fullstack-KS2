const mic = document.querySelector(".btn");
const speechWrapper = document.querySelector(".speech-wrapper");
const statusVoice = speechWrapper.querySelector(".status");
const statusAction = speechWrapper.querySelector(".status-action");
// console.log(statusVoice);
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'vi-VI';
//return immediately data
recognition.continuous = false;

const handleVoice = (text) => {
    console.log(text);
}

mic.addEventListener("click", (e) => {
    e.preventDefault();
    statusVoice.textContent = "Hãy nói điều bạn muốn";
    statusVoice.style.color = "red";
    statusAction.style.display = "none";
    recognition.start();
});

recognition.addEventListener("speechend", () => {
    recognition.stop();
    statusVoice.textContent = "Đã nói xong. Hy vọng kết quả như ý bạn muốn";
    statusVoice.style.color = "green";
});

recognition.addEventListener("error", (err) => {
    console.error(err);
});


recognition.addEventListener("result", (e) => {
    // console.log("result", e);
    const res = e.results[0][0].transcript;
    const text = res.toLowerCase();
    // console.log(text);
    statusAction.textContent = `Đang thực hiện: ${text}`;
    statusAction.style.display = "block";
    handleVoice(text);
});




