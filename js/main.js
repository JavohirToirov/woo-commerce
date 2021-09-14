$(function () {
    $('.button').click(function () {
        $('.header__menu_box_block').toggleClass('active');
    })
    $('.header__menu_box_block_icon ').click(function () {
        $('.header__menu_box_block').toggleClass('active');
    })
    $(window).resize(function () {
        if ($(window).width() < 600) {
            $('.header__menu_box_block').removeClass('active');
        }
    })

    class tabs {
        constructor(tab) {
            $(tab).find('.header__fon_text_button_knopka').click(function () {
                $(tab).find('.header__fon_text_button_knopka').removeClass('active').eq($(this).index()).addClass('active');
            })
        }
    }

    let wrap = $('.header__fon_text');
    for (let i of wrap) {
        i = new tabs(i);
    }

    $('.icon__next').on('click', function () {
        $('.icon__next_btn').show(500);
    })

    $('.icon__start').on('click', function () {
        $('.icon__next_btn').hide(500);
    })
})

const btn__right = document.querySelector('.btn__right');
const btn__left = document.querySelector('.btn__left');
const box = document.querySelectorAll('.box');
const slider = document.querySelector('.section__slider-block');
let i = 0;

btn__right.addEventListener('click', function () {
    box[i].classList.remove('active');
    i++;
    if (i >= box.length) {
        i = 0;
    }
    box[i].classList.add('active');
})

btn__left.addEventListener('click', function () {
    box[i].classList.remove('active');
    i--;
    if (i < 0) {
        i = box.length - 1;
    }
    box[i].classList.add('active');
})

// function sliderNext() {
//     box[i].classList.remove('active');
//     i++
//     if (i >= box.length) {
//         i = 0;
//     }
//     box[i].classList.add('active');
// }

// function start() {
//     return interval = setInterval(sliderNext, 2000);
// }
// start();

// function stop() {
//     clearInterval(interval);
// }

// slider.onmouseover = function () {
//     stop();
// }

// slider.onmouseout = function () {
//     start();
// }