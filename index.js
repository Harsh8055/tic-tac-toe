
const result = (player) => {
  let box1class = Array.from(document.getElementById("box1").classList);
  let box2class = Array.from(document.getElementById("box2").classList);
  let box3class = Array.from(document.getElementById("box3").classList);
  let box4class = Array.from(document.getElementById("box4").classList);
  let box5class = Array.from(document.getElementById("box5").classList);
  let box6class = Array.from(document.getElementById("box6").classList);
  let box7class = Array.from(document.getElementById("box7").classList);
  let box8class = Array.from(document.getElementById("box8").classList);
  let box9class = Array.from(document.getElementById("box9").classList);

  // row
  let box1_O_r1 = box1class.includes(`${player}`);
  let box2_O_r1 = box2class.includes(`${player}`);
  let box3_O_r1 = box3class.includes(`${player}`);
  let box4_O_r2 = box4class.includes(`${player}`);
  let box5_O_r2 = box5class.includes(`${player}`);
  let box6_O_r2 = box6class.includes(`${player}`);
  let box7_O_r3 = box7class.includes(`${player}`);
  let box8_O_r3 = box8class.includes(`${player}`);
  let box9_O_r3 = box9class.includes(`${player}`);
  // row
  let box1_O_c1 = box1class.includes(`${player}`);
  let box4_O_c1 = box4class.includes(`${player}`);
  let box7_O_c1 = box7class.includes(`${player}`);
  let box2_O_c2 = box2class.includes(`${player}`);
  let box5_O_c2 = box5class.includes(`${player}`);
  let box8_O_c2 = box8class.includes(`${player}`);
  let box3_O_c3 = box3class.includes(`${player}`);
  let box6_O_c3 = box6class.includes(`${player}`);
  let box9_O_c3 = box9class.includes(`${player}`);

  // diagonal

  let box1_O_d1 = box1class.includes(`${player}`);
  let box5_O_d1 = box5class.includes(`${player}`);
  let box9_O_d1 = box9class.includes(`${player}`);
  let box3_O_d2 = box3class.includes(`${player}`);
  let box5_O_d2 = box5class.includes(`${player}`);
  let box7_O_d2 = box7class.includes(`${player}`);

  if (box1_O_r1 && box2_O_r1 && box3_O_r1) {
    console.log(`${player} Won, Reloading in 3 seconds`);
    document.getElementById(
      "result"
    ).innerText = `${player} Won, Reloading in 3 seconds`;

    setTimeout(() => {
      location.reload();
    }, 3000);
  } else if (box4_O_r2 && box5_O_r2 && box6_O_r2) {
    console.log(`${player} Won, Reloading in 3 seconds`);
    document.getElementById(
      "result"
    ).innerText = `${player} Won, Reloading in 3 seconds`;
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else if (box7_O_r3 && box8_O_r3 && box9_O_r3) {
    console.log(`${player} wins`);
    document.getElementById(
      "result"
    ).innerText = `${player} Won, Reloading in 3 seconds`;
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else if (box1_O_c1 && box4_O_c1 && box7_O_c1) {
    console.log(`${player} Won, Reloading in 3 seconds`);
    document.getElementById(
      "result"
    ).innerText = `${player} Won, Reloading in 3 seconds`;
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else if (box2_O_c2 && box5_O_c2 && box8_O_c2) {
    console.log(`${player} Won, Reloading in 3 seconds`);
    document.getElementById(
      "result"
    ).innerText = `${player} Won, Reloading in 3 seconds`;
  
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else if (box3_O_c3 && box6_O_c3 && box9_O_c3) {
    console.log(`${player} wins`);
    document.getElementById(
      "result"
    ).innerText = `${player} Won, Reloading in 3 seconds`;
    
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else if (box1_O_d1 && box5_O_d1 && box9_O_d1) {
    console.log(`${player} wins`);
    document.getElementById("result").innerText = `${player} Won, Reloading in 3 seconds`;
   
    setTimeout(() => {
      location.reload();
    }, 3000);
  } else if (box3_O_d2 && box5_O_d2 && box7_O_d2) {
    console.log(`${player} wins`);
    document.getElementById(
      "result"
    ).innerText = `${player} Won, Reloading in 3 seconds`;
    
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  else {
      drawfunc();
  }
};




const drawfunc = () => {
  let _box1 = document.getElementById("box1").getAttribute("data-status");
  let _box2 = document.getElementById("box2").getAttribute("data-status");
  let _box3 = document.getElementById("box3").getAttribute("data-status");
  let _box4 = document.getElementById("box4").getAttribute("data-status");
  let _box5 = document.getElementById("box5").getAttribute("data-status");
  let _box6 = document.getElementById("box6").getAttribute("data-status");
  let _box7 = document.getElementById("box7").getAttribute("data-status");
  let _box8 = document.getElementById("box8").getAttribute("data-status");
  let _box9 = document.getElementById("box9").getAttribute("data-status");

  let resultText = document.getElementById("result");

  if (
    _box1 == "true" &&
    _box2 == "true" &&
    _box3 == "true" &&
    _box4 == "true" &&
    _box5 == "true" &&
    _box6 == "true" &&
    _box7 == "true" &&
    _box8 == "true" &&
    _box9 == "true"
  ) {
    if (
      resultText != "X Won, Reloading in 3 seconds" &&
      resultText != "O Won, Reloading in 3 seconds"
    ) {
      resultText.innerText = "It's a draw";
    
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }
};
const display = (e) => {
  let n = sessionStorage.getItem("n");
  let box = e.currentTarget;
  let status = box.getAttribute("data-status");

  if (status == "true") {
    console.log("value already assigned");
    console.log(box.classList);
  } else if (n % 2 == 0) {
    box.setAttribute("data-status", "true");
    box.classList.add("O");
    box.innerHTML = `<span> O </span>`;
    sessionStorage.setItem("n", 3);
    result("X");
    result("O");
   
   
  } else {
    box.setAttribute("data-status", "true");
    box.innerHTML = `<span> X </span>`;
    box.classList.add("X");
    sessionStorage.setItem("n", 2);
    result("O");
    result("X");
   
    
  }
};
let box1 = document.getElementById("box1");
box1.addEventListener("click", display);
let box2 = document.getElementById("box2");
box2.addEventListener("click", display);
let box3 = document.getElementById("box3");
box3.addEventListener("click", display);
let box4 = document.getElementById("box4");
box4.addEventListener("click", display);
let box5 = document.getElementById("box5");
box5.addEventListener("click", display);
let box6 = document.getElementById("box6");
box6.addEventListener("click", display);
let box7 = document.getElementById("box7");
box7.addEventListener("click", display);
let box8 = document.getElementById("box8");
box8.addEventListener("click", display);
let box9 = document.getElementById("box9");
box9.addEventListener("click", display);
sessionStorage.setItem("n", 1);

