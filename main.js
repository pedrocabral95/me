var aLanguage = ["English","French","Portuguese"];
var aSportText = ["Desde pequeno que o  desporto é um pilar essencial do meu estilo de vida, fazendo parte da minha rotina. Correr e Jogar futebol são, definitivamente, o que mais me motiva a fazer desporto, para alem de me ajudar fisica e psicologicamente."];
var aSobre = ["Sobre","About" ,"Au sujet de Moi"];
var aInicio = ["Início","Home","Accueil"];
var aFamilia = ["Família","Family" ,"Famille"];
var aDesporto = ["Desportos", "Sports" ,"Sport"];
var aJobs = ["Empregos","Jobs" ,"Emploi"];
var aHello = ["Bem Vindo!", "Hello World!", "Salut!"]

function getIstMail() {
  window.location.href = "mailto:pedro.alves.cabral@tecnico.ulisboa.pt";
}
function getGmail() {
  window.location.href = "mailto:pedro25alves@gmail.com";
}
function getLinkedIn() {
  window.open("https://www.linkedin.com/in/pedro-cabral-570a30194/","LinkedIn");
}

function getInstagram() {
  window.open("","Instagram");
}
function getStrava() {
  window.open("https://www.strava.com/athletes/9607376", "Strava")
}
function getGit() {
  window.open("https://github.com/pedrocabral95","GitHub")
}
function doHome(lang){

}
function doAbout(lang){

}
function doFamily(lang){

}
function doJobs(lang){

}
function doSports(lang){
 
    let a = document.getElementById("ini") 
    console.log(a)
    a.textContent +=aSportText[0];

}


function doLang(lang){
    var topnav;
    topnav = document.getElementById("home");
    topnav.textContent = aInicio[lang];
    topnav = document.getElementById("about");
    topnav.textContent = aSobre[lang] ;
    topnav = document.getElementById("family");
    topnav.textContent = aFamilia[lang] ;
    topnav = document.getElementById("jobs");
    topnav.textContent = aJobs[lang] ;
    topnav = document.getElementById("run");
    topnav.textContent = aDesporto[lang];

}
