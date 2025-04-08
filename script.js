let gridOfElements = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.className += "grid-item";
  gridOfElements.appendChild(div);
}
