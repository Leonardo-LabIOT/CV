document.getElementById("cc").addEventListener("click", () => {
    const idCon = document.getElementById("idCom");
    //aberto
    if(idCon.classList.contains("aberto")){
        idCon.classList.remove("aberto");
    }
    // fechado
    else{
        idCon.classList.add("aberto");
    }
});

let abreFecha = document.querySelectorAll(".ccc");

abreFecha.forEach(a => {
    a.addEventListener("click", () => {
        console.log("Olá Mundo!!!");
    });
});

const lin = document.querySelectorAll(".dadosCon");

lin.forEach(e=>{
    e.addEventListener("click", ()=>{
        window.open(e.firstElementChild.href);
    })
})