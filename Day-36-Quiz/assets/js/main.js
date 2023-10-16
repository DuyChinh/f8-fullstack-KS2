const timeQuiz = document.querySelector(".quiz-wrapper .quiz__time");
const runTimeQuiz = document.querySelector(".quiz__run-time");
const quizActionSentence = document.querySelector(".quiz__action-sentence");
const stopBlock = document.querySelector(".quiz__stop");
const btnPlay = document.querySelector(".quiz__stop .btn-play-again");
const stopScore = document.querySelector(".quiz__stop-score span");
const incorrectAnswer = document.querySelector(".quiz__incorrect span");
const correctAnswer = document.querySelector(".quiz__correct span");
import { client } from "./clients.js";
const totalTime = 10; 
let startTime = 0;
var i = 0;
let scorePlayer = 0, incorrect = 0, correct = 0, check = false;


const getData = async (i) => {
  const { data: questions } = await client.get(`/questions`);
  const n = questions.length;
  if(i === 0) {
    incorrectAnswer.innerText = n;
  }
  if(i >= n) {
    stopBlock.style.display = "block";
  }
  const sen = `${i+1}/${n}`;
  quizActionSentence.innerText = sen;
  render(questions[i], n);
};

const handleTime = () => {
    startTime = 0;
    function animate(time) {
      if (!startTime) {
        startTime = time;
      }
      var elapsedTime = time - startTime;
      var progress = elapsedTime / (totalTime * 1000);
      runTimeQuiz.style.width = progress * 100 + "%";

      if (elapsedTime < totalTime * 1000) {
        requestAnimationFrame(animate);
      } else {
        i++;
        getData(i);
      }
    }
    requestAnimationFrame(animate);
}

getData(0);

const quizWrapper = document.querySelector(".quiz-wrapper");
const container = quizWrapper.querySelector(".quiz-wrapper .container");
const score = quizWrapper.querySelector(".quiz__action-score span");

const render = (data, n) => {
    const html = `
    <div class="quiz__question">
        <div class="quiz__title">${data.question}</div>
        <div class="quiz__list-answer">
            ${data.answer
              .map((value, index) => `<div class="quiz__answer" data-index="${index}">${value.text}</div>`)
              .join("")}
        </div>
    </div>
`;
    container.innerHTML = html;
    handleTime();
    const quizAnswers = quizWrapper.querySelector(".quiz__list-answer");
    const list = quizWrapper.querySelectorAll(".quiz__answer");
    quizAnswers.addEventListener("click", (e) => {
      const dataIndex = e.target.dataset.index;
      if(+dataIndex !== +data.key) {
        e.target.style.background = "red";
        // list[data.key].style.background = "green";
        list.forEach((value, index) => {
            if(index == +data.key) {
                value.style.background =  "green";
            } else if(index !== +dataIndex) {
                value.style.visibility = "hidden";
            }
        });
        const random = Math.floor(Math.random() * (200 - 0) + 1);
        if(scorePlayer - random > 0) {
          scorePlayer-= random;
        }
        score.innerText = `${scorePlayer}`;
        quizAnswers.style.pointerEvents = "none";
        i++;
        setTimeout(() => {
          getData(i);
        }, 1500);
      } else {
        correct++;
        e.target.style.background = "green";
         list.forEach((value, index) => {
           if (index !== +data.key) {
            value.style.visibility = "hidden";
           }
         });
        scorePlayer += Math.floor(Math.random() * (2001 - 1000) + 1000);
        score.innerText = `${scorePlayer}`;
        quizAnswers.style.pointerEvents = "none";
        i++;
        setTimeout(() => {
          getData(i);
        }, 1500);
      }
      handleEnd(scorePlayer, n, correct);
    });
    
}

/*Play again */



const handleEnd = (scorePlayer, n, correct) => {
  stopScore.innerText = scorePlayer;
  incorrectAnswer.innerText = n - correct;
  correctAnswer.innerText = correct;
}


btnPlay.addEventListener("click", () => {
  stopBlock.style.display = "none";
  scorePlayer = 0; incorrect = 0; correct = 0;
  score.innerText = scorePlayer;
  i = 0;
  getData(i);
});








