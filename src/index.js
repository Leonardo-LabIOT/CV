const cc = document.getElementById("cc")

const contateMe = (x) => {
    const idCon = document.getElementById("idCom");
    // window.scroll({
    //     top:70,
    //     left:0,
    //     behavior:"smooth"
    // });
    window.scroll(cc.positi);
    //aberto
    if(idCon.classList.contains("aberto")&&x){
        idCon.classList.remove("aberto");
    }
    // fechado
    else{
        idCon.classList.add("aberto");
        // window.scrollTo(0,0);
    }
}

cc.addEventListener("click", ()=>{
    contateMe(true);
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

const contate = document.querySelector(".contat");

contate.addEventListener("click", ()=>{
    contateMe(false);
});