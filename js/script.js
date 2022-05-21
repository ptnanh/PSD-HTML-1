$(document).ready(function(){
    $('#product_feature').owlCarousel({
        loop:true,//chạy lặp
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
    $('#btnMenu').click(function(){
        $('#menutop').slideToggle('fast');
        // alert("OK");
    });
});