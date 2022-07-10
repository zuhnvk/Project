(function($) {
    'use strict';
	
	// Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    });	
    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
    // Script
    $(".dropdown-icon").click(function(){
        $(this).siblings(".dropdown-content1").toggleClass('active');
    });
	 // Slider Active
    $('.seller_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='flaticon-back''></i>", "<i class='flaticon-next''></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            },
            1000: {
                items: 8
            },
			 1500: {
                items: 8
            },
            1920: {
                items: 8
            }
        }
    })
    // Slider Active
    $('.sale_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: true,
        nav: false,
        navText: ["<i class='flaticon-back''></i>", "<i class='flaticon-next''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
             1500: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })	
	//Header Search
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}
	
	/*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();
	
    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });	
    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });
	
	// Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });


	/*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })
})(jQuery);