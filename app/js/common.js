$(document).ready(function(){


    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });




    $('.house-slider').slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<button type="button" class="house-prev"></button>',
        nextArrow: '<button type="button" class="house-next"></button>',
    });

    $('.gallery-slider').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="house-prev"></button>',
        nextArrow: '<button type="button" class="house-next"></button>',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
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

    $('.reviews-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="house-prev"></button>',
        nextArrow: '<button type="button" class="house-next"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });

    function heightses() {
        if ($(window).width()>=768) {
            $('.review-slide').height('auto').equalHeights();
        }

        $('.add-item-content').height('auto').equalHeights();
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();

    $('.gallery-slide').photoswipe();






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
