
function generatorTabeli(data, naglowki, klucze, idTabeli){
    
    let tabela = document.getElementById(idTabeli);
    let nowyWiersz = tabela.insertRow();

    //generowanie i wypełnianie nagłówków wyświetlanej tabeli
    for(const i in naglowki){            
        nowyWiersz.insertCell(i).innerHTML = naglowki[i];
    }
    
    for(let osoba of data){
        let nowyW = tabela.insertRow();

        //generowanie i wypełnianie komórek wyświetlanej tabeli

        for(const [i, klucz] of klucze.entries()){            
            nowyW.insertCell(i).innerHTML = osoba[klucz];
        }
    }
}


function wywolanieGet (adresUrl){
    return fetch(adresUrl)
        .then(resp => resp.json())
};

function pobierzIWyswietl (){
    wywolanieGet("http://127.0.0.1:3000/users")
        .then(function(data){ 
            generatorTabeli(
                data,
                ["Imię", "Nazwa firmy", "Adres e-mail", "Numer telefonu", "Ulubiony owoc"], 
                ["name", "company", "email", "phone", "favoriteFruit"], 
                "tabela"
            );
        });
}

function daneDoWyslania (){
    console.log("jestem tutaj");
    fetch("http://127.0.0.1:3000/users", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
            "name": document.querySelector("#name").value,
            "company": document.querySelector("#company").value,
            "email": document.querySelector("#email").value, 
            "phone": document.querySelector("#phone").value, 
            "favoriteFruit": document.querySelector("#favouriteFruit").value,
            "gender": document.querySelector("#gender").value
        }), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
}

// function dodajDoBazy () {

// }

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

pobierzIWyswietl()