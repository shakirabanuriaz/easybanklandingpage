const mobileView=document.getElementById('bar');
const navMenu=document.getElementById('navbarNav');
const toggleButton=document.getElementById('navMobile');


mobileView.addEventListener('click',()=>{

    navMenu.classList.toggle('active');
    console.log("test");
    if(navMenu.classList.contains('active')){
        toggleButton.src='images/icon-close.svg';

    }else{
        toggleButton.src='images/icon-hamburger.svg';

        }
    });


   