function (){
    let kontakt = document.getElementById("kontakt");
    let artykul1 = document.getElementById("art1");
    let artykul2 = document.getElementById("art2");
    let kon = document.getElementById("kon");

    
        kontakt.style.display = "block"; 
        artykul1.style.display = "none";
        artykul2.style.display = "none";
    
        kon.style.border = "2px dashed #228822";
        a1.style.border = "2px dashed black";
        a2.style.border = "2px dashed black";
}

function artykul1(){
    let kontakt = document.getElementById("kontakt");
    let artykul1 = document.getElementById("art1");
    let artykul2 = document.getElementById("art2");

        kontakt.style.display = "none";
        artykul1.style.display = "block";
        artykul2.style.display = "none";

        a1.style.border = "2px dashed #228822";
        kon.style.border = "2px dashed black";
        a2.style.border = "2px dashed black";
}

function artykul2(){
    let kontakt = document.getElementById("kontakt");
    let artykul1 = document.getElementById("art1");
    let artykul2 = document.getElementById("art2");

    kontakt.style.display = "none";
    artykul1.style.display = "none";
    artykul2.style.display = "block";

    a2.style.border = "2px dashed #228822";
    a1.style.border = "2px dashed black";
    kon.style.border = "2px dashed black";
}
