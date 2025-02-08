import { quizData } from "./data.js";

const lists = document.querySelector(".list");
console.log(lists);
quizData.forEach((data) => {
  const list = document.createElement("li");
  list.textContent = data.question;
  lists.appendChild(list);
});

console.log(quizData);
