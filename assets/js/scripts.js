/*
Template Name: WPPOOL
Template URI: https://www.WPPOOL.com/
Author: UPPOOL
Author URI: https://www.WPPOOL.com/
Version: 1.0.0
Text Domain: WPPOOL
Tags: sofware company, techcompany, agency
*/

(function($) {
	'use strict'; 

	// NICE SELECT
	$('#selector').niceSelect();
	$('#selector-type').niceSelect(); 


	AOS.init();

 
	// loader
	$(window).on( "load", function() {
		$('.preloader').fadeOut(1000);
	});
 
	new Swiper(".home_banner_slider", {
		// loop: true,
		// speed: 2000,
		// effect: "fade",
		// autoplay: {
		// 	enabled: true,
		// 	delay: 3000,
		// },
		pagination: {
			el: ".swiper-pagination",
		},
		breakpoints: {
			1200: {
				slidesPerView: 1,
			},
			1199: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			} ,
			320: {
				slidesPerView: 1,
			} 
		},
	});

	/*END SWIPER JS*/	

 
	var fixed_top = $(".common_sticky_menu");
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			fixed_top.addClass("sticky-menu animated fadeInDown");
		} else {
			fixed_top.removeClass("sticky-menu animated fadeInDown");
		}
	});
	var m_fixed_top = $(".mobile_common_sticky_menu");
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			m_fixed_top.addClass("mobile-sticky-menu animated fadeInDown");
		} else {
			m_fixed_top.removeClass("mobile-sticky-menu animated fadeInDown");
		}
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').css({
				'bottom': '2%',
				'opacity': '1',
				'transition': 'all .5s ease'
			});
		} else {
			$('.scrollToTop').css({
				'bottom': '-30%',
				'opacity': '0',
				'transition': 'all .5s ease'
			})
		}
	});

	//Click event to scroll to top
	$('a.scrollToTop').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	 

	$(document).ready(function(){
		$(".header-item-right span").click(function(){
		$(".header-item-right").toggleClass("bar_open");
			$(".header-bottom").toggleClass("open");
		});
	});
		
	$(".header-menu ul li ul").parent("li").addClass("m");
	$('.header-menu ul li a').on('click', function(e) {
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp("swing");
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown("swing");
			element.siblings('li').children('ul').slideUp("swing");
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp("swing");
		}
	});		

})(jQuery);


