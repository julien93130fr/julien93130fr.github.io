(function () {
     // Sélectionne tous les éléments avec la classe "control" et ajoute un écouteur d'événement à chacun
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            // Supprime la classe "active-btn" de l'élément ayant déjà la classe "active-btn"
            document.querySelector(".active-btn").classList.remove("active-btn");
            // Ajoute la classe "active-btn" à l'élément sur lequel on a cliqué
            this.classList.add("active-btn");
            // Supprime la classe "active" de l'élément ayant déjà la classe "active"
            document.querySelector(".active").classList.remove("active");
            // Ajoute la classe "active" à l'élément correspondant à l'identifiant spécifié dans l'attribut "data-id" du bouton cliqué
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // Ajoute un écouteur d'événement au bouton avec la classe "theme-btn"
    document.querySelector(".theme-btn").addEventListener("click", () => {
        // Bascule la classe "light-mode" sur l'élément "body"
        document.body.classList.toggle("light-mode");
    })
})();






          
            
          
       

