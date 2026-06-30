const imagens = document.querySelectorAll(".galeria img");

const lightbox = document.querySelector(".lightbox");

const imagemGrande = document.getElementById("imagemGrande");

const fechar = document.querySelector(".fechar");

imagens.forEach(imagem=>{

imagem.addEventListener("click",()=>{

imagemGrande.src = imagem.src;

lightbox.style.display="flex";

});

});

fechar.onclick=()=>{

lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}

// Pequeno efeito de flutuação

imagens.forEach((img,index)=>{

setInterval(()=>{

img.style.transform=`translateY(${Math.sin(Date.now()/600+index)*5}px)`;

},20);

});

// Movimento dos blobs

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*40;

const y=(e.clientY/window.innerHeight-.5)*40;

document.querySelector(".blob1").style.transform=
`translate(${x}px,${y}px)`;

document.querySelector(".blob2").style.transform=
`translate(${-x}px,${-y}px)`;

});