import { loadTable, hideLoadingImg, showLoadingImg } from "./functions";

const button = document.querySelector(".load-button");

button.addEventListener("click", async (event) => {
  showLoadingImg();
  const response = await fetch(
    `https://classes.codingbootcamp.cz/assets/classes/api/departures-slow.php`
  );
  const data = await response.json().then(hideLoadingImg());

  const tbody = document.querySelector("tbody"); // because we don't want to load data to full table
  tbody.innerHTML = "";

  loadTable(data);
});
