
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


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

var acc = document.querySelectorAll(".content-meilleur-vente, .content-tendances-homme, .content-tendances-femme, .content-tendances");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 
