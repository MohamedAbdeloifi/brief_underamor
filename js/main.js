var flags = document.querySelector('#countries ul');

var countries  = document.getElementById("countries");

countries.addEventListener("mouseover",()=>{
    flags.classList.toggle("active") 
})

countries.addEventListener("mouseout",()=>{
    flags.classList.toggle("active") 
})
var nouveaute = document.getElementById("nouveaute");
var div = document.createElement("div");
div.classList.add("container-nouveaute");
div.innerHTML += `<ul><li>HOMMES NOUVEAUTÉS</li><li>FEMMES NOUVEAUTÉS</li><li>ENFANTS NOUVEAUTÉS</li></ul>`;

nouveaute.addEventListener("mouseover",()=>{
    nouveaute.appendChild(div);
})
div.addEventListener("mouseout",()=>{
    nouveaute.removeChild(div);
})