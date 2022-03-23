// var, const, let;

{/* <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button> */}
function myFun(){
    alert("Ola!");
}

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

// document.getElementById("cc").addEventListener("click", myFun);