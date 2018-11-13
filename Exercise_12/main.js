$(document).ready(function(){
    mouseEvents();
    
    $(window).resize(function(){
        
    });
    
    $(window).scroll(function(){
        
    });
    
});

function mouseEvents(){
    $('.jqClick1').click(function() {
        $('.black1').toggleClass('tealBG');
    })
    $('.jqClick1').hover(function() {
        $(".basic1").toggleClass('teal');
    })
    $('.jqClick2').click(function() {
        $('.black2').toggleClass('indigoBG');
    })
    $('.jqClick2').hover(function() {
        $(".basic2").toggleClass('indigo');
    })
    $('.jqClick3').click(function() {
        $('.black3').toggleClass('blueBG');
    })
    $('.jqClick3').hover(function() {
        $(".basic3").toggleClass('blue');
    })
    $('.jqClick4').click(function() {
        $('.black4').toggleClass('purpleBG');
    })
    $('.jqClick4').hover(function() {
        $(".basic4").toggleClass('purple');
    })
    $('.jqClick5').click(function() {
        $('.black5').toggleClass('magentaBG');
    })
    $('.jqClick5').hover(function() {
        $(".basic5").toggleClass('magenta');
    })
    $('.jqClick6').click(function() {
        $('.black6').toggleClass('redBG');
    })
    $('.jqClick6').hover(function() {
        $(".basic6").toggleClass('red');
    })
    $('.jqClick7').click(function() {
        $('.black7').toggleClass('orangeBG');
    })
    $('.jqClick7').hover(function() {
        $(".basic7").toggleClass('orange');
    })
    $('.jqClick8').click(function() {
        $('.black8').toggleClass('goldBG');
    })
    $('.jqClick8').hover(function() {
        $(".basic8").toggleClass('gold');
    })
    $('jqDblClick').click(function(){
        $(".box").toggleClass('bigger');
        $('.black1').toggleClass('blackAll');
        $('.black2').toggleClass('blackAll');
        $('.black3').toggleClass('blackAll');
        $('.black4').toggleClass('blackAll');
        $('.black5').toggleClass('blackAll');
        $('.black6').toggleClass('blackAll');
        $('.black7').toggleClass('blackAll');
        $('.black8').toggleClass('blackAll');
        
    })
}