$(document).ready(function(){
    //hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin:0,
        nav: true,
        dots:false,
        navText : ["PREV","NEXT"],
        items:1,
        smartSpeed:1000,
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:true,
            }
        }
    })

//Project slider
    $('#project-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin:24,
    nav: true,
    navText:["PREV","NEXT"],
    dots:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:0,
        },
        768:{
            items:2,
        },
        1140:{
            items:3,
            center:true,
            dots:true,
        }
    }
    });
    $('#reviews-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    items:1,
    smartSpeed:800,
    });
});


let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    console.log(endValue);
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});