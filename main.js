
var aLanguage = ["English","French","Portuguese"];
var aSobre = ["Sobre","About" ,"Au sujet de Moi"];
var aInicio = ["Início","Home","Accueil"];
var aAtivitys = ["Últimas Atividades", "Last Activities", "Dérniers Activités"];
var aProjetos = ["Projetos","Projects" ,"Projets"];
var aDesporto = ["Desportos", "Sports" ,"Sport"];
var aJobs = ["Empregos","Jobs" ,"Emploi"];
var aHello = ["Bem Vindo!", "Hello World!", "Salut!"]
var aTech = ["C","Java","Python","C++","JavaScript","Prolog","VBA","Bash","Assembly","Ruby","Git","MySQL"];
var aSys = ["Linux","Mac","Windows"]
var aFrameWks = ["BootStrap","HTML","CSS","Hibernate","Django","Flask","Spring","Hibernate"]
var aTools = ["Atom","Sublime Text","Visual Studio", "Eclipse","Word","Excel","UML"]
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
		//Projects
		if (this.getAtual() == 2) {
			doProjects();
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

	//English
	if (lan.getLang() == 1){
		a.innerHTML += "<br></br>"
		a.innerHTML += "<ul>"
		a.innerHTML += "<li>" 
		a.innerHTML += "</ul>"
	}
	//French
	if (lan.getLang() == 2){

	}
	//PT
	else {

	}
}
function doAbout(){
	lan.setAtual(1);
	let a = document.getElementById("contents") ;
	a.innerHTML = "<h2>" + aSobre[lan.getLang()] + "</h2>";
	//English
	if (lan.getLang() == 1){
		a.innerHTML += "<p>Hey! My name is Pedro Cabral, I'm Portuguese and was born in <a href=https://www.visiteleiria.pt/> Leiria.</a> </p>"
		
		a.innerHTML += "<p>I'm B.Sc. student in " + 
					"<a href=https://fenix.tecnico.ulisboa.pt/cursos/leic-t/descricao>\
					Computer Science and Engineering [EIC] </a></p>"
		a.innerHTML += "<p> Now i'm finishing my bachelor degree at the "
					+"<a href=http://tecnico.ulisboa.pt/pt >Instituto Superior Técnico</a>, on  "
					+"<a href=http://tecnico.ulisboa.pt/pt/tag/campus-taguspark/>\
					Campus do Taguspark </a>, Oeiras.</p>"
	}
	//French
	if (lan.getLang() == 2){
		a.innerHTML += "<p>Salut! Je m'appele Pedro Cabral, je suis Portugais . Je née en <a href=https://www.visiteleiria.pt/fr/accueil> Leiria.</a> </p>"
		a.innerHTML += "<p> Je suis un étudiant en " + 
						"<a href=https://fenix.tecnico.ulisboa.pt/cursos/leic-t/descricao>\
						 Ingénierie Informatice et de l'ordinateur [EIC]\
						</a>.</p>";
		a.innerHTML += "<p>Je suis maintenant en dernière année de bachelier à l'" + 
						"<a href=http://tecnico.ulisboa.pt/en >Instituto Superior Técnico</a> , sur le " +
						"<a href=http://tecnico.ulisboa.pt/en/tag/campus-taguspark/>Campus do Taguspark</a>, à Oeiras.</p>"
		}
	//PT
	if (lan.getLang() == 0){
		a.innerHTML += "<br>Hey! O meu é Pedro Cabral, sou Portugues e nasci em <a href=https://www.visiteleiria.pt/> Leiria.</a> </p>"
		
		a.innerHTML += "<p>Sou estudante de "+ 
					"<a href=https://fenix.tecnico.ulisboa.pt/cursos/leic-t/descricao>\
					Engenharia Informática e de Computadores [EIC] </a></p>"
		a.innerHTML +="<p>Neste momento estou a terminar a licenciatura no "
					+"<a href=http://tecnico.ulisboa.pt/pt >Instituto Superior Técnico.</a> Estudo no "
					+"<a href=http://tecnico.ulisboa.pt/pt/tag/campus-taguspark/>\
					Campus do Taguspark </a> na cidade do conhecimento, em Oeiras.</p>"
	}
}
function doProjects(){
	lan.setAtual(2);
	let a = document.getElementById("contents") ;
	a.innerHTML = "<h2>" +  aProjetos[lan.getLang()] + "</h2>";

	//English
	if (lan.getLang() == 1){
		a.innerHTML += "<h3>Work</h3>"
		a.innerHTML += "<lu>"
		a.innerHTML += "<li>" + "<b>VBA Developer</b>"+ " @ <a href=https://www.exercito.pt/pt/> Portuguese Army</a>  [Jan '18 - Sep'20] </li>"
		a.innerHTML += "<p>Development of a Route plan which identify a soldier or a delegation when they are moving to another basement.</p>" 
		a.innerHTML +=	"<pre>	Development of the router plan model.</pre>"
		a.innerHTML +=	"<pre>	Development of the data migration to excel file.</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use : " + aTech[6] + ", " + aTools[5] + ", " + aTools[2] + ", " + aSys[2] +  "</p>";
		

		a.innerHTML += "<li>" + "<b>Website </b>" + "  @  Own </a>  [Feb'20 - Current] </li>"
		a.innerHTML += "<p>Development of a my website.</p>" 
		a.innerHTML += "<a> Technology/Tools/System in use : " + aTech[4] + ", " + aFrameWks[1] + ", " + aFrameWks[2] +", " + aTools[2] + ", " + aSys[2] + "/"+ aSys[0] + "/" + aSys[1] +  "</a>";
		//------------------------------------------------------------------------\\
		a.innerHTML += "<h3>Academic</h3>"
		//1
		a.innerHTML += "<li>" + "<b> Network routing protocols</b>" + " @ Computers and Networks  [Jan'22 - Fev'22] </li>"
		a.innerHTML += "<p>Development of routing protocols Distance Vector, Distance Vector with Path Poising , Path Vector e Link-State .</p>" 
		a.innerHTML += "<pre>	Implement algorithms: Distance Vector, Distance Vector with Path Poising , Path Vector e Link-State.</pre>"
		a.innerHTML += "<p> Technology/Tools/System in use: " + aTech[0] + ", " + aTech[3] + ", " + aTech[10] + ", " + aTools[2] + ", " + aSys[0] +  "</p>";
		a.innerHTML += "<p></p>"
		//2
		a.innerHTML += "<li>" + "<b> Reliable data transfering using ARQ approach</b>" + "@ Computers and Networks  [Jan'22 - Fev'22] </li>"
		a.innerHTML += "<p>Devolpment of the slides windows with protocols Go back N, Stop and Wait e Selective Repeat .</p>" 
		a.innerHTML +=	"<pre>	Development of Client et Server.</pre>"
		a.innerHTML +=	"<pre>	Implement algorithms: Go back N, Stop and Wait e Selective Repeat.</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: " + aTech[0] + ", " + aTech[3] + ", " + aTech[10] + ", " + aTools[2] + ", " + aSys[0] +  "</p>";
		a.innerHTML += "<p></p>"
		//3
		a.innerHTML += "<li>" + "<b> Bussiness Process Managements </b>" + "@ System Analysis and Modeling  [Jan'22 - Fev'22] </li>"
		a.innerHTML += "<p>Devolpment of business, tecnology and services processes of a System propose .</p>" 
		a.innerHTML +=	"<pre>	Using SysML/UML</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: UML , Camunda , ArchiMate, Enterprise Software, " + aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//4
		a.innerHTML += "<li>" + "<b> Search Algorithms </b>" + "@ Analysis and Synthesis of Algorithms  [Mar'21 - May'21] </li>"
		a.innerHTML += "<p>Desenvolver algoritmos de procura: Dinic .</p>" 
		a.innerHTML += "<pre>	Procura greedy : </pre>"
		a.innerHTML += "<pre>	Procura não greedy:</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[3] + ", " + aTools[2] +", " + aSys[0] + "</p>";
		a.innerHTML += "<p></p>"

		//5
		a.innerHTML += "<li>" + "<b> Create de Interfaces </b>" + "@ Human/Compution interation [Mar'21 - May'21] </li>"
		a.innerHTML += "<p>Development of  interfaces by advantages/disadvantages of being human .</p>" 
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[4] + ", P5.js,  " + aTools[2] +", " + aSys[0]+ "/" + aSys[1]+ "/" +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//6
		a.innerHTML += "<li>" + "<b> Game/Piece of Art /Room using Mesh/Material </b>" + "@ Graphic Computacion   [Oct'20 - Dec'20] </li>"
		a.innerHTML += "<p>Game/Piece of Art /Room development using Mesh , Textures , Lights, kinectics of 3D objects .</p>" 
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[4] + ", Three.js ,  " + aTools[2] +", " + aSys[0]+ "/" + aSys[1]+ "/" +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//7
		a.innerHTML += "<li>" + "<b> File System </b>" + "@ Operating Systems  [Out'19 - Dec'19] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a File System who loads files on the server task which are maintained in non-volatile RAM. The architecture was based in data structures, \
						sorting algorithms, pointers and dynamically allocated memory.</p>" 
		a.innerHTML += "<p>This File System supports concurrent accesses and was executed with slaves tasks. To guarantee parallelism processes was used semaphores and mutex lockers (latch).\
						 Also was used a Linux Sockets to guarantee connection between processes.</p>"
		a.innerHTML += "<pre>	Development of File System app with parallelism </pre>"
		a.innerHTML += "<pre>	Implementation of semaphores and mutex lockers </pre>"
		a.innerHTML += "<pre>	Implementation of UNIX Sockets and multithreading</pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		//8
		a.innerHTML += "<li>" + "<b> Contact Management </b>" + "@ Introducing to Algorithms and Data Structures  [Apr'19 - May'19] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a Contact Management. The architecture was based in data structures, sorting algorithms, pointers and dynamically allocated memory.\
						 All commands were given in command line. .</p>" 
		a.innerHTML += "<pre>	Development of Contact Management </pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ", Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		//9
		a.innerHTML += "<li>" + "<b> Binary Game </b>" + "@ Logic for  Programming  [Abr'19 - Mai'19] </li>"
		a.innerHTML += "<p> Create a binary game using a logical programming language.</p>" 
		a.innerHTML += "<pre>	Development of Syntax and Rule of Binary Game </pre>"
		a.innerHTML += "<pre>	Development of main and auxiliar functions </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: SWI-Prolog ,Shell , " + aTools[2] +", " + aSys[0]+ "/" + aSys[1]+ "/" +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//10
		a.innerHTML += "<li>" + "<b> Room Reservation System </b>" + "@ Introducing to Algorithms and Data Structures  [Feb'19 - Apr'19] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a room reservations system handling with multiple requests.\
					 The architecture was based in data structures and sorting algorithms."
		a.innerHTML += "All commands were given in command line.</p>" 
		a.innerHTML += "<pre>	Development of Room Resrevation System  </pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ", Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		//11
		a.innerHTML += "<li>" + "<b> Arcade Spaceship Game </b>" + "@ Introduction to Computer Architecture  [Sep'18 - Dec'19] </li>"
		a.innerHTML += "<p>The main goal of the application was to create a Spaceship game. \
							The architecture was based in PEPE CPU simulator with 8 bits.</p>" 
		a.innerHTML += "<p> All commands were given by a peripheric keyboard.</p>" 
		a.innerHTML += "<pre>	Development of Arcade Spaceship Game </pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[8] + ",PEPE , " + aTools[0] +", " +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//12
		a.innerHTML += "<li>" + "<b> College </b>" + "@ Object-Oriented Programing [Sep'18 - Dec'19] </li>";
		a.innerHTML += "<p>The main goal of the application was to manage a College app activity, like Courses, students, teachers and surveys.\
						The architecture was based in Facade, State and Observer design patterns.</p>"
		a.innerHTML += "<p>All commands were given in command line</p>" 
		a.innerHTML += "<pre>	Development of College  </pre>"
		a.innerHTML += "<pre>	Implementation of Façade, State and Observer design patterns </pre>"
		a.innerHTML += "<pre>	Create a shell script for tests</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[1] + ", UML, Eclipse, Shell, " +aSys[0] + "</p>" ;
		

		//13
		a.innerHTML += "<li>" + "<b> Project Planning Management </b>" + "@ Introducing to Algorithms and Data Structures  [Apr'18 - May'18] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a project planning management based in multiples processes. \
						The architecture was based in data structures, sorting algorithms, pointers and dynamically allocated memory.</p>" 
		a.innerHTML += "<p>All commands were given in command line</p>"
		a.innerHTML += "<pre>	Development of Project Planning Management</pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ", Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"



		//14
		a.innerHTML += "<li>" + "<b> Sparse Matrix Management  </b>" + "@ Introducing to Algorithms and Data Structures  [Feb'18 - Apr'18] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a sparse matrix in order to simulate a spreadsheet or an electronic circuit.\
						 The architecture was based in data structures and sorting algorithms"
		a.innerHTML += "All commands were given in command line.</p>" 
		a.innerHTML += "<pre>	Development of Sparse Matrix Management  </pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ", Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"
		//15
		a.innerHTML += "<li>" + "<b> GURU Words Game </b>" + "@ Foundations of Programming  [Sep'17 - Dec'17] </li>"
		a.innerHTML += "<p>The main goal of the application was to create a dynamic game.\
						 The architecture was based in abstract data type who evaluate a word formed by a given letters</p>" 
		a.innerHTML += "<pre>	Development of Puzzle Game App Syntax and Rules</pre>"
		a.innerHTML += "<pre>	Development Multiplayer mode</pre>"
		a.innerHTML += "<pre>	Create a shell script for tests</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use:  "+ aTech[2] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"
		a.innerHTML += "</lu>"

	}
	//French
	if (lan.getLang() == 2){
		a.innerHTML += "<h3>Professionais</h3>"
		a.innerHTML += "<lu>"
		//1
		a.innerHTML += "<li>" + "<b>VBA Developer</b>"+ " @ <a href=https://www.exercito.pt/pt/> L'Armée Portugaise</a>  [Jan '18 - Sep '20] </li>"
		a.innerHTML += "<p>Development of a Route plan which identify a soldier or a delegation when they are moving to another basement.</p>" 
		a.innerHTML +=	"<pre>	Development of the router plan model.</pre>"
		a.innerHTML +=	"<pre>	Development of the data migration to excel file.</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use : " + aTech[6] + ", " + aTools[5] + ", " + aTools[2] + ", " + aSys[2] +  "</p>";
		//2
		a.innerHTML += "<li>" + "<b>Website </b>" + "  @  Own </a>  [Fev '20 - Current] </li>"
		a.innerHTML += "<p>Development of a my website.</p>" 
		a.innerHTML += "<a> Technology/Tools/System in use : " + aTech[4] + ", " + aFrameWks[1] + ", " + aFrameWks[2] +", " + aTools[2] + ", " + aSys[2] + "/"+ aSys[0] + "/" + aSys[1] +  "</a>";

		//------------------------------------------------------------------------\\
		a.innerHTML += "<h3>Académicos</h3>"
		//1
		a.innerHTML += "<li>" + "<b> Network routing protocols</b>" + " @ Computers and Networks  [Jan'22 - Fev'22] </li>"
		a.innerHTML += "<p>Development of routing protocols Distance Vector, Distance Vector with Path Poising , Path Vector e Link-State .</p>" 
		a.innerHTML += "<pre>	Implement algorithms: Distance Vector, Distance Vector with Path Poising , Path Vector e Link-State.</pre>"
		a.innerHTML += "<p> Technology/Tools/System in use: " + aTech[0] + ", " + aTech[3] + ", " + aTech[10] + ", " + aTools[2] + ", " + aSys[0] +  "</p>";
		a.innerHTML += "<p></p>"
		//2
		a.innerHTML += "<li>" + "<b> Reliable data transfering using ARQ approach</b>" + "@ Computers and Networks  [Jan'22 - Fev'22] </li>"
		a.innerHTML += "<p>Devolpment of the slides windows with protocols Go back N, Stop and Wait e Selective Repeat .</p>" 
		a.innerHTML +=	"<pre>	Development of Client et Server.</pre>"
		a.innerHTML +=	"<pre>	Implement algorithms: Go back N, Stop and Wait e Selective Repeat.</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: " + aTech[0] + ", " + aTech[3] + ", " + aTech[10] + ", " + aTools[2] + ", " + aSys[0] +  "</p>";
		a.innerHTML += "<p></p>"
		//3
		a.innerHTML += "<li>" + "<b> Bussiness Process Managements </b>" + "@ System Analysis and Modeling  [Jan'22 - Fev'22] </li>"
		a.innerHTML += "<p>Devolpment of business, tecnology and services processes of a System propose .</p>" 
		a.innerHTML +=	"<pre>	Using SysML/UML</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: UML , Camunda , ArchiMate, Enterprise Software, " + aSys[2] + "</p>";
		a.innerHTML += "<p></p>"
		//4
		a.innerHTML += "<li>" + "<b> Search Algorithms </b>" + "@ Analysis and Synthesis of Algorithms  [Mar'21 - Mai'21] </li>"
		a.innerHTML += "<p>Desenvolver algoritmos de procura: Dinic .</p>" 
		a.innerHTML += "<pre>	Procura greedy : </pre>"
		a.innerHTML += "<pre>	Procura não greedy:</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[3] + ", " + aTools[2] +", " + aSys[0] + "</p>";
		a.innerHTML += "<p></p>"

		//5
		a.innerHTML += "<li>" + "<b> Create de Interfaces </b>" + "@ Human/Compution interation [Mar'21 - Mai'21] </li>"
		a.innerHTML += "<p>Development of  interfaces by advantages/disadvantages of being human .</p>" 
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[4] + ", P5.js,  " + aTools[2] +", " + aSys[0]+ "/" + aSys[1]+ "/" +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//6
		a.innerHTML += "<li>" + "<b> Game/Piece of Art /Room using Mesh/Material </b>" + "@ Graphic Computacion   [Oct'20 - Dec'20] </li>"
		a.innerHTML += "<p>Game/Piece of Art /Room development using Mesh , Textures , Lights, kinectics of 3D objects .</p>" 
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[4] + ", Three.js ,  " + aTools[2] +", " + aSys[0]+ "/" + aSys[1]+ "/" +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//7
		a.innerHTML += "<li>" + "<b> File System </b>" + "@ Operating Systems  [Out'19 - Dec'19] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a File System who loads files on the server task which are maintained in non-volatile RAM. The architecture was based in data structures, \
						sorting algorithms, pointers and dynamically allocated memory.</p>" 
		a.innerHTML += "<p>This File System supports concurrent accesses and was executed with slaves’ tasks. To guarantee parallelism processes was used semaphores and mutex lockers (latch).\
						 Also was used a Linux Sockets to guarantee connection between processes.</p>"
		a.innerHTML += "<pre>	Development of File System app with parallelism </pre>"
		a.innerHTML += "<pre>	Implementation of semaphores and mutex lockers </pre>"
		a.innerHTML += "<pre>	Implementation of UNIX Sockets and multithreading</pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		//8
		a.innerHTML += "<li>" + "<b> Contact Management </b>" + "@ Introducing to Algorithms and Data Structures  [Apr'19 - May'19] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a Contact Management. The architecture was based in data structures, sorting algorithms, pointers and dynamically allocated memory.\
						 All commands were given in command line. .</p>" 
		a.innerHTML += "<pre>	Development of Contact Management </pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ", Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		//9
		a.innerHTML += "<li>" + "<b> Binary Game </b>" + "@ Logic for  Programming  [Abr'19 - Mai'19] </li>"
		a.innerHTML += "<p> Create a binary game using a logical programming language.</p>" 
		a.innerHTML += "<pre>	Development of Syntax and Rule of Binary Game </pre>"
		a.innerHTML += "<pre>	Development of main and auxiliar functions </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: SWI-Prolog ,Shell , " + aTools[2] +", " + aSys[0]+ "/" + aSys[1]+ "/" +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//10
		a.innerHTML += "<li>" + "<b> Room Reservation System </b>" + "@ Introducing to Algorithms and Data Structures  [Feb'19 - Apr'19] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a room reservations system handling with multiple requests.\
					 The architecture was based in data structures and sorting algorithms."
		a.innerHTML += "All commands were given in command line.</p>" 
		a.innerHTML += "<pre>	Development of Room Resrevation System  </pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ", Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		//11
		a.innerHTML += "<li>" + "<b> Arcade Spaceship Game </b>" + "@ Introduction to Computer Architecture  [Sep'18 - Dec'19] </li>"
		a.innerHTML += "<p>The main goal of the application was to create a Spaceship game. \
							The architecture was based in PEPE CPU simulator with 8 bits.</p>" 
		a.innerHTML += "<p> All commands were given by a peripheric keyboard.</p>" 
		a.innerHTML += "<pre>	Development of Arcade Spaceship Game </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[8] + ",PEPE , " + aTools[0] +", " +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//12
		a.innerHTML += "<li>" + "<b> College </b>" + "@ Object-Oriented Programing [Sep'18 - Dec'19] </li>";
		a.innerHTML += "<p>The main goal of the application was to manage a College app activity, like Courses, students, teachers and surveys.\
						The architecture was based in Facade, State and Observer design patterns.</p>"
		a.innerHTML += "<p>All commands were given in command line</p>" 
		a.innerHTML += "<pre>	Development of College  </pre>"
		a.innerHTML += "<pre>	Implementation of Façade, State and Observer design patterns </pre>"
		a.innerHTML += "<pre>	Create a shell script for tests</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[1] + ", UML, Eclipse, Shell, " +aSys[0] + "</p>" ;

		//13
		a.innerHTML += "<li>" + "<b> Project Planning Management </b>" + "@ Introducing to Algorithms and Data Structures  [Apr'18 - May'18] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a project planning management based in multiples processes. \
						The architecture was based in data structures, sorting algorithms, pointers and dynamically allocated memory.</p>" 
		a.innerHTML += "<p>All commands were given in command line</p>"
		a.innerHTML += "<pre>	Development of Project Planning Management</pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ", Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"



		//14
		a.innerHTML += "<li>" + "<b> Sparse Matrix Management  </b>" + "@ Introducing to Algorithms and Data Structures  [Feb'18 - Apr'18] </li>"
		a.innerHTML += "<p>The main goal of the application is to manipulate a sparse matrix in order to simulate a spreadsheet or an electronic circuit.\
						 The architecture was based in data structures and sorting algorithms"
		a.innerHTML += "All commands were given in command line.</p>" 
		a.innerHTML += "<pre>	Development of Sparse Matrix Management  </pre>"
		a.innerHTML += "<pre>	Create shell scripts to test the File System </pre>"
		a.innerHTML += "<p>Technology/Tools/System in use: "+ aTech[0] + ", Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		//15
		a.innerHTML += "<li>" + "<b> GURU Words Game </b>" + "@ Foundations of Programming  [Sep'17 - Dec'17] </li>"
		a.innerHTML += "<p>The main goal of the application was to create a dynamic game.\
						 The architecture was based in abstract data type who evaluate a word formed by a given letters</p>" 
		a.innerHTML += "<pre>	Development of Puzzle Game App Syntax and Rules</pre>"
		a.innerHTML += "<pre>	Development Multiplayer mode</pre>"
		a.innerHTML += "<pre>	Create a shell script for tests</pre>"
		a.innerHTML += "<p>Technology/Tools/System in use:  "+ aTech[2] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		a.innerHTML += "</lu>"

		
	}
		//PT
	if (lan.getLang() == 0){
		a.innerHTML += "<h3>Professionais</h3>"
		
		a.innerHTML += "<lu>"
		//1
		a.innerHTML += "<li>" + "<b> VBA Developer </b>" + " @ <a href=https://www.exercito.pt/pt/> Exército Português</a>  [Jan '18 - Set '20] </li>"
		a.innerHTML += "<p>Desenvolvimento de Guias de Marcha que identificam um soldado ou comitiva dado um deslocamento para outro quartel.</p>" 
		a.innerHTML +=	"<pre>	Desenvolver o modelo de guia de marcha.</pre>"
		a.innerHTML +=	"<pre>	Desenvolver fluxo de informação para ficheiro de Excel.</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema  em uso : " + aTech[6] + ", " + aTools[5] + ", " + aTools[2] + ", " + aSys[2] +  "</p>";
		//2
		a.innerHTML += "<li>" + "<b>Website </b>" + " @  Own </a>  [Fev '20 - Current] </li>"
		a.innerHTML += "<pre>	Desenvolvimento de Website.</pre>" 
		a.innerHTML += "<a> Tecnologia/Ferramenta/Sistema em uso : " + aTech[4] + ", " + aFrameWks[1] + ", " + aFrameWks[2] +", " + aTools[2] + ", " + aSys[2] + "/"+ aSys[0] + "/" + aSys[1] +  "</a>";
		
		//------------------------------------------------------------------------\\
		a.innerHTML += "<h3>Académicos</h3>"
		//1
		a.innerHTML += "<li>" + "<b> Protocolos de Encaminhamento na Internet</b>" + " @ Rede e Computadores  [Jan'22 - Fev'22] </li>"
		a.innerHTML += "<p>Desenvolvimento de protocolos Distance Vector, Distance Vector with Path Poising , Path Vector e Link-State .</p>" 
		a.innerHTML += "<pre>	Implementar algoritmos: Distance Vector, Distance Vector with Path Poising , Path Vector e Link-State.</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema  em uso : " + aTech[0] + ", " + aTech[3] + ", " + aTech[10] + ", " + aTools[2] + ", " + aSys[0] +  "</p>";
		a.innerHTML += "<p></p>"

		//2
		a.innerHTML += "<li>" + "<b> Tranferencia Segura de dados baseado no protocolo UDP usando a abordagem ARQ </b>" + "@ Rede e Computadores  [Jan'22 - Fev'22] </li>"
		a.innerHTML += "<p>Desenvolvimento de janelas deslizantes com protocolos Go back N, Stop and Wait e Selective Repeat .</p>" 
		a.innerHTML += "<pre>	Desenvolver o Cliente e Servidor.</pre>"
		a.innerHTML += "<pre>	Implementar algoritmos: Go back N, Stop and Wait e Selective Repeat.</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema  em uso : " + aTech[0] + ", " + aTech[3] + ", " + aTech[10] + ", " + aTools[2] + ", " + aSys[0] +  "</p>";
		
		//3
		a.innerHTML += "<li>" + "<b> Modelação Proposta Empresarial </b>" + "@ Análise e Modelação de Sistemas  [Jan'22 - Fev'22] </li>"
		a.innerHTML += "<p>Desenvolver camada de negócio, tecnologia e serviços de uma proposta empresarial .</p>" 
		a.innerHTML += "<pre>	Uso de SysML/UML</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : UML , Camunda , ArchiMate, Enterprise Software ." + aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//4
		a.innerHTML += "<li>" + "<b>Algoritmos de Procura </b>" + "@ Análise e Sintese de Algoritmos  [Mar'21 - Mai'21] </li>"
		a.innerHTML += "<p>Desenvolver algoritmos de procura: Dinic .</p>" 
		a.innerHTML += "<pre>	Procura greedy : </pre>"
		a.innerHTML += "<pre>	Procura não greedy:</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[3] + ", " + aTools[2] +", " + aSys[0] + "</p>";
		a.innerHTML += "<p></p>"

		//5
		a.innerHTML += "<li>" + "<b> Criação de Interfaces </b>" + "@ Interface Pessoa/Máquina  [Mar'21 - Mai'21] </li>"
		a.innerHTML += "<p>Desenvolver interfaces dados vantagens/desvantagens do ser humano .</p>" 
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[4] + ", P5.js,  " + aTools[2] +", " + aSys[0]+ "/" + aSys[1]+ "/" +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//6
		a.innerHTML += "<li>" + "<b> Jogo/Peça de Arte/Sala via Mesh/Material </b>" + "@ Computação Gráfica  [Out'20 - Dez'20] </li>"
		a.innerHTML += "<p>Desenvolver jogo, peça de arte, sala explorando Mesh , Texturas , Luzes, Cinética, de objetos 3D .</p>" 
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[4] + ", Three.js ,  " + aTools[2] +", " + aSys[0]+ "/" + aSys[1]+ "/" +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//7
		a.innerHTML += "<li>" + "<b> Sistema de Ficheiros </b>" + "@ Sistemas Operativos  [Out'19 - Dez'19] </li>"
		a.innerHTML += "<p>Desenvolver um sistema de ficheiros que carrega ficheiros para um server com memoria RAM não volátil.</p>" 
		a.innerHTML += "<p>Este Sistema de ficheiros garante acesso concorrido que é executado por tarefas escravas.Para garantir paralelismo foi \
						usado semaforos e bloqueadores/trincos MUTEX.</p>"
		a.innerHTML += "<pre>	Implementação de Semáforos e trincos MUTEX </pre>"
		a.innerHTML += "<pre>	Implementação de Sockets UNIX e MultiThreading</pre>"
		a.innerHTML += "<pre>	Criação de Scipts em Shell para testes</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[0] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";

		//8
		a.innerHTML += "<li>" + "<b> Gestão de Contatos </b>" + "@ Introdução Algoritmos e Estruturas de Dados  [Abr'19 - Mai'19] </li>"
		a.innerHTML += "<p>Desenvolver um sistema de gestão de Contatos.</p>" 
		a.innerHTML += "<pre>	Desenvolver sistema de Gestão de Contatos </pre>"
		a.innerHTML += "<pre>	Criação de Scipts em Shell para testes</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[0] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		//9
		a.innerHTML += "<li>" + "<b> Jogo Binário </b>" + "@ Logica Programação  [Abr'19 - Mai'19] </li>"
		a.innerHTML += "<p> Desenvolver um jogo de binário.</p>" 
		a.innerHTML += "<pre>	Desenvolver sistema de Gestão de Contatos </pre>"
		a.innerHTML += "<pre>	Criação de Scipts em Shell para testes</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : SWI-Prolog ,Shell , " + aTools[2] +", " + aSys[0]+ "/" + aSys[1]+ "/" +aSys[2] + "</p>";
		a.innerHTML += "<p></p>"

		//10
		a.innerHTML += "<li>" + "<b> Sistema de Reservas de Salas </b>" + "@ Introdução Algoritmos e Estruturas de Dados  [Fev'19 - Abr'19] </li>"
		a.innerHTML += "<p>Desenvolver um sistema de Reservas de salas para multiplos pedidos de reserva.</p>" 
		a.innerHTML += "<pre>	Desenvolver Sistema de Reservas de Salas </pre>"
		a.innerHTML += "<pre>	Criação de Scipts em Shell para testes</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[0] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"


		//11
		a.innerHTML += "<li>" + "<b> Jogo Arcade de Nave Espacial </b>" + "@ Introdução Arquitetura de Computadores  [Set'18 - Dez'19] </li>"
		a.innerHTML += "<p>Desenvolver um Jogo Arcade de Nave Espacial em assembly num Processador de Ensino -> PEPE.</p>" 
		a.innerHTML += "<pre>	Desenvolver Jogo Arcade de Nave Espacial </pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[8] + ",PEPE , " + aTools[0] +", " +aSys[2] + "</p>" ;
		a.innerHTML += "<p></p>"
		

		//12
		a.innerHTML += "<li>" + "<b> Universidade </b>" + "@ Programação com Objetos  [Set'18 - Dez'19] </li>"
		a.innerHTML += "<p>Desenvolver uma Universidade com recurso a padroes de desenho e linguagem de programação orientada a objetos.</p>" 
		a.innerHTML += "<pre>	Desenvolvimento Universidade </pre>"
		a.innerHTML += "<pre>	Implementação padroes de desenho : Façade , State e Observer </pre>"
		a.innerHTML += "<pre>	Criação de Scipts em Shell para testes</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[1] + ", UML, Eclipse, Shell, " +aSys[0] + "</p>" ;
		a.innerHTML += "<p></p>"

		//13
		a.innerHTML += "<li>" + "<b> Gestão de Planeamento de Projetos </b>" + "@ Introdução Algoritmos e Estruturas de Dados  [Abr'18 - Mai'18] </li>"
		a.innerHTML += "<p>Desenvolver um sistema de gestão de Planeamento de Projetos.</p>" 
		a.innerHTML += "<pre>	Desenvolver sistema de Gestão de Planeamento de Projetos </pre>"
		a.innerHTML += "<pre>	Criação de Scipts em Shell para testes</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[0] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"
		//14
		a.innerHTML += "<li>" + "<b> Otimização de Matrizes Esparsas </b>" + "@ Introdução Algoritmos e Estruturas de Dados  [Fev'18 - Abr'18] </li>"
		a.innerHTML += "<p>Desenvolver um sistema de Otimização de Matrizes Esparsas.</p>" 
		a.innerHTML += "<pre>	Desenvolver Otimização de Matrizes Esparsas </pre>"
		a.innerHTML += "<pre>	Criação de Scipts em Shell para testes</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[0] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		//15
		a.innerHTML += "<li>" + "<b> Jogo GURU Palavras </b>" + "@ Fundamentos de Programação  [Set'17 - Dez'17] </li>"
		a.innerHTML += "<p>Desenvolver Jogo GURU Palavra Single e Multiplayer.</p>" 
		a.innerHTML += "<pre>	Desenvolver Jogo GURU Palavra </pre>"
		a.innerHTML += "<pre>	Criação de Scipts em Shell para testes</pre>"
		a.innerHTML += "<p>Tecnologia/Ferramenta/Sistema em uso : "+ aTech[2] + ",Shell , " + aTools[0] +", " + aSys[0]+ "</p>";
		a.innerHTML += "<p></p>"

		a.innerHTML += "</lu>"
		
	}
}
function doJobs(){
	lan.setAtual(3);
	let a = document.getElementById("contents") ;
	a.innerHTML = "<h2>" +  aJobs[lan.getLang()] + "</h2>";

	//English
	if (lan.getLang() == 1){
		a.innerHTML += "<lu>"
		a.innerHTML += "<li> <a href=https://www.exercito.pt/pt/> Portuguese Army </li>"
		a.innerHTML +="</lu>"
		a.innerHTML += "<p> Between 2014 and 2021 have been served the Portuguese Army in Paço de Arcos basement.</p>"+
						"<p> Last year i was deployed on COVID19 Task Force helping the National Health System.</p> " 
						
	}
	//French
	if (lan.getLang() == 2){
		a.innerHTML += "<lu>"
		a.innerHTML += "<li> <a href=https://www.exercito.pt/pt/> L'Armée Portugais </li>"
		a.innerHTML +="</lu>"
	}
	//PT
	if (lan.getLang() == 0){
		a.innerHTML += "<lu>"
		a.innerHTML += "<li> <a href=https://www.exercito.pt/pt/> Exército Português </li>"
		a.innerHTML +="</lu>"
	}

	a.innerHTML +="<p> <a href='https://www.publico.pt/2020/12/26/politica/noticia/dificuldades-rastreadores-militares-vou-contactar-advogado-1944068'>Covid19 Task Force</a></p>"
					

}
function doSports(){
	lan.setAtual(4);
	let a = document.getElementById("contents") ;
	a.innerHTML = "<h2>" +  aDesporto[lan.getLang()] + "</h2>";

	if (lan.getLang() == 0){
		a.innerHTML += "<p> Desde pequeno que o  desporto é um pilar essencial do meu estilo de vida,\
		fazendo parte da minha rotina. Correr e Jogar futebol são, definitivamente, \
		o que mais me motiva a fazer desporto, para alem de me ajudar fisica e psicologicamente.</p>";
	}
	if (lan.getLang() == 1){
		a.innerHTML += "<p> Desde pequeno que o  desporto é um pilar essencial do meu estilo de vida,\
		fazendo parte da minha rotina. Correr e Jogar futebol são, definitivamente, \
		o que mais me motiva a fazer desporto, para alem de me ajudar fisica e psicologicamente.</p>";
	}
	if (lan.getLang() == 2){
		a.innerHTML += "<p> Desde pequeno que o  desporto é um pilar essencial do meu estilo de vida,\
		fazendo parte da minha rotina. Correr e Jogar futebol são, definitivamente, \
		o que mais me motiva a fazer desporto, para alem de me ajudar fisica e psicologicamente.</p>";
	}
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
    topnav = document.getElementById("projects");
    topnav.textContent = aProjetos[lan.getLang()] ;
    topnav = document.getElementById("jobs");
    topnav.textContent = aJobs[lan.getLang()] ;
    topnav = document.getElementById("run");
    topnav.textContent = aDesporto[lan.getLang()];

}



