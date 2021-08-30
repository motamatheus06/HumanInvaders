let bolas = [];
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
    console.log("você clicou em",this.x, this.y);
    let obstaculo = document.createElement("c");
    this.appendChild(obstaculo);
    obstaculo = botao.innerText;
    obstaculo.x = this.x;
    obstaculo.y = this.y;
    bolas.push(obstaculo);
  }
}

function tic() {
  bolas.forEach(bola => {
    bola.x += 1;
    if (bola.x > 50) return bola.morre();
    tabuleiro[bola.y][bola.x].appendChild(bola);
  })
}

function randomSpawn() {
  const rand = Math.floor(Math.random()* 51);
  const bola = document.createElement("b");
  bola.y = rand;
  bola.x = 0;
  tabuleiro[bola.y][bola.x].appendChild(bola);
  bola.innerText = "👽";
  bola.morre = () => {
    bolas = bolas.filter(b => b != bola);
    bola.remove();
  }
  bolas.push(bola);
}

function buttomClick(ev){
  let botao = document.getElementsByTagName("a");
  console.log(botao);
}

botao1.onclick = buttomClick;
botao2.onclick = buttomClick;
botao3.onclick = buttomClick;
botao4.onclick = buttomClick;

setInterval(randomSpawn, 2000);
console.log(randomSpawn());
setInterval(tic,100);

