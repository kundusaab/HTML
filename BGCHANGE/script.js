let btnstart = document.querySelector("#start");
let btnstop = document.querySelector("#stop");
 
let intervalId;
btnstart.addEventListener("click" , () =>{
 intervalId = setInterval (() => {
    document.body.style.background=generateRandomColour();
 },1000)
})
btnstop.addEventListener("click" , () =>{
    
    if (intervalId) clearInterval(intervalId);
})
function generateRandomColour() {
    let randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColour;
}