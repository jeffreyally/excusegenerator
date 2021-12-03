/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var Animals = [
    "The thing is, a rabies infested dog ",
    "The thing is, a rabies infested cat ",
    "The thing is, a rabies infested raccoon ",
    "The thing is, a rabies infested fox "
  ];
  var Actions = ["broke ", "chewed up ", "ate ", "took "];
  var Going_Out_Items = [
    "my phone ",
    "my wallet ",
    "my keys ",
    "my drivers license "
  ];
  var When = [
    "like...como ayer mano. Metí la pata. ",
    "like...an hour ago bro.",
    "like...five minutes ago. Crazy right?",
    "like...literally this morning"
  ];

  var str = "";
  str =
    str +
    Animals[Math.ceil(Math.random() * 4 - 1)] +
    Actions[Math.ceil(Math.random() * 4 - 1)] +
    Going_Out_Items[Math.ceil(Math.random() * 4 - 1)] +
    When[Math.ceil(Math.random() * 4 - 1)];
  document.querySelector("#excuse").innerHTML = str;
};
