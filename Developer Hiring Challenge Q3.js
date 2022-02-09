// Add your javascript here
const imageDOM = document.querySelector("#carousel-img");
imageDOM.src = '/assets/images/img-1.jpg';
const previousDOM = document.querySelector("#previous");
const slideDOM = document.querySelector(".slide-input");
const nextDOM = document.querySelector("#next");
const oneDOM = document.querySelector("#one");
const twoDOM = document.querySelector("#two");
const threeDOM = document.querySelector("#three");
const fourDOM = document.querySelector("#four");
const fiveDOM = document.querySelector("#five");

let state = 1;
let boxstate = 0;

oneDOM.addEventListener("click", function() {
  state = 1;
  imageDOM.src = '/assets/images/img-1.jpg';
});

twoDOM.addEventListener("click", function() {
  state = 2;
  imageDOM.src = '/assets/images/img-2.jpg';
});

threeDOM.addEventListener("click", function() {
  state = 3;
  imageDOM.src = '/assets/images/img-3.jpg';
});

fourDOM.addEventListener("click", function() {
  state = 4;
  imageDOM.src = '/assets/images/img-4.jpg';
});

fiveDOM.addEventListener("click", function() {
  state = 5;
  imageDOM.src = '/assets/images/img-5.jpg';
});

slideDOM.onclick = function() {
  if (boxstate === 0) {
    boxstate = 1;
    setInterval(goNext, 3000); 
  } else if(boxstate === 1) {
    boxstate = 0;
  }
}

function goNext() {
  if(boxstate === 1) {
    if (state === 1) {
    imageDOM.src = '/assets/images/img-2.jpg';
    state = 2;
  } else if(state === 2) {
    imageDOM.src = '/assets/images/img-3.jpg';
    state = 3;
  } else if(state === 3) {
    imageDOM.src = '/assets/images/img-4.jpg';
    state = 4;
  } else if(state === 4) {
    imageDOM.src = '/assets/images/img-5.jpg';
    state = 5;
  } else if(state === 5) {
    imageDOM.src = '/assets/images/img-1.jpg';
    state = 1;
  }
  } else if(boxstate === 0) {
     
  }
}

previousDOM.onclick = function() {
  if (state === 1) {
    imageDOM.src = '/assets/images/img-5.jpg';
    state = 5;
  } else if(state === 2) {
    imageDOM.src = '/assets/images/img-1.jpg';
    state = 1;
  } else if(state === 3) {
    imageDOM.src = '/assets/images/img-2.jpg';
    state = 2;
  } else if(state === 4) {
    imageDOM.src = '/assets/images/img-3.jpg';
    state = 3;
  } else if(state === 5) {
    imageDOM.src = '/assets/images/img-4.jpg';
    state = 4;
  }
}

nextDOM.onclick = function() {
  if (state === 1) {
    imageDOM.src = '/assets/images/img-2.jpg';
    state = 2;
  } else if(state === 2) {
    imageDOM.src = '/assets/images/img-3.jpg';
    state = 3;
  } else if(state === 3) {
    imageDOM.src = '/assets/images/img-4.jpg';
    state = 4;
  } else if(state === 4) {
    imageDOM.src = '/assets/images/img-5.jpg';
    state = 5;
  } else if(state === 5) {
    imageDOM.src = '/assets/images/img-1.jpg';
    state = 1;
  }
}