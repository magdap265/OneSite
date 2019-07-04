fetch("http://127.0.0.1:3000/users")
    .then((resp) => resp.json())
    .then(function(data){ 


    let tabela = document.getElementById("tabela")
    let nowyWiersz = tabela.insertRow();

    //generowanie i wypełnianie nagłówków wyświetlanej tabeli
    let naglowek = ["Imię", "Nazwa firmy", "Adres e-mail", "Numer telefonu", "Ulubiony owoc"];

    for(const i in naglowek){            
        nowyWiersz.insertCell(i).innerHTML = naglowek[i];
    }
    
    for(let osoba of data){
        let nowyW = tabela.insertRow();

        //generowanie i wypełnianie komórek wyświetlanej tabeli
        let klucz = [osoba.name, osoba.company, osoba.email, osoba.phone, osoba.favoriteFruit];

        for(const i in klucz){            
            nowyW.insertCell(i).innerHTML = klucz[i];
        }
    }

});

function pokazTresc(NazwaZakladki){
    let kontakt = document.getElementById("kontakt");
    let artykul1 = document.getElementById("art1");
    let artykul2 = document.getElementById("art2");
    let tabela = document.getElementById("tab");  


    switch(NazwaZakladki){
        case kontakt:
            kontakt.style.display = "block"; 
            artykul1.style.display = "none";
            artykul2.style.display = "none";
            tabela.style.display = "none";
            kon.style.border = "2px dashed #228822";
            a1.style.border = "2px dashed black";
            a2.style.border = "2px dashed black";
            t.style.border = "2px dashed black";
            break;
        case artykul1:
            kontakt.style.display = "none";
            artykul1.style.display = "block";
            artykul2.style.display = "none";
            tabela.style.display = "none";
            a1.style.border = "2px dashed #228822";
            kon.style.border = "2px dashed black";
            a2.style.border = "2px dashed black";
            t.style.border = "2px dashed black";
            break;    
        case artykul2:
            kontakt.style.display = "none";
            artykul1.style.display = "none";
            artykul2.style.display = "block";
            tabela.style.display = "none";
            a2.style.border = "2px dashed #228822";
            a1.style.border = "2px dashed black";
            kon.style.border = "2px dashed black";
            t.style.border = "2px dashed black";
            break;
        case tabela:
            kontakt.style.display = "none";
            artykul1.style.display = "none";
            artykul2.style.display = "none";
            tabela.style.display = "block";
            t.style.border = "2px dashed #228822";
            a2.style.border = "2px dashed black";
            a1.style.border = "2px dashed black";
            kon.style.border = "2px dashed black";
    }
}