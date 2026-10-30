jQuery(document).ready(function($) {

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Set height on load
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    $(".cinza-slider").css({ 'height' : 'auto', 'overflow' : 'visible', 'opacity' : '1' });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Fix: Flickity stops autoPlay permanently on any click/tap (via its internal pointerDown
    // listener), regardless of the pauseAutoPlayOnHover setting. For non-draggable sliders, that
    // listener only serves to pause on click/hover, so remove it when pauseAutoPlayOnHover is off.
    //
    // Flickity's own data-flickity auto-init also runs on DOMContentLoaded, via a listener
    // registered separately from jQuery's ready callback. Whichever registers first wins, so this
    // check can otherwise run before Flickity has instantiated the sliders (window.Flickity.data()
    // still undefined) on slower devices/connections. Deferring to the next tick lets that init
    // finish first regardless of listener order.
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    setTimeout(function() {
        $(".cinza-slider[data-flickity]").each(function() {
            var flkty = window.Flickity && window.Flickity.data(this);

            if ( flkty && flkty.options.autoPlay && !flkty.options.pauseAutoPlayOnHover && !flkty.options.draggable ) {
                flkty.off('pointerDown', window.Flickity.prototype.stopPlayer);
            }
        });
    }, 0);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Accessibility improvements
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
	$('.cinza-slider.rfAccessibility').each(function() {
		var $this = $(this);

	    if ( $(this).attr('data-flickity').includes('"prevNextButtons": true') ) {
		    // First, we check of the arrows are enabled
		    // If they are, we will focus on them and ignore the dots
	        $this.find(".flickity-prev-next-button").attr('tabindex', 0);
	        $this.find(".flickity-prev-next-button").addClass('focusable');
	        $this.find(".flickity-page-dots").attr('tabindex', -1);    
	    }
	    else if ( $(this).attr('data-flickity').includes('"pageDots": true') ) {
		    // Second, since the arrows are disabled, we check if the dots are enabled
		    // If they are, we will focus on them
	        $this.find(".flickity-page-dots").attr('tabindex', 0);
	        $this.find(".flickity-page-dots").addClass('focusable');
	    }
	});
	
    // Either way, we want to ignore the link from cells that are not active
	$(".slider-cell:not(.is-selected) .slider-cell-content-inner a").attr('tabindex', -1);
	$(".slider-cell:not(.is-selected) a.slider-cell-link").attr('tabindex', -1);
	$(".slider-cell.is-selected .slider-cell-content-inner a").attr('tabindex', 0);
	$(".slider-cell.is-selected a.slider-cell-link").attr('tabindex', 0);
					
	$(".cinza-slider *").click(function() {
		$(".slider-cell:not(.is-selected) .slider-cell-content-inner a").attr('tabindex', -1);
		$(".slider-cell:not(.is-selected) a.slider-cell-link").attr('tabindex', -1);
		$(".slider-cell.is-selected .slider-cell-content-inner a").attr('tabindex', 0);
		$(".slider-cell.is-selected a.slider-cell-link").attr('tabindex', 0);
	});
	
	$(".cinza-slider").keydown(function() {
		$(".slider-cell:not(.is-selected) .slider-cell-content-inner a").attr('tabindex', -1);
		$(".slider-cell:not(.is-selected) a.slider-cell-link").attr('tabindex', -1);
		$(".slider-cell.is-selected .slider-cell-content-inner a").attr('tabindex', 0);
		$(".slider-cell.is-selected a.slider-cell-link").attr('tabindex', 0);
	});	


});