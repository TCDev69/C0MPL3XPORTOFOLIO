window.addEventListener('load', e =>{
    const loader= document.getElementById('loading-wrapper');
    loader.style.display = 'none';
});

//header scroll
let header = document.querySelector('header');
        let scrollPrevious = window.pageYOffset;
        window.onscroll = function(){
            let scrollCurrent = window.pageYOffset;
            if(scrollPrevious > scrollCurrent){
                header.style.top = "0px";
            }
            else{
                header.style.top = "-90px";
            }
            scrollPrevious = scrollCurrent;
        }

//reveal
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals =document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
         var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
};