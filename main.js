
var aLanguage = ["English","French","Portuguese"];
var aSportText = ["Desde pequeno que o  desporto é um pilar essencial do meu estilo de vida,\
								 fazendo parte da minha rotina. Correr e Jogar futebol são, definitivamente, \
								 o que mais me motiva a fazer desporto, para alem de me ajudar fisica e psicologicamente.\n",
								 "none",
								 "rien"];
var aSobre = ["Sobre","About" ,"Au sujet de Moi"];
var aInicio = ["Início","Home","Accueil"];
var aAtivitys = ["Últimas Atividades", "Last Activities", "Dérniers Activités"];
var aFamilia = ["Família","Family" ,"Famille"];
var aDesporto = ["Desportos", "Sports" ,"Sport"];
var aJobs = ["Empregos","Jobs" ,"Emploi"];
var aHello = ["Bem Vindo!", "Hello World!", "Salut!"]
const para = /\n/ ;
class Language {
	constructor(){
		this.lang = 0;
		this.atual = 0 ;
	}
	setLang(lang){
		this.lang = lang;
		this.updateAll();
	}
	setAtual(atual){
		this.atual = atual;
	}
	getAtual(){
		return this.atual;
	}
	updateAll(){
		//Home
		if (this.getAtual() == 0) {
			doHome();
		}
		//About
		if (this.getAtual() == 1) {
			doAbout();
		}
		//Family
		if (this.getAtual() == 2) {
			doFamily();
		}
		//Jobs
		if (this.getAtual()== 3) {
			doJobs();
		}
		//Sports
		if (this.getAtual() == 4) {
			doSports();
		}
	}
	getLang(){
		return this.lang;
	}
}

let lan = new Language();
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
  window.open("https://www.strava.com/athletes/pedrocabral95", "Strava")
}
function getGit() {
  window.open("https://github.com/pedrocabral95","GitHub")
}
function doHome(){
	lan.setAtual(0);
	let a = document.getElementById("contents") ;
	a.innerHTML = "<h2>" +  aInicio[lan.getLang()] + "</h2>";
}
function doAbout(){
	lan.setAtual(1);
	let a = document.getElementById("contents") ;
	a.innerHTML = "<h2>" +  aSobre[lan.getLang()] + "</h2>";
}
function doFamily(){
	lan.setAtual(2);
	let a = document.getElementById("contents") ;
	a.innerHTML = "<h2>" +  aFamilia[lan.getLang()] + "</h2>";
}
function doJobs(){
	lan.setAtual(3);
	let a = document.getElementById("contents") ;
	a.innerHTML = "<h2>" +  aJobs[lan.getLang()] + "</h2>";
}
function doSports(){
	lan.setAtual(4);
	let a = document.getElementById("contents") ;
	a.innerHTML = "<h2>" +  aDesporto[lan.getLang()] + "</h2>";

	if (aSportText.length < 2)
		a.innerHTML += "<br>" + aSportText[0] + "</br>";
	else
		a.innerHTML += "<br>" + aSportText[lan.getLang()] + "</br>";
		a.innerHTML += "<br>" + aAtivitys[lan.getLang()] + "</br>";
		a.innerHTML += "<iframe height='405' width='590' frameborder='0' allowtransparency='true' scrolling='yes' src='https://www.strava.com/activities/6730387205/embed/4390ab49c3101752304047a4d93dc9c035c7043c'></iframe>"
		a.innerHTML += "<iframe height='405' width='590' frameborder='0' allowtransparency='true' scrolling='yes' src='https://www.strava.com/activities/6707982869/embed/80cfaa2b5d5c46268893e6eed4a9995be9627948'></iframe>"
		a.innerHTML += "<iframe height='405' width='590' frameborder='0' allowtransparency='true' scrolling='yes' src='https://www.strava.com/activities/6683317422/embed/57dd29b6ffb16b321f4a6231d74f440757b4c7d1'></iframe>"

	}


function doLang(lang){
    var topnav;
		lan.setLang(lang);
    topnav = document.getElementById("home");
    topnav.textContent = aInicio[lan.getLang()];
    topnav = document.getElementById("about");
    topnav.textContent = aSobre[lan.getLang()] ;
    topnav = document.getElementById("family");
    topnav.textContent = aFamilia[lan.getLang()] ;
    topnav = document.getElementById("jobs");
    topnav.textContent = aJobs[lan.getLang()] ;
    topnav = document.getElementById("run");
    topnav.textContent = aDesporto[lan.getLang()];

}



