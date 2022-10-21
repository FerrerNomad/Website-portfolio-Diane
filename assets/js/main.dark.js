/*--preloader--*/
$(window).on("load", function() {
    /*---------preloader------*/
    $(".preloader").fadeOut("slow");
});
$(document).ready(function() {
    /*------Navbar shrink--------*/
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /*------video popup--------*/
    const videoSrc = $("player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function() {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src", videoSrc)
            }
        }
    });

    /*------services features---*/
    $('.services-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 8,
            },
            770: {
                items: 8,
            },
            1200: {
                items: 8,
            },
        }
    });
// Porfolio Slider
$('.portfolio-slider').owlCarousel({
  loop:true,
  nav:true,
  dots: false,
  smartSpeed: 1000,
  margin: 24,
  navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      992:{
          items:3
      }
  }
})
 /*------Testimonials carousel-------*/
 $('.testimonials-carousel').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
      },
      600: {
          items: 2,
      },
      1000: {
          items: 3,
      }
  }
});
    /*-----Blog carousel-------*/
    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    /*------Page Scrolling-------*/
    $.scrollIt({
        topOffset: -50
    });
    /*------Navbar collapse------*/
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });
    /*------Toggle theme light and dark------*/
    function toggleTheme() {
        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click", function() {
        $("body").toggleClass("dark")
        if ($("body").hasClass("dark")) {
            localStorage.setItem("shala-theme", "dark");
        } else {
            localStorage.setItem("shala-theme", "light");
        }
        updateIcon();
    });

    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $("toggle-theme i").removeClass("fa-moon");
            $("toggle-theme i").addClass("fa-sun");
        } else {
            $("toggle-theme i").removeClass("fa-sun");
            $("toggle-theme i").addClass("fa-moon");
        }
    }

});
// New Carrousel projects
$('#projects-carousel1').owlCarousel({
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// New Carrousel projects
$('#projects-carousel2').owlCarousel({
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// New Carrousel projects
$('#projects-carousel3').owlCarousel({
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// New Carrousel projects
$('#projects-carousel4').owlCarousel({
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// New Carrousel projects
$('#projects-carousel5').owlCarousel({
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// New Carrousel projects
$('#projects-carousel6').owlCarousel({
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// New Carrousel projects
$('#projects-carousel7').owlCarousel({
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// New Carrousel projects
$('#projects-carousel8').owlCarousel({
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
/*------carousel skills---*/
$('.skills-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 5,
        },
        680: {
            items: 5,
        },
        900: {
            items: 9,
        },
        1200: {
            items: 12,
        },
        1201: {
            items: 15,
        }

    }
});
/*------carousel services---*/
$('.features-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        550: {
            items: 2,
        },
        991: {
            items: 3,
        },
        1210: {
            items: 4,
        },
    }
});
/*------carousel services---*/
$('.resume-skills-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 5,
        },
        550: {
            items: 5,
        },
        991: {
            items: 5,
        },
        1210: {
            items: 5,
        },
    }
});

function iniciarMap() {
    var coord = { lat: -34.5956145, lng: -58.4431949 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
/*--Menu sidebar btn function--*/
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');
for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    const mobileMenuCloseFunc = function() {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }
    mobileMenuOpenBtn[i].addEventListener('click', function() {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    });
    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
}
/*--Button up footer--*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.my_bttn').fadeIn(250);
        } else {
            $('.my_bttn').fadeOut(250);
        }
    });
    $('.my_bttn').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 400);
    });
});
/*--audio blog button--*/
var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause ⏸";
    } else {
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play ►";
    }

}

function stop() {
    playPause()
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play ►";
}
/*--share button--*/
const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

    // Check for Web Share api support
    if (navigator.share) {
        // Browser supports native share api
        navigator.share({
                text: 'Please read this great article: ',
                url: 'https://www.google.com/'
            }).then(() => {
                console.log('Thanks for sharing!');
            })
            .catch((err) => console.error(err));
    } else {
        // Fallback
        alert("The current browser does not support the share function. Please, manually share the link")
    }
});
/*--text typing start--*/
$(document).ready(function() {
    $(document).ready(function() {
        $(window).scroll(function() {
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
            if (this.scrollY > 500) {
                $('.scroll-up-btn').addClass("show");
            } else {
                $('.scroll-up-btn').removeClass("show");
            }
        });
        $('.scroll-up-btn').click(function() {
            $('html').animate({
                scrollTop: 0
            });
        });


        var typed = new Typed(".typing", {
            strings: ["Developer", "Freelancer", "Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })

    });
});