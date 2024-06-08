function changeLogoOnHover() {
    const logo = document.getElementById('site-logo');
    const logoImg = document.querySelector('#site-logo img');
    const originalimg = logoImg.src;
    const hoverimg = "images/4.png";

    logo.addEventListener('mouseover', function(){
        logoImg.src = hoverimg;
    });
    logo.addEventListener('mouseout', function() {
        logoImg.src = originalimg;
    });
}

changeLogoOnHover()
let popup = document.getElementById("signup-popup");


function openPopup(event){

    if (event.target.classList.contains('submitbtn')) {
        popup.classList.add("open-popup");
        if (event.target.textContent === "Create Account") {
            const nameInput = document.getElementById("name").value;
            const popupTitle = document.querySelector(".signup-popup h2");
            if (popupTitle && nameInput){
                popupTitle.textContent = `Welcome, ${nameInput}!`;
            }
        }
    }

}

function closePopup(){
    const popup = document.getElementById("signup-popup");
    popup.classList.remove("open-popup");
    window.location.href = "index.html"
}

document.querySelector('.login-signup-container').addEventListener("click", openPopup)
