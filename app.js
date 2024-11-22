
const menuIcon = document.getElementById('menu-icon');
const navbarLinks = document.querySelector('.navbar__s2');

menuIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

var slider=document.querySelector(".slider-container")
var leftbutton=document.querySelector(".slider-left-button")
var rightbutton=document.querySelector(".slider-right-button")
var margin=0;

rightbutton.addEventListener("click",function(){
    margin = margin +100
    if(margin>200){
        margin=0
    }
    slider.style.marginLeft = "-" +margin+ "vw"
})

leftbutton.addEventListener("click",function(){
    margin = margin -100
    if(margin<100){
        margin=200
        
    }
    slider.style.marginLeft = "-" +margin+ "vw"

})