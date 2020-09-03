//barra oculta
/*let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let Dezplazamiento_Actual = window.pageYOffset;
    if (ubicacionPrincipal >= Dezplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-100px';
    }
    ubicacionPrincipal = Dezplazamiento_Actual;
}*/
// menu 
let enlacesHeader = document.getElementById("nav-menu");
let boton = document.getElementById("boton");
let contador = 0;

boton.addEventListener("click",function(){
    if (contador == 0) {
        document.getElementById("boton").style.color = "#fff";
        enlacesHeader.className = ("menu dos");
        contador=1;
    }else{
        document.getElementById("boton").style.color = "#000";
        enlacesHeader.classList.remove('dos');
        enlacesHeader.className = ('menu uno');
        contador = 0;
    }
})
// busqueda de el menu
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-main a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav-main a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
// animacion de aparicion de informacion

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-1', {delay: 500});
ScrollReveal().reveal('.cards-banner-2', {delay: 500});