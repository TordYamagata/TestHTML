const formulario = document.getElementById("formulario");

const status = document.getElementById("status");

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nome = document.getElementById("nome").value.trim();

const email = document.getElementById("email").value.trim();

const mensagem = document.getElementById("mensagem").value.trim();

if(nome==="" || email==="" || mensagem===""){

status.style.color="#C0392B";

status.textContent="Preencha todos os campos obrigatórios.";

return;

}

status.style.color="#2E8B57";

status.textContent="Mensagem enviada com sucesso!";

formulario.reset();

});

const blobs = document.querySelectorAll(".blob");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*40;

const y=(e.clientY/window.innerHeight-.5)*40;

blobs[0].style.transform=`translate(${x}px,${y}px)`;

blobs[1].style.transform=`translate(${-x}px,${-y}px)`;

});

const campos=document.querySelectorAll("input, textarea");

campos.forEach(campo=>{

campo.addEventListener("focus",()=>{

campo.style.transform="scale(1.03)";

});

campo.addEventListener("blur",()=>{

campo.style.transform="scale(1)";

});

});