const audio = document.getElementById("audio");

const play = document.getElementById("play");

const barra = document.getElementById("barra");

const titulo = document.getElementById("titulo");

const capa = document.querySelector(".capa");

const musicas = document.querySelectorAll(".musica");

let indice = 0;

musicas.forEach((item,i)=>{

item.onclick=()=>{

carregar(i);

tocar();

}

});

function carregar(i){

indice=i;

audio.src=musicas[i].dataset.src;

titulo.textContent=musicas[i].textContent;

musicas.forEach(m=>m.classList.remove("ativa"));

musicas[i].classList.add("ativa");

}

function tocar(){

audio.play();

play.textContent="⏸";

capa.style.animationPlayState="running";

}

function pausar(){

audio.pause();

play.textContent="▶";

capa.style.animationPlayState="paused";

}

play.onclick=()=>{

if(audio.paused){

tocar();

}else{

pausar();

}

}

audio.addEventListener("timeupdate",()=>{

barra.max=audio.duration;

barra.value=audio.currentTime;

let min=Math.floor(audio.currentTime/60);

let seg=Math.floor(audio.currentTime%60);

document.getElementById("atual").textContent=

`${min}:${seg.toString().padStart(2,"0")}`;

let min2=Math.floor(audio.duration/60)||0;

let seg2=Math.floor(audio.duration%60)||0;

document.getElementById("duracao").textContent=

`${min2}:${seg2.toString().padStart(2,"0")}`;

});

barra.oninput=()=>{

audio.currentTime=barra.value;

}

document.getElementById("proximo").onclick=()=>{

indice++;

if(indice>=musicas.length) indice=0;

carregar(indice);

tocar();

}

document.getElementById("anterior").onclick=()=>{

indice--;

if(indice<0) indice=musicas.length-1;

carregar(indice);

tocar();

}

carregar(0);