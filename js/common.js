$(document).ready(function() {
    var menuSearch = $('.search-menu input');
    $('.search-menu').click(function(){
        $(menuSearch).focus();
    });
    $(menuSearch).focus(function(){
        $(this).parent().addClass('active');
    });
    $(menuSearch).blur(function(){
        $(this).parent().removeClass('active');
    });

    var overlay1 = document.querySelector('.overlay-1');
    var overlay2 = document.querySelector('.overlay-2');
    var search = document.querySelector('.search');
    var input = document.querySelector('.input');
    overlay1.addEventListener('click', () => {
        search.classList.toggle('active');
        if (search.classList.contains('active')) {
            setTimeout(() => {
                input.focus();
            }, 200)
        }
    })
    search.addEventListener('click', () => {
        if (search.classList.contains('active')) {
            setTimeout(() => {
                input.focus();
            }, 200)
        }
    })
    overlay2.addEventListener('click', (e) => {
        input.value = '';
        input.focus();
        search.classList.remove('searching')
    })
    document.body.addEventListener('click', (e) => {
        if (!search.contains(e.target) && input.value.length === 0) {
            search.classList.remove('active');
            search.classList.remove('searching');
            input.value = '';
        }
    })
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            input.blur();
        }
    })
    input.addEventListener('input', () => {
        if (input.value.length > 0) {
            search.classList.add('searching')
        } else {
            search.classList.remove('searching')
        }
    })
    input.value = '';
    input.blur();

    // $(".hamburger").click(function() {
    //     $(this).toggleClass("is-active");
    // });

    // Mobile menu =============================================================
    $(function() {
        function burger() {
            $('.hidden-menu').toggleClass('nav-show');
        };
        $('.burger-main').click(function() {
            burger();
        });
        $('.close').click(function() {
            $('.hidden-menu').removeClass('nav-show');
        });
        $(window).resize(function() {
            var w = $(window).width();
            if (w >= 768) {
                $('.hidden-menu').removeAttr('style');
            }
        });
    });
    $('.hidden-menu_close').click(function(){
        $('.hidden-menu').removeClass('nav-show');
    });
    //
    // // send message ============================================================
    // $(".form-reserv").submit(function () {
    //     var inpFirst = $(this).find('.inp_first');
    //     var inpSecond = $(this).find('.inp_second');
    //     var inpFirstInner = $(this).find('.inp_first input');
    //     var inpSecondInner = $(this).find('.inp_second input');
    //
    //     var emptyFirst = false;
    //     var emptySecond = false;
    //
    //     if (inpFirstInner.val() == "") {
    //         emptyFirst = true;
    //     }
    //     if(inpSecondInner.val() == ""){
    //         var emptySecond = true;
    //     }
    //     if (emptyFirst == true) {
    //         inpFirst.addClass("error-input");
    //         inpFirstInner.focus();
    //     }
    //     if (emptySecond == true) {
    //         inpSecond.addClass("error-input");
    //         inpSecondInner.focus();
    //     }else{
    //         var form_data = $(this).serialize();
    //         $.ajax({
    //             type: "POST",
    //             url: "/sendmessage.php",
    //             data: form_data,
    //             success: function () {
    //                 cleanTnanks(this);
    //             }
    //         });
    //     }
    //     return false;
    // });
    // function cleanTnanks(form) {
    //     $('.inp_first').removeClass("error-input");
    //     $('.inp_second').removeClass("error-input");
    //
    //     $(".inp_first input").val("");
    //     $(".inp_second input").val("");
    //
    //     $('.reservation-modal').hide();
    //     $('.modal-thanks').fadeIn();
    // };
    //
    // // custom select ===========================================================
    // $('select').selectric();
    //
    // // modal reservation =======================================================
    // $('.modal-show').click(function() {
    //     $('.overlay').fadeIn();
    //     $('.reservation-modal').fadeIn();
    //     $('.close-modal').click(function() {
    //         $('.overlay').fadeOut();
    //         $('.reservation-modal').fadeOut();
    //         $('.modal-thanks').fadeOut();
    //     });
    //     $('.overlay').click(function() {
    //         $('.overlay').fadeOut();
    //         $('.reservation-modal').fadeOut();
    //         $('.modal-thanks').fadeOut();
    //     });
    // });
    //
    // // slider ==================================================================
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 'auto',
    //     //   spaceBetween: 83,
    //     loop: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });

});
