function getForm() {
      window.location = "https://forms.gle/qV3HW7ZjKoc32Fqm6";
}

function getGit() {
    window.location = "https://github.com/pedrocabral95"
}
var lang = 0;

function active(){
    if (lang == 0){
        lang = 1;
        //english
        
    }
    if ( lang == 1){
        lang = 2;
        //french
    }
    else{
        lang = 0
    }

}

function doLanguage(){
    if (lang == 0){
        lang = 1;
        //english
    }
    if ( lang == 1){
        lang = 2;
        //french
    }
    else{
        lang = 0
    }

}


