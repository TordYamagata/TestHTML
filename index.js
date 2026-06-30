const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector("nav");

menuButton.onclick = () =>{

menu.classList.toggle("show");

}

// Destacar o botão atual

const links = document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

// Pequena animação psicodélica

setInterval(()=>{

document.querySelector(".menu").style.filter=
`hue-rotate(${Math.random()*10-5}deg)`;

},1500);

let hue = 0;

setInterval(()=>{

hue++;

document.body.style.filter=`hue-rotate(${hue}deg)`;

},120);