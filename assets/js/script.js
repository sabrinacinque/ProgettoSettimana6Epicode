//SCRIPT PER PAGINA INDEX.HTML

document.addEventListener('DOMContentLoaded', function () {
    var searchIcon = document.getElementById('searchIcon');
    var searchInputWrapper = document.getElementById('searchInputWrapper');
    searchIcon.addEventListener('click', function () {
        searchInputWrapper.classList.toggle('d-none');
    });
});


//funzione per cambiare l'immagine in base al profilo su cui mi trov(avatar, in alto a destra, profili Giovanni e Sabrina)
function changeAvatar(src) {
    var currentSrc = document.getElementById('avatarImage').src;
    if (currentSrc === src) {
        return; // Non fare nulla se il percorso dell'immagine è già quello desiderato
    }
    document.getElementById('avatarImage').src = src;
}



//SCRIPT PER PAGINA EDITPROFILE.HTML

const home = function() {
    const buttonHome = document.getElementById("home");
    buttonHome.addEventListener('click', () => {
    window.location.href = "index.html";
    });
  };
  home();


  //funzione per cambiare l'immagine dell'avatar
  function loadImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

   reader.onload = function() {
    const imgDataUrl = reader.result;
    document.getElementById("avatar").src = imgDataUrl;
  };
  reader.readAsDataURL(file);
}