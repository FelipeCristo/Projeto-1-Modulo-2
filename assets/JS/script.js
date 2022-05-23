const p = document.querySelector("p");

const img = document.querySelector("img");

const botao = document.querySelector("button");

const periodoDia = [
  "./assets/imagens/1a.jpg",
  "./assets/imagens/2a.jpg",
  "./assets/imagens/3a.jpg",
  "./assets/imagens/4a.jpg"
];

function handleChangeImg() {
  if (img.attributes.src.nodeValue == periodoDia[0]) {
    p.innerHTML = "Meio Dia";
    botao.innerHTML = "Passar Tempo";
    img.setAttribute("src", `${periodoDia[1]}`);
  } else if (img.attributes.src.nodeValue == periodoDia[1]) {
    p.innerHTML = "Noite";
    botao.innerHTML = "Passar Tempo";
    img.setAttribute("src", `${periodoDia[2]}`);
  }else if (img.attributes.src.nodeValue == periodoDia[2]) {
    p.innerHTML = "Madrugada";
    botao.innerHTML = "Dia Seguinte";
    img.setAttribute("src", `${periodoDia[3]}`);
  } else if (img.attributes.src.nodeValue == periodoDia[3]) {
    p.innerHTML = "De Manhã Cedo";
    botao.innerHTML = "Passar Tempo";
    img.setAttribute("src", `${periodoDia[0]}`);
  }
}
