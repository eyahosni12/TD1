document.addEventListener('DOMContentLoaded', function(){
    let titre=document.querySelector('.hero h1');
    titre.textContent='DevDays 2026_edition';
    // let surtitre=document.querySelector(".surtitre");
    surtitre.style.color="#fff";
    cartes=document.querySelectorAll(".atelier");
    cartes.forEach((c) => {
        const h3 = c.querySelector("h3");
        if (h3 && h3.textContent.includes("javascript")){
            c.classList.add("populaire");
        }
        
    });
    let article=document.createElement("article");
    article.classList.add("atelier");
    document.querySelector(".ateliers").appendChild(article);
    btnsombre=document.querySelector("#btn-sombre");
    btnsombre.addEventListener("click",()=>{
        document.body.classList.toggle("sombre");
    });


})