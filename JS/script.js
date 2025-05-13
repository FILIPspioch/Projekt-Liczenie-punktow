const player_one_name = document.getElementsByName("imie_pl1")[0];
const player_two_name = document.getElementsByName("imie_pl2")[0];

const player_one_text = document.querySelector("#player_one_name");
const player_two_text = document.querySelector("#player_two_name");

const player_one_button = document.querySelector(".player_one");
const player_two_button = document.querySelector(".player_two");
const done_button = document.querySelector("#done");
const reset_button = document.querySelector("#reset_score");

let p1_counter_text = document.querySelector("#p1_counter");
let p2_counter_text = document.querySelector("#p2_counter");

let p2_counter = localStorage.getItem("p2_points");
let p1_counter = localStorage.getItem("p1_points");

done_button.addEventListener("click", () => {
  player_one_text.textContent = player_one_name.value;
  player_two_text.textContent = player_two_name.value;
});

player_one_button.onclick = () => {
  p1_counter++;
  localStorage.setItem("p1_points", p1_counter);
  p1_counter_text.textContent = p1_counter;
};

player_two_button.onclick = () => {
  p2_counter++;
  localStorage.setItem("p2_points", p2_counter);
  p2_counter_text.textContent = p2_counter;
};

document.addEventListener("DOMContentLoaded", () => {
  p1_counter_text.textContent = p1_counter;
  p2_counter_text.textContent = p2_counter;
});

reset_button.addEventListener("click", () => {
  localStorage.setItem("p1_points", 0);
  localStorage.setItem("p2_points", 0);

  p1_counter = localStorage.getItem("p1_points");
  p2_counter = localStorage.getItem("p2_points");
  render();
});

function render() {
  p1_counter_text.textContent = p1_counter;
  p2_counter_text.textContent = p2_counter;
}
