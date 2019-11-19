$(document).ready(function() {
    var navBarHeight = $(".navbar").outerHeight();
    $(".nav-link").click(function(){
        var linkHref = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - navBarHeight
        }, 3000);
    })


});

'use strict';
(function ($) {
    
}