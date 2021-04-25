const slider = document.querySelector('.hero__container');
const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.editions__container');
const slider3 = document.querySelector('.projects__container');
const slider4 = document.querySelector('.events__swiper');

let swiper = new Swiper(slider, {
    loop: true,

    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
})



let swiper1 = new Swiper(slider1, {
    loop: true,
    autoHeight: false,
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 3,

    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        // },
        // when window width is >= 480px
        // 480: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        // },
        // when window width is >= 640px
        // 640: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        // },
        1: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
        },
        320: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            pagination: {
                el: '.gallery__pagination',
                type: 'custom',
                renderCustom: function(swiper1, current, total) {
                    return current + ' / ' + total;
                }
            }
        },
        768: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 27,
        },
        1024: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 32,
            pagination: {
                el: '.gallery__pagination',
                type: 'custom',
                renderCustom: function(swiper1, current, total) {
                    return current + ' / ' + ((total + 1) / 2);
                }
            }
        },
        1500: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            slidesPerGroup: 3,
        }
    },

    spaceBetween: 42,

    pagination: {
        el: '.gallery__pagination',
        type: 'custom',
        renderCustom: function(swiper1, current, total) {
            return current + ' / ' + ('' + total / 2).slice(-2);
        }
    },

    navigation: {
        nextEl: '.gallery__btn-next',
        prevEl: '.gallery__btn-prev',
    },
});


let swiper2 = new Swiper(slider2, {
    loop: true,
    autoHeight: false,
    slidesPerView: 3,
    slidesPerGroup: 1,

    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerColumn: 4,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 42,
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 48,
        }
    },

    spaceBetween: 48,

    pagination: {
        el: '.editions__pagination',
        type: 'custom',
        renderCustom: function(swiper2, current, total) {
            return current + ' / ' + total;
        }
    },

    navigation: {
        nextEl: '.editions__btn-next',
        prevEl: '.editions__btn-prev',
    },
});

let swiper3 = new Swiper(slider3, {
    loop: true,
    autoHeight: false,
    slidesPerView: 3,
    slidesPerGroup: 1,

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 32,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 42,
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        }
    },

    spaceBetween: 40,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let swiper4 = new Swiper(slider4, {
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
    },
});