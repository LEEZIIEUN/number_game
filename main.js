//랜덤번호 지정
// 유저가 번호 입력 그리고 go 라는 버튼을 누름
// 만약에 랜덤 번호 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 Down!!
// 랜덤번호 > 유저번호 Up!!
// Reset 버튼 누르면 게임 리셋
// 5번 기회 다쓰면 게입 끝 (더이상 추측 불가, 버튼이 disavle)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회 안깎음
// 유저가 이미 입력한 숫잘르 또 입력하면 알려주고, 기회 안깎름

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameover = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus",function(){
  userInput.value = ""
});

function pickRandomNum(){
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답 : ", computerNum)
}

function play(){
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100){
    resultArea.textContent = "1부터 100 사이의 숫자를 입력해주세요!"
    return;
  }

  if (history.includes(userValue)){
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요!"
    return;
  }

  chances--;
  chanceArea.textContent = `남은 횟수 : ${chances}회`;

  if (userValue < computerNum){
    resultArea.textContent = "UP!!!"
  } else if (userValue > computerNum){
    resultArea.textContent = "DOWN!!!"
  } else {
    resultArea.textContent = "😀정답입니다😀"
    playButton.disabled = true;
    return;
  }

  history.push(userValue);
  console.log(history);

  if(chances<1){
    gameover = true;
  }
  if (gameover == true){
    playButton.disabled = true;
    resultArea.textContent = "🔥GAME OVER!!!🔥"
  }
  
}

function reset(){
  userInput.value="";
  resultArea.textContent="";
  chances = 5;
  chanceArea.textContent = `남은 기회 : ${chances}회`;
  playButton.disabled = false;
  gameover = false;
  history = [];
  pickRandomNum();
}



pickRandomNum()