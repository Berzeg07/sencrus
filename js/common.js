$(document).ready(function() {

    var repairSlider = $("#pageGallery");
    repairSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 0,
        center: false, //если нужны обрезаные края
        navText: ['<div class="arrow"></div>', '<div class="arrow"></div>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    var equipmentSlider = $(".equipment-slider");
    equipmentSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 12,
        center: false, //если нужны обрезаные края
        navText: ['<div class="left"></div>', '<div class="right"></div>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 6
            },
            992: {
                items: 7
            }
        }
    });

    $('.product-tabs_btn a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.product-tabs_item').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.tab a:first').click();

    // var ddd = Array.from($(".product-tabs_list li"));
    // console.log(ddd);
    // var arr = [];
    // $('.product-tabs_list li').each(function() {
    //     arr.push(this.innerHTML);
    //     var arr2 = arr.slice(0,2);
    //     // console.log(arr2);
    //     // for(var i = 0; i < 2; i++){
    //     //     // arr[i].addClass('visible');
    //     //     console.log(arr[i]);
    //     //
    //     // }
    // })

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
    var menuSearchHeader = $(".header-main_search__item input");
    var checkContactBox = $("div").is("#contactHeader");
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
        if (checkContactBox) {
            $("#contactHeader").css('display', 'none');
            $('.headerRight-box').css({
                'width': '100%'
            });
        }
    });
    $(menuSearchHeader).blur(function() {
        $(this).parent().removeClass('active');
        $(this).val('');
        if (checkContactBox) {
            setTimeout(function() {
                $("#contactHeader").fadeIn();
            }, 800);
            setTimeout(function() {
                $('.headerRight-box').css('width', 'unset');
            }, 850);
        }
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
