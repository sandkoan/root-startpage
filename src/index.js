/* Definitions */

const { compileClientWithDependenciesTracked } = require("pug");

// date
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/* Functions */
function getDate() {
  let d = new Date;
  today.innerHTML = `${days[d.getDay()]} ${d.getDate()}, ${months[d.getMonth()]} ${d.getFullYear()}`
  setTimeout(() => { getDate(); }, 1000);
}

function getClock() {
  let d = new Date;
  let hour = d.getHours();
  let minutes = d.getMinutes();

  hour < 10 ? hour = `0${hour}` : hour;
  minutes < 10 ? minutes = `0${minutes}` : minutes;

  clock.innerHTML = `${hour}:${minutes}`

  setTimeout(() => { getClock(); }, 1000);
}

let wrappers = document.getElementsByClassName("that_plastic_wrap_some_people_use_in_cards_because_they_have_sweaty_hands");
for (let wrap in wrappers) {
  wrappers[wrap].onmousemove = function(e) {
    let b = this.getBoundingClientRect();
    let X = (e.clientX-b.x)*50/this.offsetWidth-25;
    let Y = ((e.clientY-b.y)*50/this.offsetHeight-25)*-1;
    let style = `rotateX(${Y}deg) rotateY(${X}deg)`;
    this.children[0].style.transform = style;
  }
  wrappers[wrap].onmouseleave = function() {
    this.children[0].style.transform = "rotateX(0deg) rotateY(0deg)";
  }
}

/* MAIN */

getClock();
getDate();