$(document).ready(function(){

    $('.house-slider').slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<button type="button" class="house-prev"></button>',
        nextArrow: '<button type="button" class="house-next"></button>',
    });

    $('.add-slider').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="house-prev"></button>',
        nextArrow: '<button type="button" class="house-next"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    function heightses() {
        if ($(window).width()<480) {

        }

        $('.add-item-content').height('auto').equalHeights();
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();

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
