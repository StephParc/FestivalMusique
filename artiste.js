const boutonArtistes = document.querySelector(".listeArtistes");
const aside = document.getElementsByTagName("aside");

boutonArtistes.addEventListener("click", function () {
    if (aside[0].style.display === "none") {
        aside[0].style.display = "block";
    } else {
        aside[0].style.display = "none";
    }
});

