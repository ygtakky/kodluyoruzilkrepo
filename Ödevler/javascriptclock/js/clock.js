const myClockContainer = document.querySelector("#myClock");
const nameContainer = document.querySelector("#myName");
let myName = prompt("Your name?");
while (myName == "") {
  alert("İsim boş olamanz");
  myName = prompt("Your name?");
}
nameContainer.innerHTML = myName;

let current;
let day = "";

function showTime() {
    current = new Date();
    switch (current.getDay()) {
      case 1:
        day = "Pazartesi";
        break;
      case 2:
        day = "Salı";
        break;
      case 3:
        day = "Çarşamba";
        break;
      case 4:
        day = "Perşembe";
        break;
      case 5:
        day = "Cuma";
        break;
      case 6:
        day = "Cumartesi";
        break;
      case 7:
        day = "Pazar";
        break;
    }
    myClockContainer.innerHTML = `${current.toLocaleTimeString('en-GB')} ${day}`;
    console.log(current);
}

showTime();
setInterval(showTime, 1000);