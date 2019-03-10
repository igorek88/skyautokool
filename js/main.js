$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }  
})
    

    
    
    
    

    //    Groups Block

$('.visible-info').on('click', function(){
    $('.invisible-info').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
    

    $(this).find('.icon').toggleClass('icon-minus');
    $('.visible-info .icon').not($(this).find('.icon')).removeClass('icon-minus');    
});

    
    
    
    
   //  Navigation 
    
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        
        id_element = $(this).attr('href');
        var top = $(id_element).offset().top;
        $('html, body').animate({scrollTop:top},1000);
    });
  });


