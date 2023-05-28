// CURSOR
console.clear();

const TAIL_LENGTH = 20;

const cursor = document.getElementById("cursor");

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement("div");
    div.classList.add("cursor-circle");
    cursor.append(div);
  }
  cursorCircles = Array.from(document.querySelectorAll(".cursor-circle"));
}

function updateCursor() {
  cursorHistory.shift();
  cursorHistory.push({ x: mouseX, y: mouseY });

  for (let i = 0; i < TAIL_LENGTH; i++) {
    let current = cursorHistory[i];
    let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;

    current.x += xDiff * 0.35;
    current.y += yDiff * 0.35;
    cursorCircles[i].style.transform = `translate(${current.x}px, ${
      current.y
    }px) scale(${i / TAIL_LENGTH})`;
  }
  requestAnimationFrame(updateCursor);
}

document.addEventListener("mousemove", onMouseMove, false);

initCursor();
updateCursor();

// fixed navbar

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle('stikcy', window.scrollY % 0);
});

// FORM VALIDATION
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const namePattern = /^[a-zA-Z]{3,}$/;
const emailPattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const messagePattern = /^[a-zA-Z]{3,}$/;

function validateForm(event) {
  event.preventDefault();
  let isValid = true;
  if (isValid) {
    console.log("Message sent");
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(messageInput.value);
    form.reset();
    alert("recieved your message. will get back to you soon");
  } else {
    console.log("message not sent");
  }
}

form.addEventListener("submit", validateForm);

// form to email
function sendMail() {
  var parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("mail").value,
    message: document.getElementById("message").valye,
  };
  const serviceId = "service_lrorpwf";
  const templateId = "template_hg2gg6d";

  emailjs
    .send(serviceId, templateId, parms)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("message sent");
    })
    .catch((err) => console.log(err));
}

// to-top 
const toTop = document.querySelector('.to-top'); 

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 2000) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active'); 
  }
});


// connect with me 
const connectImg = document.querySelector('.connect'); 

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 50) {
    connectImg.classList.add('connect-pos');
  } else {
    connectImg.classList.remove('connect-pos'); 
  }
})


// connect bg
const connectBg = document.querySelector('.connect-bg'); 

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 50) {
    connectBg.classList.add('connect-bg-pos');
  } else {
    connectBg.classList.remove('connect-bg-pos'); 
  }
})