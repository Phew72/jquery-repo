// Import '$' symbol for jQuery into the self-invoking anonymous function.
(function($) {
    
    var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
        imgs = sliderUL.find('img'),
        imgWidth = imgs[0].width,  // 600
        imgsLen = imgs.length,  // 4
        current = 1,
        totalImgsWidth = imgsLen * imgWidth;  //2400
    
    $('#slider-nav').show().find('button').on('click', function() {
        console.log('clicked');
    });
    
    
})(jQuery);
// NOTE: Remember to include "jQuery" here to complete importing.