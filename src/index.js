const cc = document.getElementById("cc")

const contateMe = () => {
    const idCon = document.getElementById("idCom");
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
    //aberto
    if(idCon.classList.contains("aberto")){
        idCon.classList.remove("aberto");
    }
    // fechado
    else{
        idCon.classList.add("aberto");
        // window.scrollTo(0,0);
    }
}

cc.addEventListener("click", contateMe);

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

const contate = document.querySelector(".contat");

contate.addEventListener("click", contateMe);