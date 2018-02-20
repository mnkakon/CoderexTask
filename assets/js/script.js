
$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

});
