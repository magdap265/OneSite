
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

function wyczyscElement (idElementu){
    let element = document.getElementById(idElementu);
    element.innerHTML= "";
}


function wywolanieGet (adresUrl){
    return fetch(adresUrl)
        .then(resp => resp.json())
};

function aktualizacjaTabeli (data, naglowki, klucze, idTabeli){
    wyczyscElement(idTabeli);
    generatorTabeli(data, naglowki, klucze, idTabeli);
}

function pobierzIWyswietl (){
    wywolanieGet("http://127.0.0.1:3000/users")
        .then(function(data){
            aktualizacjaTabeli(data,
                ["Imię", "Nazwa firmy", "Adres e-mail", "Numer telefonu", "Ulubiony owoc"], 
                ["name", "company", "email", "phone", "favoriteFruit"], 
                "tabela")
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


    // let zakladki = document.getElementsByClassName("przycisk");
    // for (zakladka of zakladki) {
    //     console.log(zakladka);
    //     zakladka.addEventListener("click", function() {
    //         var current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //         console.log(this.id);
    //     });
    // }

    function aktualizujWidok(zakladki, aktywna) {
        zakladki.forEach(zakladka => {
            if(zakladka.id === aktywna){
                let elementDoWyswietlenia = document.getElementById(aktywna);
                elementDoWyswietlenia.style.display = "block";
            } else {
                let elementDoWyswietlenia = document.getElementById(zakladka.id);
                elementDoWyswietlenia.style.display = "none";
            }
        });
    }
    
function pokazTresc(NazwaZakladki){

    let kontakt = document.getElementById("kontakt");
    let artykul1 = document.getElementById("art1");
    let artykul2 = document.getElementById("art2");
    let tabela = document.getElementById("tab");  
    let tab = [kontakt, artykul1, artykul2, tabela];
    
    switch(NazwaZakladki){
        case kontakt:
            kon.style.border = "2px dashed #228822";
            a1.style.border = "2px dashed black";
            a2.style.border = "2px dashed black";
            t.style.border = "2px dashed black";
            aktualizujWidok(tab, "kontakt");
            break;
        case artykul1:
            aktualizujWidok(tab, "art1");
            a1.style.border = "2px dashed #228822";
            kon.style.border = "2px dashed black";
            a2.style.border = "2px dashed black";
            t.style.border = "2px dashed black";
            break;    
        case artykul2:
                aktualizujWidok(tab, "art2");
            a2.style.border = "2px dashed #228822";
            a1.style.border = "2px dashed black";
            kon.style.border = "2px dashed black";
            t.style.border = "2px dashed black";
            break;
        case tabela:
            aktualizujWidok(tab, "tab");
            t.style.border = "2px dashed #228822";
            a2.style.border = "2px dashed black";
            a1.style.border = "2px dashed black";
            kon.style.border = "2px dashed black";
    }
}

function klikKontakt(){
    
    const iconTel = document.getElementById("iTel");
    const phoneNumber = document.getElementById("dTel");
    if(phoneNumber.style.display == "none"){
        phoneNumber.style.display = "block";
        iconTel.style.display = "none";
    } else {
        phoneNumber.style.display = "none";
        iconTel.style.display = "block";
    }
}

