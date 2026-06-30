const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{
    
    if(entry.isIntersecting){
    
    document.querySelector(".html").style.width="95%";
    document.querySelector(".css").style.width="92%";
    document.querySelector(".js").style.width="86%";
    document.querySelector(".criatividade").style.width="100%";
    
    }
    
    });
    
    });
    
    observer.observe(document.querySelector(".habilidades"));
    
    
    // Movimento psicodélico do fundo
    
    const blob = document.querySelector(".backgroundBlob");
    
    document.addEventListener("mousemove",(e)=>{
    
    const x=(e.clientX/window.innerWidth-.5)*80;
    
    const y=(e.clientY/window.innerHeight-.5)*80;
    
    blob.style.transform=`translate(${x}px,${y}px)`;
    
    });
    
    
    // Pequena variação de cor
    
    let hue=0;
    
    setInterval(()=>{
    
    hue+=0.3;
    
    document.body.style.filter=`hue-rotate(${Math.sin(hue)*5}deg)`;
    
    },40);