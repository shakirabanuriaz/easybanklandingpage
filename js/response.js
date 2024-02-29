const mobileView=document.getElementById('nav-btn');
const navMenu=document.getElementById('navbarDiv');
const toggleButton=document.getElementById('navMobile');


mobileView.addEventListener('click',()=>{

    navMenu.classList.toggle('active');
        if(navMenu.classList.contains('active')){
        toggleButton.src='images/icon-close.svg';

    }else{
        toggleButton.src='images/icon-hamburger.svg';

        }
    });


   