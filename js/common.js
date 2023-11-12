"use strict";
$(function() {
	var e = $(".pageTop");
	e.hide(), $(window).scroll(function() {
		300 < $(this).scrollTop() ? e.fadeIn() : e.fadeOut()
	}), e.click(function() {
		return $("body,html").animate({
			scrollTop: 0
		}, 350), !1
	}), $(".nav-toggle").click(function() {
		$(this).toggleClass("opened"), $("#gnav").toggleClass("active")
	}), $("#gnav ul.navi li a").click(function() {
		$(".nav-toggle").toggleClass("opened"), $("#gnav").toggleClass("active")
	}), $('a[href*="#"]').click(function() {
		var e = $("#" === this.hash ? "html" : this.hash);
		if (e.length) return e = e.offset().top, $("html, body").animate({
			scrollTop: e
		}, 400, "swing"), !1
	}), new Swiper(".swiper1", {
		scrollbar: {
			el: ".swiper-scrollbar",
			dragSize: 150,
			draggable: !0
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		spaceBetween: 20,
		slidesPerView: 1.2,
		breakpoints: {
			768: {
				spaceBetween: 60,
				slidesPerView: 2.2,
				scrollbar: {
					dragSize: 300
				}
			}
		}
	}), new Swiper(".swiper2", {
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: !0,
			dragSize: 150
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		spaceBetween: 20,
		slidesPerView: 1.4,
		breakpoints: {
			768: {
				spaceBetween: 30,
				slidesPerView: 3.2,
				scrollbar: {
					dragSize: 300
				}
			}
		}
	}), new Swiper(".swiper3", {
		scrollbar: {
			el: ".swiper-scrollbar",
			dragSize: 150,
			draggable: !0
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		spaceBetween: 20,
		slidesPerView: 1.2,
		breakpoints: {
			768: {
				spaceBetween: 60,
				slidesPerView: 2.2,
				scrollbar: {
					dragSize: 300
				}
			}
		}
	}), new Swiper(".pr-swiper1", {
		spaceBetween: 20,
		slidesPerView: 1.1,
		loop: !0,
		centeredSlides: !0,
		pagination: {
			el: ".swiper-pagination",
			clickable: !0
		},
		breakpoints: {
			768: {
				spaceBetween: 80,
				slidesPerView: 1.1
			}
		}
	}), new Swiper(".pr-swiper2", {
		spaceBetween: 20,
		slidesPerView: 1.4,
		loop: !0,
		breakpoints: {
			768: {
				spaceBetween: 45,
				slidesPerView: 2.9
			}
		}
	});
	$(".js-hamburger, .drawer__menu").on("click", function() {
		$(".js-drawer").toggleClass("is-active")
	}), $(".js-hamburger, .drawer__menu").on("click", function() {
		$(".js-drawer").hasClass("is-active") ? ($(".js-hamburger").addClass("is-open"), $(".js-hamburger").removeClass("is-close"), $(".js-hamburger").addClass("is-moving"), gsap.fromTo(".js-main", {
			y: 0
		}, {
			y: -100,
			duration: .9
		})) : ($(".js-drawer").addClass("is-close"), $(".js-hamburger").addClass("is-close"), $(".js-hamburger").removeClass("is-open"), $(".js-hamburger").addClass("is-moving"), setTimeout(function() {
			$(".js-drawer").removeClass("is-close")
		}, 800), gsap.fromTo(".js-main", {
			y: 100
		}, {
			y: 0,
			duration: .9
		})), setTimeout(function() {
			$(".js-hamburger").removeClass("is-moving")
		}, 1600)
	}), $(window).on("scroll", function() {
		var e = $(window).height(),
			s = $(window).scrollTop();
		$("[data-animation]").each(function() {
			$(this).offset().top - e + 50 < s && $(this).addClass("is-fade")
		})
	}), $(".js-sidebar").on("click", function() {
		$(this).hasClass("is-open") ? $(this).removeClass("is-open") : $(this).addClass("is-open")
	}), document.querySelectorAll(".js-parallax").forEach(function(e) {
		gsap.fromTo(e.querySelector("img"), {
			y: 0
		}, {
			y: -10,
			ease: "none",
			scrollTrigger: {
				trigger: e,
				start: "top bottom",
				end: "bottom top",
				scrub: .5
			}
		})
	}), gsap.utils.toArray(".js-scroll-x").forEach(function(e) {
		gsap.fromTo(e, {
			x: 0
		}, {
			x: -250,
			delay: .2,
			scrollTrigger: {
				trigger: e,
				start: "top bottom",
				end: "bottom top",
				scrub: .5
			}
		})
	});
	gsap.utils.toArray(".js-fadeIn").forEach(function(e) {
		gsap.fromTo(e, {
			yPercent: 100
		}, {
			yPercent: 0,
			delay: .2,
			duration: 1,
			ease: Expo.easeOut,
			scrollTrigger: {
				trigger: e,
				start: "top bottom"
			}
		})
	});
	var s = ".js-loading-bg",
		a = ".js-loading-ttl",
		r = gsap.utils.toArray(".js-loading-text"),
		t = (gsap.set(s, {
			yPercent: 0,
			autoAlpha: 1
		}), gsap.set(a, {
			yPercent: 120,
			autoAlpha: 0
		}), gsap.set(r, {
			yPercent: 130
		}), gsap.timeline());
	t.to(a, {
		yPercent: 0,
		duration: 1.2,
		delay: .5,
		autoAlpha: 1,
		ease: Expo.easeOut
	}), t.to(s, {
		yPercent: -100,
		autoAlpha: 0,
		duration: .8,
		delay: .3,
		stagger: {
			amount: .3
		}
	}), t.to(a, {
		autoAlpha: 0,
		duration: 1,
		zIndex: -9999
	}, "-=1"), t.to(r, {
		yPercent: 0,
		duration: 1.5,
		ease: Expo.easeOut,
		stagger: {
			amount: 1
		}
	}), t.to(".top-loading__ttl", {
		zIndex: -9999
	})
});