
function reveal(event){
  event.target.previousElementSibling.style.clip = "rect(0px, "+(event.clientX-event.target.offsetLeft)+"px, 450px, 0px)";  
}