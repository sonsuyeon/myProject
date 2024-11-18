document.addEventListener("DOMContentLoaded", function () {
    noticeWrap(); // notice_wrap
    featured__siwperGif1();
    featured__siwperGif2();
    watch_mainSwiper(); // 240613_여성시계기획전
    m_watch_item_swiper();
});

function noticeWrap() {
    const noticeWrap = $(".notice-wrap");
    noticeWrap.find(".tle").click(function () {
        if ($(this).hasClass("close")) {
            $(this).removeClass("close").addClass("open");
            $(this).parent().parent().find(".content-wrap").slideDown(200);
            return false;
        } else {
            $(this).removeClass("open").addClass("close");
            $(this).parent().parent().find(".content-wrap").slideUp(200);
            return false;
        }
    });
}
function featured__siwperGif1() {
    var swiper = new Swiper(".featured__siwper--gif1", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        // autoplay: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 500,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".swiper_btn-next",
            prevEl: ".swiper_btn-prev",
        },
        on: {
            slideChange: function () {
                // 슬라이드가 변경될 때마다 opacity를 수동으로 조정
                var slides = document.querySelectorAll(".swiper-slide");
                slides.forEach((slide) => {
                    slide.style.opacity = 0;
                });
                // 현재 활성화된 슬라이드의 opacity를 1로 설정
                slides[swiper.activeIndex].style.opacity = 1;
            },
        },
    });
}
function featured__siwperGif2() {
    var swiper = new Swiper(".featured__siwper--gif2", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        autoplay: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 500,
        observer: true,
        observeParents: true,
        on: {
            slideChange: function () {
                // 슬라이드가 변경될 때마다 opacity를 수동으로 조정
                var slides = document.querySelectorAll(".swiper-slide");
                slides.forEach((slide) => {
                    slide.style.opacity = 0;
                });
                // 현재 활성화된 슬라이드의 opacity를 1로 설정
                slides[swiper.activeIndex].style.opacity = 1;
            },
        },
    });
}
function watch_mainSwiper() {
    var bar = document.querySelector(".watch_progressbar__active");
    var speed = 4000;

    window.onload = function () {
        const swiper = new Swiper(".watch_mainSwiper", {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            on: {
                slideChangeTransitionStart: function () {
                    (bar.style.transitionDuration = "0s"), (bar.style.transform = "scaleX(0)");
                },
                slideChangeTransitionEnd: function () {
                    (bar.style.transitionDuration = speed + "ms"), (bar.style.transform = "scaleX(1)");
                },
            },
            effect: "fade",
        });
    };
}
function m_watch_item_swiper() {
    var swiper = new Swiper(".m_watch_item_swiper", {
        spaceBetween: 17,
        slidesPerView: 1,
        centeredSlides: false,
        loop: false,
        loopAdditionalSlides: 1,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true,
    });
}
