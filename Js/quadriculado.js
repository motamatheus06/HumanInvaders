const bolas = [];

for (let y=0; y<51; y++) {
  for (let x=0; x<51; x++) {
    const square = document.createElement("div");
    square.classList.add("quadradinho");
    campo.appendChild(square);
    square.x = x;
    square.y = y;
    square.onclick = squareClick;
  }

function squareClick(ev) {
  console.log(this.x, this.y);
  const bola = document.createElement("b");
  this.appendChild(bola);
  bola.innerText = "👽";
  bola.x = this.x;
  bola.y = this.y;
  bolas.push(bola);
}
}

