$(document).ready(function () {
    $(window).on('scroll', function () {
            var offset = $(window).scrollTop();
            var opacity = offset / 500;
            if (offset > 100) {
                $('.right_nav').css('background-color', 'rgba(0,0,0,' + opacity + ')');
                $('.logo1').addClass('logo1_none');
            }else {
                $('.right_nav').css('background-color', 'rgba(0,0,0,0.0)');
                $('.logo1').removeClass('logo1_none');
            }
        }
    );
    
    $('.burger_menu_button').click(function(){
        if ($('.burger_menu_button').hasClass('active')){
            $('.burger_menu_li').fadeOut();
            $('.burger_menu_button').removeClass('active');
        }else{
            $('.burger_menu_li').fadeIn();
            $('.burger_menu_button').addClass('active');
        }
    });
    $('.burger_menu_li').click(function(){
        if ($('.burger_menu_button').hasClass('active')){
            $('.burger_menu_li').fadeOut();
            $('.burger_menu_button').removeClass('active');
        }else{
            $('.burger_menu_li').fadeIn();
            $('.burger_menu_button').addClass('active');
        }
    })

    $('form').submit(function (event) {
        var phon = $(this).find("input[name='phone']").val();
        if (phon.indexOf('_') == -1 && phon != null && typeof phon !== "undefined" && phon != '') {
        } else {
            alert('Введите Ваш номер телефона!');
            return false;
        }
    });
    Inputmask.extendDefinitions({
        '~': {
            validator: "[1245679]"
        }
    });
    $("input[name='name']").on("keypress", function (e) {
        return (/[A-Za-zА-Яа-яЁё\s]/.test(String.fromCharCode(e.charCode)));
    })
    $("input[name='phone']").inputmask({
        mask: "+38 (0~9) 999-99-99",
        greedy: false,
        clearIncomplete: true,
        placeholder: "_",
        rightAlign: false,
        showMaskOnHover: false,
        showMaskOnFocus: true
    });
    $("input[name='phone']").on("keydown", function (e) {

        if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
            e.preventDefault();
            return false;
        }

    });
    
    window.onload = function(){
        $(".before-el").fadeOut();
        
        $(".img_sertificate").on("click", function(e){
            $('.before-el').fadeIn(1000);
        })
        $(".overlay").on("click", function(e){
            $(".before-el").fadeOut(700);
        })
    }


    $(".right_nav ul li, .burger_menu .burger_menu_li li").on("click","a", function (event) {
        
        event.preventDefault();
        
        var header = parseFloat($("header .nav").height())-15;
        var id  = $(this).attr('href'),
        
            top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top-header}, 1500);
        
    });
    
    $(".header_content .cont .left_content, .flavors .cont .flavors_content, .absolute_sensation .absolute_content .aromo").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    if($(window).width()<460){
        $(".header_content .cont .left_content, .flavors .cont .flavors_content, .absolute_sensation .absolute_content .aromo").on("click","a", function (event) {
            event.preventDefault();
            var header = parseFloat($("header .nav").height())-350;
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top-header}, 1500);
        });
    };

    $(".carousel-control-prev, .carousel-control-next").click(function(){
       
        $('.carousel').removeAttr('data-ride');
        $('.carousel').attr('data-interval','false');
        $('.carousel').carousel('pause');
       

        
    });
          
    
        
});

