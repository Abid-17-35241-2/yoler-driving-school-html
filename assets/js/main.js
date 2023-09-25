(function ($) {
  "use strict";

  // mobile dropdown

  jQuery(".dropdown-icon").on("click", function () {
    // alert()
    // $(this).next('.mob-submenu').slideToggle();
    jQuery(this).toggleClass("active").next("ul, .mega-menu, .mega-menu2").slideToggle();
    jQuery(this).parent().siblings().children("ul, .mega-menu, .mega-menu2").slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });
  // sticky header

  window.addEventListener('scroll', function () {
    const header = document.querySelector('header.header-area');
    header.classList.toggle("sticky", window.scrollY > 0);
  });
 
  

  var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".testi-next-btn",
      prevEl: ".testi-prev-btn",
    },
  });
  var swiper = new Swiper(".driving-courses-slider", {
    spaceBetween: 25,
    speed: 1500,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".driving-courses-next-btn",
      prevEl: ".driving-courses-prev-btn",
    },
    breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3
			},
		}
  });
  var swiper = new Swiper(".driving-instructors-slider", {
    spaceBetween: 25,
    speed: 1500,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".driving-instructors-next-btn",
      prevEl: ".driving-instructors-prev-btn",
    },
    breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3
			},
		}
  });
  var swiper = new Swiper(".blogs-articles-slider", {
    spaceBetween: 25,
    speed: 1500,
    loop: true,
    // autoplay: true,
    navigation: {
      nextEl: ".blogs-articles-next-btn",
      prevEl: ".blogs-articles-prev-btn",
    },
    breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3
			},
		}
  });
  var swiper = new Swiper(".book-lesson-slider", {
    spaceBetween: 25,
    speed: 1500,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".book-lesson-next-btn",
      prevEl: ".book-lesson-prev-btn",
    },
    breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3
			},
		}
  });
  var swiper = new Swiper(".purpose-test-slider", {
    spaceBetween: 25,
	slidesPerView: 1,
	speed: 1500,
    loop: true,
    navigation: {
      nextEl: ".purpose-test-next-btn",
      prevEl: ".purpose-test-prev-btn",
    },
  });

    //admin-dropdown-menu
    $(".admin-area").on("click", function (e) {
      e.stopPropagation();
      $(".admin-dropdown-menu").toggleClass("active");
    });
    $(document).on("click", function (e) {
      if (!$(e.target).closest(".admin-dropdown-menu, .admin-area").length) {
        $(".admin-dropdown-menu").removeClass("active");
      }
    });
 /// active sidebar item added active class
 
  $(".sidebar-button").click(function () {
    $(this).toggleClass("active");
  });
  document
    .querySelector(".sidebar-button")
    .addEventListener("click", () =>
      document
        .querySelector(".main-menu, .sidebar-menu")
        .classList.toggle("show-menu")
    );

  	 // password-hide and show
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
  if(togglePassword){
  togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
  });
  }
  // confirm-password
  const togglePassword2= document.getElementById('togglePassword2');
  const password2 = document.querySelector('#password2');
  if (togglePassword2){
  togglePassword2.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  password2.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
  });
  }

  $(".menu-close-btn").on("click", function () {
    $(".sidebar-menu").removeClass("show-menu");
  });
  // FancyBox Js
	
	  $('[data-fancybox="gallery"]').fancybox({});
})(jQuery);
