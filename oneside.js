fetch("http://127.0.0.1:3000/users")
    .then((resp) => resp.json())
    .then(function(data){ 


    let tabela = document.getElementById("tabela")
    let nowyWiersz = tabela.insertRow();
    let imie = nowyWiersz.insertCell(0);
    let firma = nowyWiersz.insertCell(1);
    let email = nowyWiersz.insertCell(2);
    let telefon = nowyWiersz.insertCell(3);
    let owoc = nowyWiersz.insertCell(4);

    imie.innerHTML = "Imię";
    firma.innerHTML = "Nazwa firmy";
    email.innerHTML = "Adres e-mail";
    telefon.innerHTML = "Numer telefonu";
    owoc.innerHTML = "Ulubiony owoc";

    
    for(let osoba of data){
        let nowyW = tabela.insertRow();
        let imie = nowyW.insertCell(0);
        let firma = nowyW.insertCell(1);
        let email = nowyW.insertCell(2);
        let telefon = nowyW.insertCell(3);
        let owoc = nowyW.insertCell(4);

        imie.innerHTML = osoba.name;
        firma.innerHTML = osoba.company;
        email.innerHTML = osoba.email;
        telefon.innerHTML = osoba.phone;
        owoc.innerHTML = osoba.favoriteFruit;

        // for(let kolumna in tabela){
        //   let komorka = nowyWiersz.insertCell(kolumna);
        //   komorka.innerHTML = tabela[kolumna];
        //   return nowyWiersz
        // }

        // osoba.innerHTML = nowyWiersz;
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