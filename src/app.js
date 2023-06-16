/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["a", "the", "that"];
  let subject = ["kid", "cat", "brid"];
  let action = ["eat my", "shredded my", "ran over my"];
  let stuff = ["homework", "food", "newspaper"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let stuIndex = Math.floor(Math.random() * stuff.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    stuff[stuIndex] +
    " "
  );
};
