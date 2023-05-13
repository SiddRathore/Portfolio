let scrollerDiv = document.querySelector('#scrollDiv');
let footer = document.querySelector('.footer');


scrollerDiv.addEventListener('click', () => {

    if (window.scrollY < 400) {
        window.scrollBy(0, 400)
    }
});

let bgLeft = document.querySelector('.bg-left')

window.onscroll = function(){
    if (window.scrollY < 590){
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(0deg)';
    }
    else if(window.scrollY < 990){
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(180deg)';
    }
    else if(window.scrollY < 1240){
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(90deg)';
    }
    else if(window.scrollY < 1570){
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(240deg)';
    }
    else{
        bgLeft.style.filter = 'saturate(1.5) hue-rotate(45deg)';
    }
}

