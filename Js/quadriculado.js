var i = 0;

while (i < 255) {
  i++;
  const div1 = document.querySelector(".campo");
  const squaresdiv = document.createElement("div");
  squaresdiv.classList.add("quadradinhos");
  div1.insertAdjacentElement("beforeend", squaresdiv);
}

