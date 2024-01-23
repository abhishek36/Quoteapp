let blockquote = document.querySelector("blockquote");
let span = document.querySelector("span");
let button = document.querySelector("button");
let container = document.querySelector(".container");
let body = document.querySelector("body");

const genquote = async () => {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  // console.log(data);
  blockquote.innerText = data.content;
  span.innerText = data.author;
};

button.addEventListener("click", genquote);
