
$(window).load(function(){
	/* Drodow menu */
	$('.dropdown-toggle').dropdown();
	
	/*---------- Carousel --*/
	$('.carousel-brand').carousel({
		interval: 8000
	});
	$('.carousel-brand1').carousel({
		interval: 8000
	});
	
	/* tooltip */
	$('.bnt-tooltip').tooltip('show');
	$('.bnt-tooltip').tooltip('hide');
	
	/* cbpScroller */
	new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );
	
});
$(window).ready( function(){
	
	$(window).scroll(function() {
		if($(window).scrollTop() != 0) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
		});
	$('.back-to-top').click(function() {
		$('html, body').animate({scrollTop:0},500);
	});

     /* automatic keep header always displaying on top */
    /* automatic keep header always displaying on top */
    if( $("body").hasClass("keep-header") ){
         $("#header").addClass( "navbar navbar-fixed-top" );
        var hideheight =  $("#header").height() + 150; 
        $(window).scroll(function() {
            var pos = $(window).scrollTop();
            if( pos >= hideheight ){
                $("#header").addClass('header-block');
            }else {
                $("#header").removeClass('header-block');
            } 

        });
    }
	/* Menu current */
	$('#nav').onePageNav({
		begin: function() {
		console.log('start');
		},
		end: function() {
		console.log('stop');
		},
		scrollOffset: 30
	});
		
} );
