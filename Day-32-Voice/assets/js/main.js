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

const standardString= (content, mark) => {
    let res = "";
    const arr = content.split(" ");
    if(arr.length < 2) {
        return content;
    }
    arr.forEach(value => {
        res+=value+ mark;
    });
    return res.slice(0, res.length-mark.length);
}

const handleVoice = (text) => {
    switch (text) {
        case 'youtube': 
            window.open("https://www.youtube.com/");
            break;
    }

    if(text.includes("video")) {
        const content = text.slice(text.indexOf("video")+5).trim();
        if(content === "") {
            window.open("https://www.youtube.com/");
        } else {
            const res = standardString(content, '+');
            window.open(`https://www.youtube.com/results?search_query=${res}`);
        }
    }
    else if(text.includes("tới") || text.includes("đường")) {
        if(text.indexOf("tới") >= 0) {
            const content = text.slice(text.indexOf("tới")+3).trim();
            const res = standardString(content, "%20");
            window.open(`https://www.google.com/maps/search/${res}`);
        } else if(text.indexOf("đường") >= 0) {
            const content = text.slice(text.indexOf("tới")+3).trim();
            const res = standardString(content, "%20");
            window.open(`https://www.google.com/maps/search/${res}`);
        }
    }

    // if(text === 'google') {
    //     window.open("https://google.com.vn");
    // } else if(text === 'facebook') {
    //     window.open("https://facebook.com");

    // } else if(text === 'google drive') {
    //     window.open("https://drive.google.com/drive/my-drive");
        
    // } else if(text === 'google maps') {
    //     window.open("https://www.google.com/maps");
        

    // } else if(text === 'youtube') {
    //     window.open("https://www.youtube.com/");
    // }
    statusAction.textContent = `Đã thực hiện xong`;

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
    setTimeout(()=> {
        handleVoice(text);
    }, 1000)
});




