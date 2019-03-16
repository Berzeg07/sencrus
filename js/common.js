$(document).ready(function() {

    $('#select').hover(function() {
        $('.selectList-dropdown').stop().slideToggle();
        var link = $('.selectList-dropdown a');
        $(link).click(function() {
            $(link).removeClass('active');
            $(this).toggleClass('active');
            var linkText = $(this).html();
            var selectText = $(this).parents('.selectList').find('#select span').html(linkText);
        });
    });

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
        $('.hidden-menu').css('width', '100%');
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
        $('.overlay').fadeOut();
    });

    $('.sections-item').mouseenter(function() {
        $(this).addClass('active');
        $(this).find('.sections-blur').stop().fadeOut();
        $(this).find('.sections-menu').stop().fadeIn();
        $(this).find('.sections-arrow').stop().fadeOut();

    });
    $('.sections-item').mouseleave(function() {
        $(this).removeClass('active');
        $(this).find('.sections-blur').stop().fadeIn();
        $(this).find('.sections-menu').css('display', 'none');
        $(this).find('.sections-arrow').stop().fadeIn();
    });

    $('.header-main_link a').click(function(e) {
        e.preventDefault();
        scrollTo('#sections');
    });

    $('#toCatList').click(function(e) {
        e.preventDefault();
        scrollTo('.catalog-title');
    });
    $('.catalog-arrow').click(function() {
        scrollTo('.catalog-title');
    });

    function scrollTo(id) {
        var currentBlock = $(id);
        var currentBlockoffset = $(currentBlock).offset().top;
        $("html, body").animate({
            scrollTop: currentBlockoffset
        }, 500);
    }



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
