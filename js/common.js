$(document).ready(function() {

    $('.sortingBox-types_item').click(function(){
        $('.sortingBox-types_item').removeClass('active');
        $(this).addClass('active');
        var check = $('.sortingBox-types_stroke').hasClass('active');
        if(check){
            $('.actionsList').addClass('active');
        }else{
            $('.actionsList').removeClass('active');
        }
    });

    $('.contactGallery .item a').hover(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $('.contactGallery-box').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.contactGallery-box').addClass('active');
        var tab = $(this).attr('href');
        $('.mapTabs-item').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });

    ymaps.ready(init);
    function init() {
        // офис Екатеринбург ===================================================
        var center = [56.817035, 60.631727];
        var myMap = new ymaps.Map('office-ekaterinburg', {
            center: center,
            controls: [],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
        	  balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon.png',
            iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap.geoObjects.add(myPlacemark);

        // Склад Екатеринбург ==================================================
        var center2 = [56.817035, 60.631727];
        var myMap2 = new ymaps.Map('sklad-ekaterinburg', {
            center: center,
            controls: [],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        });

        myMap2.behaviors.disable('scrollZoom');

        var myPlacemark2 = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
        	  balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon.png',
            iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap2.geoObjects.add(myPlacemark2);

        // Офис Красноярск =====================================================
        var center3 = [56.817035, 60.631727];
        var myMap3 = new ymaps.Map('office-krasnoyarsk', {
            center: center,
            controls: [],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        });

        myMap3.behaviors.disable('scrollZoom');

        var myPlacemark3 = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
        	  balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon.png',
            iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap3.geoObjects.add(myPlacemark3);

        // Склад Красноярск =====================================================
        var center4 = [56.817035, 60.631727];
        var myMap4 = new ymaps.Map('sklad-krasnoyarsk', {
            center: center,
            controls: [],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        });

        myMap4.behaviors.disable('scrollZoom');

        var myPlacemark4 = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
        	  balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon.png',
            iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap4.geoObjects.add(myPlacemark4);

        // Офис Хабаровск =====================================================
        var center5 = [56.817035, 60.631727];
        var myMap5 = new ymaps.Map('office-habarovsk', {
            center: center,
            controls: [],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap5.behaviors.disable('scrollZoom');

        var myPlacemark5 = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
        	  balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon.png',
            iconImageSize: [133, 60]
            // preset: 'twirl#violetIcon'
        });

        myMap5.geoObjects.add(myPlacemark5);

    }

    var actionsSlide = $(".actionsSlide");
    actionsSlide.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 0,
        center: false, //если нужны обрезаные края
        navText: ['<div class="left"></div>', '<div class="right"></div>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    });

    var contactGallery = $(".contactGallery");
    contactGallery.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: -1,
        center: false, //если нужны обрезаные края
        navText: ['<div class="arrow"></div>', '<div class="arrow"></div>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1270: {
                items: 5
            }
        }
    });

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


    var tabsEl = [];
    $(".product-tabs_list li").each(function() {
        tabsEl.push(this.innerHTML);
    });
    var num = 0;
    for(var i = 0; i < tabsEl.length; i++){
        num = i;
    }
    if(num > 3){
        $('.product-tabs_btnShow').css('display','block');
        $('.product-tabs_btnShow').click(function(){
            $(this).parent().find('.product-tabs_list').toggleClass('active');
            var checkClass = $('.product-tabs_list').hasClass('active');
            if(checkClass){
                $(this).html('скрыть');
            }else{
                $(this).html('показать все характеристики');
            }
        });
    }

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


    var formInp = $('.contactRecall-inp input');
    $(formInp).focus(function(){
        $('.contactRecall-inp label').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(formInp).blur(function(){
        $('.contactRecall-inp label').removeClass('active');
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
                // $("#contactHeader").css('display','flex');
            }, 800);
            setTimeout(function() {
                $('.headerRight-box').css('width', 'unset');
            }, 850);
        }
    });

    // $('.main-logo').fadeIn();

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
