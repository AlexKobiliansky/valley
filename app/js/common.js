$(document).ready(function(){

    $('.house-slider').slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<button type="button" class="house-prev"></button>',
        nextArrow: '<button type="button" class="house-next"></button>',
    });

    $('.house-nav').click(function() {
        $('.house-slider').slick('slickGoTo',$(this).index());
    });

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
