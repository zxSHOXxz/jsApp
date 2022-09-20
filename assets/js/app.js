// navbar js

let nav = document.querySelector("nav");
let bar = document.querySelector(".bar");
let menuIcon = document.querySelector(".menu-icon");
let logo = document.querySelector(".logo");
let menu = document.querySelector(".menu");
document.addEventListener("click", (e) => {
  if (e.target == bar) {
    menu.classList.toggle("showmenu");
  } else if (e.target != bar) {
    menu.classList.remove("showmenu");
  }
});

// js1

let inptPassword = document.querySelector(".inp-pass");
let showPassword = document.querySelector(".show__hide");

console.log(inptPassword);
showPassword.onclick = (_) => {
  if (inptPassword.getAttribute("type") == "password") {
    inptPassword.setAttribute("type", "text");
    showPassword.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else if (inptPassword.getAttribute("type") == "text") {
    inptPassword.setAttribute("type", "password");
    showPassword.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
};

// js2
let btns = document.querySelectorAll(".bbt");
let ph = document.querySelectorAll(".ph");
let p1 = document.querySelectorAll(".p1");
let p2 = document.querySelectorAll(".p2");
let p3 = document.querySelectorAll(".p3");

function act(p) {
  p[0].onclick = (_) => {
    btns.forEach(function (element) {
      element.classList.remove("active");
    });
    ph.forEach(function (element) {
      element.classList.remove("active");
    });
    for (let index = 0; index < p.length; index++) {
      p[index].classList.add("active");
    }
  };
}
act(p1);
act(p2);
act(p3);

// js3
let divs = document.querySelectorAll(".js3 div");
let js3P = document.querySelectorAll(".js3 p");
let js3_one = document.querySelectorAll(".js3 .js3_one");
let js3_two = document.querySelectorAll(".js3 .js3_two");
let js3_three = document.querySelectorAll(".js3 .js3_three");

function dd(p) {
  p[0].onclick = (_) => {
    divs.forEach(function (element) {
      element.classList.remove("pactive");
    });
    js3P.forEach(function (element) {
      element.classList.remove("pactive");
    });
    for (let index = 0; index < p.length; index++) {
      p[index].classList.add("pactive");
    }
  };
}
dd(js3_one);
dd(js3_two);
dd(js3_three);

let labels = document.querySelectorAll(".js4 .labels .label");
let arrayLabels = Array.from(labels);
let images = document.querySelectorAll(".js4 .box-img");
let arrayImages = Array.from(images);
arrayLabels.forEach((element) => {
  element.addEventListener("click", function (e) {
    arrayLabels.forEach((element) => {
      element.classList.remove("active_tab");
    });
    e.currentTarget.classList.add("active_tab");
    arrayImages.forEach((element) => {
      element.style.display = "none";
    });
    document
      .querySelectorAll(e.currentTarget.dataset.cont)
      .forEach((element) => {
        element.style.display = "block";
      });
  });
});

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days .time").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".hours .time").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".min .time").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".second .time").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// js6

let sliderImg = Array.from(document.querySelectorAll(".container-slider img"));
let sliderCont = sliderImg.length;
let currentSlide = 1;
let sliderNumberElement = document.querySelector(".slide-number");
let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");
let pagintionElement = document.createElement("ul");
pagintionElement.setAttribute("id", "pagintion-ul");
let indicators = document.querySelector("#indicators");
for (let index = 1; index <= sliderCont; index++) {
  let pagintionElementLi = document.createElement("li");
  pagintionElementLi.setAttribute("data-index", index);
  pagintionElement.appendChild(pagintionElementLi);
}
indicators.appendChild(pagintionElement);
let pagintionUl = document.querySelector("#pagintion-ul");
nextButton.onclick = nextFun;
prevButton.onclick = prevFun;
function nextFun() {
  if (nextButton.classList.contains("disable")) {
    currentSlide = 1;

    theChecker();
  } else {
    currentSlide++;

    theChecker();
  }
}
function prevFun() {
  if (prevButton.classList.contains("disable")) {
    currentSlide = sliderCont;

    theChecker();
  } else {
    currentSlide--;

    theChecker();
  }
}
let bullets = Array.from(document.querySelectorAll("#pagintion-ul li"));
bullets.forEach((element) => {
  element.onclick = (_) => {
    currentSlide = element.dataset.index;

    theChecker();
  };
});
function theChecker() {
  sliderNumberElement.textContent = currentSlide + "/" + sliderCont;
  removeAllActive();
  sliderImg[currentSlide - 1].classList.add("active");
  pagintionUl.children[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    prevButton.classList.add("disable");
  } else {
    prevButton.classList.remove("disable");
  }

  if (currentSlide == sliderCont) {
    nextButton.classList.add("disable");
  } else {
    nextButton.classList.remove("disable");
  }
}
function removeAllActive() {
  sliderImg.forEach((element) => {
    element.classList.remove("active");
  });
  bullets.forEach((element) => {
    element.classList.remove("active");
  });
}
theChecker();
// js7
function leter(Query) {
  return document.querySelectorAll(`${Query}`);
}
let js7Tags = leter(".tags-js7 h3");
let js7Text = leter(".text-js7 div");
js7Tags.forEach((element) => {
  element.addEventListener("click", (e) => {
    js7Tags.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    js7Text.forEach((x) => {
      x.classList.remove("active");
    });
    document.querySelector(`${e.target.dataset.js7}`).classList.add("active");
  });
});
// js8
let ipValJs8 = document.querySelector(".js8-textInput");
let btnJs8 = document.querySelector(".text-js8 button");
let liJs8 = document.querySelector(".li-js8 ul");
let keyLcl = localStorage.length;
let btnJs81 = document.querySelector(".li-js8 button");
let spanLi = document.querySelectorAll(".li-js8 ul li span");
let toDos = JSON.parse(localStorage.getItem("todos")) || [];

let counterToDo = 0;
removeAll();
function showLi() {
  toDos.forEach((element) => {
    liJs8.innerHTML += `
        <li>${element.value}<span onclick="removeLi(event)" data-span ='${element.id}'>Remove</span></li>
        `;
  });
}
showLi();
btnJs8.addEventListener("click", () => {
  add();
  keyLcl++;
});

function removeAll() {
  if (localStorage.length == 0) {
    btnJs81.style.display = "none";
  } else {
    btnJs81.style.display = "inline-block";
    btnJs81.onclick = (_) => {
      liJs8.innerHTML = "";
      localStorage.clear();
      btnJs81.style.display = "none";
      toDos = [];
    };
  }
}
function add() {
  let newToDo = {
    value: ipValJs8.value,
    id: toDos.length + 1,
  };
  toDos.push(newToDo);
  liJs8.innerHTML += `
    <li>${ipValJs8.value}<span onclick="removeLi(event)">Remove</span></li>
    `;
  localStorage.setItem("todos", JSON.stringify(toDos));
  ipValJs8.value = "";
  ipValJs8.focus();
  btnJs81.style.display = "inline-block";
}



function removeLi(e) {
  e.target.parentElement.remove();
  let todoIdR = e.target.getAttribute("data-span")
  toDos = toDos.filter( ele => ele.id != todoIdR)

  let index = toDos.indexOf(todoIdR)
  toDos.splice(1 , index)

  if (!toDos.length) {
    btnJs81.style.display = "none";
  }
  localStorage.setItem("todos", JSON.stringify(toDos));
}






