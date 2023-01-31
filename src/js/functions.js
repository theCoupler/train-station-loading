const loadingImg = document.querySelector(
  ".loadingio-spinner-bean-eater-ic6kpdikmuh"
);
const board = document.querySelector(".board");

const loadTable = (departures) => {
  departures.forEach((departure) => {
    let row = document.createElement("tr");

    for (const key in departure) {
      console.log(departure);
      let data = document.createElement("td");
      data.className = `board__${key}`;
      if (key == "time") {
        data.innerHTML = `${departure.time["hrs"]}:${departure.time["mins"]}`;
        row.appendChild(data);
      } else {
        data.innerHTML = `${departure[key]}`;
        row.appendChild(data);
      }
    }

    const tbody = document.querySelector("tbody");
    tbody.appendChild(row);
  });
};

const hideLoadingImg = () => {
  loadingImg.style.display = "none";
  board.style.filter = "none";
};

const showLoadingImg = () => {
  loadingImg.style.display = "inline-block";
  board.style.filter = "blur(2px)";
};

export { loadTable, hideLoadingImg, showLoadingImg };
