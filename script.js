let gridOfElements = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.classList.add("grid-item");
  div.style.width = "6.25%";
  div.style.height = "6.25%";
  gridOfElements.appendChild(div);
}

applyHoverEffectToGrid();

let overGritItem = document.querySelectorAll(".grid-item");

applyHoverEffectToGrid();

let resizeButton = document.querySelector("#resize-button");

resizeButton.addEventListener("click", () => {
  let changeRequest = prompt("Введите размер сетки");

  if (changeRequest !== null) {
    let number = parseFloat(changeRequest);

    if (!isNaN(number) && number > 0 && number <= 100) {
      gridOfElements.innerHTML = "";

      for (let i = 0; i < number * number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = `${100 / number}%`;
        div.style.height = `${100 / number}%`;

        gridOfElements.appendChild(div);
      }
      applyHoverEffectToGrid();
    } else {
      alert("Некорректное значние. Пожалуйста, введите число от 1 до 100");
    }
  } else {
    alert("Ввод отменен");
  }

  applyHoverEffectToGrid();
});

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function applyHoverEffectToGrid() {
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = randomColor();
      let currentOpacity = parseFloat(item.style.opacity) || 1;
      item.style.opacity = Math.max(0, currentOpacity - 0.1);
    });
  });
}
