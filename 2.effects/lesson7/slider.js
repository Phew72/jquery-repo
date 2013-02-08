// Import '$' symbol for jQuery into the self-invoking anonymous function.
(function($) {
    
    var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
        imgs = sliderUL.find('img'),
        imgWidth = imgs[0].width,  // 600
        imgsLen = imgs.length,  // 4
        current = 1,
        totalImgsWidth = imgsLen * imgWidth;  //2400
    
    console.log('# of images: ' + imgsLen);
    
    $('#slider-nav').show().find('button').on('click', function() {
        var direction = $(this).data('dir'),
            loc = imgWidth;     // 600
        
        // Update current value
        ( direction === 'next' ) ? ++current : --current;
        
        //console.log(current);
        
        // If first image...
        if (current === 0) {
            current = imgsLen;
            loc = totalImgsWidth - imgWidth;
            direction = 'next';
        } else if ( current - 1 === imgsLen ) {   // Are we at end? Should we reset?
            current = 1;
            loc = 0;
        }
        
        // Call the animation function to slide the images.
        transition( sliderUL, loc, direction );
    });
    
    function transition ( container, loc, direction ) {
        var unit; // -= or +=
        
        //console.log(loc);
        
        if ( direction && loc !== 0 ) {
            unit = ( direction === 'next' ) ? '-=' : '+=';
        }
        
        container.animate({
            'margin-left': unit ? (unit + loc) : loc
        });
    }
    
})(jQuery);
// NOTE: Remember to include "jQuery" here to complete importing.