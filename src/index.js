// var, const, let;

{/* <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button> */}
function myFun(){
    alert("Ola!");
}
//byID

document.getElementById("cc").addEventListener("click", () => {

    //aberto
    if(document.getElementById("idCom").classList.contains("aberto")){
        document.getElementById("idCom").classList.remove("aberto");
    }
    // fechado
    else{
        document.getElementById("idCom").classList.add("aberto");
    }
});

//byClass

// document.getElementById("cc").addEventListener("click", myFun);

let abreFecha = document.querySelectorAll(".ccc");

abreFecha.forEach(abreFecha7 => {
    // idCom
    // abreFecha
    abreFecha7.addEventListener("click", () => {
    console.log("Olá Mundo!!!");
});
});