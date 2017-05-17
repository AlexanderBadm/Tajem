$(document).ready(function(){
    $("#toogler").click(function(){
        $("#list-toogler").toggle(1000);
    });
});

$('#bxslider-main-block').bxSlider({
    speed:1000
});


$('#bxslider-social-block').bxSlider({
    speed:1000,
    startSlide:2,
    maxSlides:1,
    controls:true,
    nextText:true


});

