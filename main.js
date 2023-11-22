let semanticCore = {
    logo: {
        "ua":"Лого",
        "en":"Logo",
        "pl":"Logo"
    },

    home: {
        "ua":"Домашня",
        "en":"Home",
        "pl":"Główna"
    },
    about: {
        "ua":"Про нас",
        "en":"About",
        "pl":"O nas"
    },
    contact: {
        "ua":"Контакти",
        "en":"Contact",
        "pl":"Kontakty"
    },
}

let allLang = ['en', 'ua', 'pl']
let lang = 'en';

ua.onclick = function(){
    lang = 'ua'
    changeURL();
}

en.onclick = function(){
    lang = 'en'
    changeURL();
}

pl.onclick = function(){
    lang = 'pl'
    changeURL();
}

function changeURL(){
    location.href = window.location.pathname + `#` + lang;
    location.reload()
}

function changeLang(){
    let hash = (window.location.hash).substring(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    for(let key in semanticCore){
        document.querySelector('.language-'+key).innerText = semanticCore[key][hash]
    }
}

changeLang()