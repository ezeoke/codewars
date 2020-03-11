const username = document.getElementById("username");
const school = document.getElementById("school");
const state = document.getElementById("state");
const btn = document.getElementById("submit");
const body = document.getElementById("body");

submit = () => {
  let inputedData = {
    user: username.value,
    school: school.value,
    state: state.value
  };

  let arr = [];
  if (localStorage.getItem("data") == null) {
    arr.push(inputedData);
    localStorage.setItem("data", JSON.stringify(arr));
  } else {
    arr = JSON.parse(localStorage.getItem("data"));
    arr.push(inputedData);
    localStorage.setItem("data", JSON.stringify(arr));
  }

  let savedData = JSON.parse(localStorage.getItem("data"));

  username.value = "";
  school.value = "";
  state.value = "";
};

btn.addEventListener("click", submit);

//speech
let respon = new SpeechSynthesisUtterance("chibuike");
speechSynthesis.speak(respon);
