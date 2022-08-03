const cc = document.getElementById("cc");

const contateMe = (x) => {
    const idCon = document.getElementById("idCom");
    
    window.scroll({
        top:70,
        behavior:"smooth"
    });
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

const nxtBtn = document.querySelector(".nxtBtn");
const prevBtn = document.querySelector(".prevBtn");

const expAct = Array.from(document.querySelectorAll(".xpi"));
console.log(expAct);

nxtBtn.addEventListener('click', ()=>{
    for(let i = 0 ; i<expAct.length ; i++){
        if(!expAct[i].classList.contains("ina")){
            expAct[i].classList.add("ina");
            if(i==(expAct.length)-1){
                i=-1;
            }
            expAct[i+1].classList.remove("ina");
            break;
        }
    }
});
prevBtn.addEventListener('click', ()=>{
    for(let i = 0 ; i<expAct.length ; i++){
        if(!expAct[i].classList.contains("ina")){
            expAct[i].classList.add("ina");
            if(i==0){
                i=expAct.length;
            }
            expAct[i-1].classList.remove("ina");
            break;
        }
    }
});