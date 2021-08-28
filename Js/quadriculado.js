const bolas = [];
const tabuleiro = [];

for (let y=0; y<51; y++) {
  tabuleiro[y] = [];
  for (let x=0; x<51; x++) {
    const square = document.createElement("div");
    square.classList.add("quadradinho");
    campo.appendChild(square);
    square.x = x;
    square.y = y;
    square.onclick = squareClick;
    tabuleiro[y][x] = square;
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

function tic() {
  bolas.forEach(bola => {
    bola.x += 1;
    if (bola.x > 50) bola.x = 50;
    tabuleiro[bola.y][bola.x].appendChild(bola);
    console.log(bola.y, bola.x);
  })
}

setInterval(tic,100);

