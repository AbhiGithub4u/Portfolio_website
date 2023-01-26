
let ham = document.getElementById("hamburger")
let navbars = document.getElementById("navigation")

ham.addEventListener('click', () => {
    navbars.classList.toggle('show')

});

window.onscroll=()=>{
    navbars.classList.remove("show")


};
