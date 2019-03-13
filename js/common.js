$(document).ready(function() {
    var menuSearch = $('.search-menu input');
    var menuSearchHeader = $(".header-main_search__item input")
    $('.search-menu').click(function() {
        $(menuSearch).focus();
    });
    $(menuSearch).focus(function() {
        $(this).parent().addClass('active');
    });
    $(menuSearch).blur(function() {
        $(this).parent().removeClass('active');
        $(this).val('');
    });
    $('.header-main_search__item').click(function() {
        $(menuSearchHeader).focus();
    });
    $(menuSearchHeader).focus(function() {
        $(this).parent().addClass('active');
    });
    $(menuSearchHeader).blur(function() {
        $(this).parent().removeClass('active');
        $(this).val('');
    });

    $('.main-logo').fadeIn();

    // $(".hamburger").click(function() {
    //     $(this).toggleClass("is-active");
    // });

    // Mobile menu =============================================================
    $('.burger-main').click(function() {
        $('.hidden-menu').toggleClass('nav-show');
        $('.hidden-menu').css('width','100%');
        // $('body').css('overflow','hidden');
        $('.overlay').fadeIn();
    });
    $(window).resize(function() {
        var w = $(window).width();
        if (w >= 768) {
            $('.hidden-menu').removeAttr('style');
        }
    });
    $('.hidden-menu_close').click(function() {
        $('.hidden-menu').removeClass('nav-show');
        // $('body').css('overflow','visible');
        $('.overlay').fadeOut();
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
