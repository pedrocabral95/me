var aLanguage = ["English","French","Portuguese"];
var aSobre = ["Sobre","About" ,"Au sujet de Moi"];
var aInicio = ["Início","Home","Accueil"];
var aFamilia = ["Família","Family" ,"Famille"];
var aDesporto = ["Deportos", "Sports" ,"Sport"];
var aJobs = ["Empregos","Jobs" ,"Emploi"];
var aHello = ["Bem Vindo!", "Hello World!", "Salut!"]

function getForm() {
      window.location = "https://forms.gle/qV3HW7ZjKoc32Fqm6";
}

function getGit() {
    window.location = "https://github.com/pedrocabral95"
}
var lang = 0;

function changeLanguage() {
    lang++;
    if  (lang == 3){
        lang=0;
    }
}

function doLanguage(){
    var topnav;
    topnav = document.getElementById("Language");
    topnav.textContent = aLanguage[lang] ;
    topnav = document.getElementById("home");
    topnav.textContent =aInicio[lang] ;
    topnav = document.getElementById("about");
    topnav.textContent = aSobre[lang] ;
    topnav = document.getElementById("family");
    topnav.textContent = aFamilia[lang] ;
    topnav = document.getElementById("jobs");
    topnav.textContent = aJobs[lang] ;
    topnav = document.getElementById("run");
    topnav.textContent = aDesporto[lang];
  
   
}



function responsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
   
  }

setInterval(function() {
    responsive();
    doLanguage();
}, 1000);