const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
if(burger){
  burger.addEventListener("click", ()=> nav.classList.toggle("active"));
}

const timer = document.getElementById("timer");
if(timer){
  const targetDate = new Date("Sep 10, 2025 00:00:00").getTime();
  setInterval(()=>{
    const now = new Date().getTime();
    const diff = targetDate - now;
    if(diff < 0){ timer.innerHTML = "Disponible maintenant !"; return; }
    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    const seconds = Math.floor((diff%(1000*60))/1000);
    timer.innerHTML = days+"j "+hours+"h "+minutes+"m "+seconds+"s";
  },1000);
}

