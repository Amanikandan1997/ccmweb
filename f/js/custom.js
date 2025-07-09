/**********************************/

//************************ Clear Local Storage for Payment Section ****************************//
if (localStorage.length > 0) {
    //localStorage.clear();
}
//************************ Clear Local Storage for Payment Section ****************************//


var selector = '.play_pause a';
$(selector).on('click', function() {
    $(selector).removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function() {
    var owl = $('.owl-carousel-play-pouse');
    owl.owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
})

$('.owl-guide').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('.owl-loog').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    slideTransition: 'linear',

    rewindNav: true,
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
$('.owl-loog2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    rewindNav: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    slideTransition: 'linear',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})



/*************************************/

$('.add').click(function() {
    var th = $(this).closest('.wrap').find('.count');
    th.val(+th.val() + 1);
});
$('.sub').click(function() {
    var th = $(this).closest('.wrap').find('.count');
    if (th.val() > 1) th.val(+th.val() - 1);
});

/*********************************************/


// var slider = new Swiper ('.gallery-slider', {
//     slidesPerView: 1,
//     centeredSlides: true,
//     loop: false,
//     loopedSlides: 6, //スライドの枚数と同じ値を指定
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });


// var thumbs = new Swiper ('.gallery-thumbs', {
//     slidesPerView: '8',
//     spaceBetween: 0,
//     centeredSlides: true,
//     loop: false,
//     loopedSlides: 8,
//     slideToClickedSlide: true,
// });

// //3
// //slider.params.control = thumbs;
// //thumbs.params.control = slider;

// //4
// slider.controller.control = thumbs;
// thumbs.controller.control = slider;


/****************************/

var previousButton, nextButton;
var rotationButton, pauseContainer, resumeContainer;
var slidesContainer, slides;
var dots;

// window.addEventListener('DOMContentLoaded', function(e) {
//   previousButton = document.querySelector('.carousel .previous-button');
//   nextButton = document.querySelector('.carousel .next-button');

//   rotationButton = document.querySelector('.carousel .rotation-button');
//   pauseContainer = document.querySelector('.carousel .rotation-button .pause-container');
//   resumeContainer = document.querySelector('.carousel .rotation-button .resume-container');

//   slidesContainer = document.querySelector('.carousel .slides');
//   slides = document.querySelectorAll('.carousel .slides .slide');

//   /**
//     When Slick Slider loads, set up the slide dots correctly.
//   */
//   $('.carousel .slides').on('init', function(e, slick) {
//     // Ensure all the non-visible slides and their content are impossible to reach by keyboard
//     hideNonVisibleSlides();

//     // Retreive references to all the slide dot DOM elements
//     dots = document.querySelectorAll('.carousel .slick-dots li button');

//     // Give the first slide dot `aria-current="true"` on load
//     dots[0].setAttribute('aria-current', true);

//     dots.forEach(function(dot, index) {
//       // Indicate the action the button will invoke to make it clear that these are controls, not slides themselves
//       dot.innerText = 'Go to slide ' + (index + 1);

//       // Disable autoplay as soon as a user activates a slide dot
//       dot.addEventListener('click', function(e) {
//         disableAutoplay();
//       });
//     });
//   });

/**
  Before each slide transition, make each slide visible and update the current slide dot
*/
// $('.carousel .slides').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
//   // Make each slide visible during the transition animation
//   slides.forEach(function(slide) {
//     slide.classList.remove('is-hidden');
//   });

//   // Move the active dot indicator before animation for a "snappier" feel
//   dots.forEach(function(dot) {
//     dot.removeAttribute('aria-current');
//   });

//   // Indicate which slide is active through the slide dots
//   dots[nextSlide].setAttribute('aria-current', true);
// });

// /**
//   After each slide transition, hide all newly-non-visible slides and make focusable content in the new "current" slide reachable
// */
// $('.carousel .slides').on('afterChange', function(e, slick, currentSlide) {
//   // Ensure newly non-visible slides are fully hidden from all users
//   hideNonVisibleSlides();

//   // Allow interactive elements on the new current slide to receive keyboard focus
//   slides[currentSlide].querySelectorAll('a, button').forEach(function(element) {
//     element.removeAttribute('tabindex');
//   });
// });

/**
  Initialize Slick Slider with recommended configuration options
*/
// $('.carousel .slides').slick({
//   // The default dots markup is pretty good, though we will need to tweak them in the `init` and `afterChange` event handlers.
//   dots: true,

//   // This removes the inappropriate tabpanel and tab roles and disables arrow key navigation.
//   // NOTE: if you want to use arrow key navigation, you should implement that separately without enabling this option. The usability benefits of key navigation don't outweigh the accessibility impact of the tab implementation.
//   accessibility: false,

//   // Many hero banners auto-rotate, so this demo will too.
//   autoplay: true,
//   autoplaySpeed: 1000,

//   // Use highly-accessible custom elements from the DOM for prev/next buttons.
//   // NOTE: You can also define the elements here as strings, if you prefer
//   prevArrow: document.querySelector('.carousel .previous-button'),
//   nextArrow: document.querySelector('.carousel .next-button')
// });

// Disable autoplay as soon as the user activates either the Previous or Next button
// previousButton.addEventListener('click', function(e) {
//   disableAutoplay();
// });

// nextButton.addEventListener('click', function(e) {
//   TransitionRunning = true;
//   disableAutoplay();
// });

// // Toggle autoplay when the pause/resume button is activated
// rotationButton.addEventListener('click', function(e) {
//   toggleAutoplay();
// });
// });


/**
  Fully hide non-visible slides for all users when they exit the view.
*/
function hideNonVisibleSlides() {
    var hiddenSlides = document.querySelectorAll('.carousel .slides .slide[aria-hidden="true"]');

    hiddenSlides.forEach(function(slide) {
        // Hide each slide using `visibility: hidden` to be extra-sure
        slide.classList.add('is-hidden');

        // Prevent any interactive element on non-visible slides from receiving keyboard focus
        slide.querySelectorAll('a, button').forEach(function(element) {
            element.setAttribute('tabindex', -1);
        });
    });
}


/**
  Disable or enable built-in Slick Slider autoplay
*/
function toggleAutoplay() {
    var autoplayEnabled = $('.carousel .slides').slick('slickGetOption', 'autoplay');

    if (autoplayEnabled) {
        disableAutoplay();
    } else {
        enableAutoplay();
    }
}

function disableAutoplay() {
    // Disable autoplay and stop Slick from rotating
    $('.carousel .slides').slick('slickSetOption', 'autoplay', false);
    $('.carousel .slides').slick('slickPause');

    // Switch the rotation button icon to "resume"
    pauseContainer.classList.remove('is-visible');
    resumeContainer.classList.add('is-visible');
}

function enableAutoplay() {
    // Enable autoplay and get rotation started again
    $('.carousel .slides').slick('slickSetOption', 'autoplay', true);
    $('.carousel .slides').slick('slickPlay');

    // Switch the rotation button icon to "pause"
    pauseContainer.classList.add('is-visible');
    resumeContainer.classList.remove('is-visible');
}


$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,

    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: false,
            center: true,
            loop: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


/*************************/

$(document).ready(function() {

    var sync11 = $("#sync11");
    var sync21 = $("#sync21");
    var slidesPerPage = 6; //globaly define number of elements per page
    var syncedSecondary = true;

    sync11.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,

    }).on('changed.owl.carousel', syncPosition);

    sync21
        .on('initialized.owl.carousel', function() {
            sync21.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: false,
            center: true,
            loop: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync21
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync21.find('.owl-item.active').length - 1;
        var start = sync21.find('.owl-item.active').first().index();
        var end = sync21.find('.owl-item.active').last().index();

        if (current > end) {
            sync21.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync21.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync11.data('owl.carousel').to(number, 100, true);
        }
    }

    sync21.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync11.data('owl.carousel').to(number, 300, true);
    });


    //**************************************** PAYMENT SECTION *************************************/
    //********************** FREE PASS SECTION ***************************/
    $(document).on("click", ".add_freepass_btn", function(e) {
        e.preventDefault();
        var btn = $(this);
        btn.parent('td').find(".quantity-section").show();
        btn.hide();

        $('.quantity_count').val(2);
    });

    $(document).on("click", ".freepass_quantity_add", function(e) {
        e.preventDefault();

        var plan = $(this).attr('data-category');
        var quantity = $(this).prev('.quantity').val();
        // if(quantity == 5){

        if (quantity != 1) {
            $(this).attr('disabled', true);
        }
        $('.quantity_count').val(quantity);
    });

    $(document).on("click", ".freepass_quantity_min", function(e) {
        e.preventDefault();

        var plan = $(this).attr('data-category');
        var quantity = $(this).next('.quantity').val();

        //  if(quantity < 5){ 
        if (quantity == 1) {
            $('.freepass_quantity_add').removeAttr('disabled');
        }
        $('.quantity_count').val(quantity);
    });

    $(document).on("click", ".freepass-submit-btn", function(e) {
        e.preventDefault();
        var name = $(".payment-name").val();
        var email = $(".payment-email").val();
        var mobile = $(".payment-mob").val();
        var price = $(".price").val();
        var quantity = $(".quantity_count").val();

        if (quantity == 0) {
            $(".payment-error").html("Please select freepass");
            return false;
        } else if (name == '') {
            $(".payment-error").html('Name is required');
            return false;
        } else if (mobile == '') {
            $(".payment-error").html('Mobile number is required');
            return false;
        } else if (mobile.length != 10) {
            $(".payment-error").html('Please enter valid mobile number');
            return false;
        } else if (email == '') {
            $(".payment-error").html('Email is required');
            return false;
        } else if (!validateEmail(email)) {
            $(".payment-error").html('Please enter valid email address');
            return false;
        } else {
            if (name != '' && email != '' && mobile != '' && price != '') {
                $(".payment-error").html('');

                var eventName = $(".event_name").val();
                var eventImage = $(".event_image").val();
                var eventTime = $(".event_time").val();
                var eventLocation = $(".event_location").val();
                var freePass = $(".freepass").val();

                var jsonObj = [];

                item = {}
                item["category_type"] = 'FREEPASS';
                item["category_quantity"] = quantity;
                item["category_price"] = 0;

                jsonObj.push(item);

                var itemArray = {};
                itemArray['item'] = jsonObj;
                itemArray["event_name"] = eventName;
                itemArray["event_image"] = eventImage;
                itemArray["event_time"] = eventTime;
                itemArray["event_location"] = eventLocation;
                var jsonItem = JSON.stringify(itemArray);

                $(".summary_data").val(jsonItem);

                $.ajax({
                    url: '../../passcode_verify.php',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        overall_price: 0,
                        overall_quantity: quantity,
                        payment_name: name,
                        payment_email: email,
                        payment_mobile: mobile,
                        event_name: eventName,
                        event_time: eventTime,
                        event_image: eventImage,
                        event_location: eventLocation,
                        freepass: freePass,
                        summary_data: jsonItem
                    },
                    success: function(msg) {
                        if (msg.status == true) {
                            window.location.href = '../../verify.php?id=' + msg.ticket_id;
                        } else {
                            alert('Maximum limit 5 pass only!');
                        }
                    }
                });
            }
        }
    });
    //********************** FREE PASS SECTION ***************************/

    function OverallTotalAmount() {
        var total = 0;
        var quantityCount = 0;
        let priceArr = [];
        let quantityArr = [];
        $(".categories_list").each(function(val) {
            var price = $(this).find('.plan_price').html();
            var splitPrice = price.split('₹')
            priceArr.push(splitPrice[1]);

            var quantity = $(this).find('.plan_qunatity').html();
            quantityArr.push(quantity);
        });

        total = priceArr.reduce(function(a, b) {
            return parseInt(a) + parseInt(b);
        });

        quantityCount = quantityArr.reduce(function(a, b) {
            return parseInt(a) + parseInt(b);
        })

        $('.total_amount').html('₹' + total);
        $('.total_price').html('₹' + total);
        $('.price').val(total);

        $('.quantity_count').val(quantityCount);
    }

    $(document).on("click", ".add_btn", function(e) {
        e.preventDefault();

        var btn = $(this);
        var plan = btn.attr('data-plan');
        var price = parseInt(btn.attr('data-price'));
        var quanity = btn.attr('data-quantity');
        var key = btn.attr('data-key');
        btn.parent('td').find(".quantity-section").show();
        btn.hide();

        $('.summary-details').removeClass('inactive');

        var html = '<tr class="categories_list" data-plan=' + plan + '><td style="width: 66%;"><p class="catge_sheep plan_name"> ' + plan + ' </p></td><td style="width: 10%;"><p class="catge_sheep plan_qunatity"> ' + quanity + ' </p></td><td><p class="catge_sheep plan_price"> ₹' + price + ' </p><p class="catge_sheep plan_key" style="display:none;"> ' + key + ' </p></td></tr>';
        $('.billing_list_summary').append(html);

        OverallTotalAmount();
    });

    $(document).on("click", ".quantity_add", function(e) {
        e.preventDefault();

        var plan = $(this).attr('data-category');
        var quantity = $(this).prev('.quantity').val();
        var price = $(this).attr('data-price');
        var key = $(this).attr('data-key');

        $(".categories_list[data-plan]").each(function() {
            var planName = $(this).data('plan');

            if (planName == plan) {
                $(".categories_list[data-plan=" + plan + "]").html('<td style="width: 66%;"><p class="catge_sheep plan_name">' + plan + '</p></td><td style="width: 10%;"><p class="catge_sheep plan_qunatity"> ' + quantity + ' </p></td><td><p class="catge_sheep plan_price" data-price="' + price + '"> ₹' + (quantity * price) + ' </p><p class="catge_sheep plan_key" style="display:none;"> ' + key + ' </p></td>');

                OverallTotalAmount();
            }
        });
    });

    $(document).on("click", ".quantity_min", function(e) {
        e.preventDefault();

        var plan = $(this).attr('data-category');
        var quantity = $(this).next('.quantity').val();
        var price = $(this).attr('data-price');
        var key = $(this).attr('data-key');

        $(".categories_list[data-plan]").each(function() {
            var planName = $(this).data('plan');

            if (planName == plan) {
                $(".categories_list[data-plan=" + plan + "]").html('<td style="width: 66%;"><p class="catge_sheep plan_name">' + plan + '</p></td><td style="width: 10%;"><p class="catge_sheep plan_qunatity"> ' + quantity + ' </p></td><td><p class="catge_sheep plan_price" data-price="' + price + '"> ₹' + (quantity * price) + ' </p><p class="catge_sheep plan_key" style="display:none;"> ' + key + ' </p></td>');

                OverallTotalAmount();
            }
        });
    });

    $(document).on("click", ".summary-btn", function(e) {
        e.preventDefault();
        $('.category_summary').html('');
        var name = $(".payment-name").val();
        var email = $(".payment-email").val();
        var mobile = $(".payment-mob").val();
        var price = $(".price").val();
        var checkbox = $('#exampleCheck1').val();

        if (name == '' && email == '' && mobile == '' && price == 0) {
            $(".payment-error").html('Please choose the plan!');
        }

        if (price == 0) {
            $(".payment-error").html("Please select the category");
            return false;
        } else if (name == '') {
            $(".payment-error").html('Name is required');
            return false;
        } else if (mobile == '') {
            $(".payment-error").html('Mobile number is required');
            return false;
        } else if (mobile.length != 10) {
            $(".payment-error").html('Please enter valid mobile number');
            return false;
        } else if (email == '') {
            $(".payment-error").html('Email is required');
            return false;
        } else if (!validateEmail(email)) {
            $(".payment-error").html('Please enter valid email address');
            return false;
        } else if (!$('#exampleCheck1').is(':checked')) {
            $(".payment-error").html('Please check terms & conditions');
            return false;
        } else {
            if (name != '' && email != '' && mobile != '' && price != '') {
                $(".payment-error").html('');
                window.scrollTo(0, 1200);
                //$(".summary-btn").attr("disabled", true);
                $(".order_summary").show();

                var quantity = $('.quantity_count').val();
                var totalAmt = $('.price').val();
                var categoryName = $('.plan_name').html();

                $('.category_type').html(categoryName);
                $('.total_items').html(quantity);
                $('.total_price_eg').html('₹' + totalAmt);
                var gst = (totalAmt * 18) / 100;
                $('.gst_amount').html('₹' + gst);
                var overAllAmount = parseFloat(totalAmt) + parseFloat(gst);
                $('.total_price').html('₹' + overAllAmount);

                $('.overall_quantity').val(quantity);
                $('.overall_price').val(overAllAmount);
                $('.price_exclude_gst').val(totalAmt);
                $('.gst_amount').val(gst);
                $('.payment_name').val(name);
                $('.payment_mob').val(mobile);
                $('.payment_email').val(email);

                var event_name = $(".event_name").val();
                var event_image = $(".event_image").val();
                var event_time = $(".event_time").val();
                var event_location = $(".event_location").val();

                var jsonObj = [];

                $(".categories_list").each(function(val) {
                    var plan = $(this).find('.plan_name').html();
                    var price = $(this).find('.plan_price').html();
                    var quantity = $(this).find('.plan_qunatity').html();
                    var key = $(this).find('.plan_key').html();

                    $('.category_summary').append('<div><p class="category_type">' + plan + '</p><p class="category_quantity text-end">' + quantity + '</p><p class="category_price text-end">' + price + '</p><p class="category_key text-end" style="display: none;">' + key + '</p></div>');

                    item = {}
                    item["category_type"] = plan;
                    item["category_quantity"] = quantity;
                    item["category_price"] = price;
                    item["category_key"] = key;

                    jsonObj.push(item);

                });
                var itemArray = {};
                itemArray['item'] = jsonObj;
                itemArray["event_name"] = event_name;
                itemArray["event_image"] = event_image;
                itemArray["event_time"] = event_time;
                itemArray["event_location"] = event_location;
                var jsonItem = JSON.stringify(itemArray);
                //  var jsonEvent = JSON.stringify(event);
                //  var finalJson = jsonItem.concat(jsonEvent);
                // console.log(jsonItem);

                $(".summary_data").val(jsonItem);
            }
        }
    });

    $(".payment-type").on("change", function(e) {
        e.preventDefault();
        var payment_type = $(this).val();

        if (payment_type == 'PASSCODE') {
            $('.passcode').removeClass('inactive');
        }
        if (payment_type == 'RAZOR PAY') {
            $('.passcode').addClass('inactive');
        }
    });

    $('body').on('click', '.payment-btn', function(e) {
        var payment_type = $(".payment-type:checked").val();
        var totalAmount = $(".overall_price").val();
        var totalQuantity = $(".overall_quantity").val();
        var paymentName = $(".payment_name").val();
        var paymentMobile = $(".payment_mob").val();
        var paymentEmail = $(".payment_email").val();
        var orderSummary = $(".summary_data").val();
        var eventName = $(".event_name").val();
        var eventImage = $(".event_image").val();
        var eventTime = $(".event_time").val();
        var eventLocation = $(".event_location").val();
        var priceExcludeGST = $(".price_exclude_gst").val();
        var gstAmount = $(".gst_amount").val();
        var pageid = $(".page").val();

        if (payment_type == '' || typeof payment_type === "undefined") {
            alert('Please select the payment type')
        } else {
            if (payment_type == 'PASSCODE') {
                var passcode = $('.passcode').val();
                if (passcode == '') {
                    alert('Please enter passcode')
                } else {
                    $.ajax({
                        url: '../../passcode_verify.php',
                        type: 'post',
                        dataType: 'json',
                        data: {
                            overall_price: totalAmount,
                            overall_quantity: totalQuantity,
                            payment_name: paymentName,
                            payment_email: paymentEmail,
                            payment_mobile: paymentMobile,
                            summary_data: orderSummary,
                            event_name: eventName,
                            event_time: eventTime,
                            event_image: eventImage,
                            event_location: eventLocation,
                            passcode: passcode,
                            price_exclude_gst: priceExcludeGST,
                            gst_amount: gstAmount,
                            page: pageid
                        },
                        success: function(msg) {
                            if (msg.status == true) {
                                window.location.href = '../../verify.php?id=' + msg.ticket_id;
                            } else {
                                // console.log(msg);
                                alert('Something went wrong!');
                            }
                        }
                    });
                }
            }
            if (payment_type == 'RAZOR PAY') {
                // var totalAmount   = $(".overall_price").val();
                // var totalQuantity = $(".overall_quantity").val();
                // var paymentName   = $(".payment_name").val();
                // var paymentMobile = $(".payment_mob").val();
                // var paymentEmail  = $(".payment_email").val();
                // var orderSummary  = $(".summary_data").val();
                // var eventName     = $(".event_name").val();
                // var eventImage    = $(".event_image").val();
                // var eventTime     = $(".event_time").val();
                // "key": "rzp_live_5N00LOavU00vFz", // Enter the Key ID generated from the Dashboard old boosha media 
                var options = {
                    "key": "rzp_live_J7bSTlY3Dw5Np2", // Enter the Key ID generated from the Dashboard
                    "amount": (totalAmount * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": eventName,
                    "description": "Payment",
                    "image": eventImage,
                    "handler": function(response) {
                        $.ajax({
                            url: '../../pay.php',
                            type: 'post',
                            dataType: 'json',
                            data: {
                                razorpay_payment_id: response.razorpay_payment_id,
                                overall_price: totalAmount,
                                overall_quantity: totalQuantity,
                                payment_name: paymentName,
                                payment_email: paymentEmail,
                                payment_mobile: paymentMobile,
                                summary_data: orderSummary,
                                event_name: eventName,
                                event_time: eventTime,
                                event_image: eventImage,
                                event_location: eventLocation,
                                price_exclude_gst: priceExcludeGST,
                                gst_amount: gstAmount,
                                page: pageid
                            },
                            success: function(msg) {
                                // console.log('s');
                                //console.log(msg);
                                if (msg.status == true) {
                                    window.location.href = '../../verify.php?id=' + msg.ticket_id;
                                } else {
                                    // console.log(msg);
                                    alert('Something went wrong!');
                                }
                            }
                        });
                    },
                    "prefill": {
                        "name": paymentName,
                        "email": paymentEmail,
                        "contact": paymentMobile
                    },
                    "notes": {
                        "address": "BlackSheep"
                    },
                    "theme": {
                        "color": "#3399cc"
                    }
                };
                var rzp1 = new Razorpay(options);
                rzp1.open();
                e.preventDefault();
            }
        }
    });

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    /**************************************** PAYMENT SECTION *************************************/

});


/***************************/

//     $('.some-list-1').simpleLoadMore({
//       item: '.load_mort',
//       count: 6

//     });
//     $('.some-list-2').simpleLoadMore({
//       item: '.load_mort',
//       count: 3
//     });
//  $('.some-list-3').simpleLoadMore({
//       item: '.load_mort',
//       count: 6
//     });
//     $('.some-list-counter-1').simpleLoadMore({
//       item: '.load_mort',
//       count: 5,
//       counterInBtn: true,
//       btnText: 'See All <i class="fa fa-angle-right"></i> {showing}/{total}',
//     });
//     $('.some-list-counter-2').simpleLoadMore({
//       item: '.load_mort',
//       count: 5,
//       showCounter: true
//     });
//     $('.some-list-3').simpleLoadMore({
//       item: '.load_mort',
//       count: 5,
//       itemsToLoad: 2
//     });
//     $('.some-list-4').simpleLoadMore({
//       item: '.load_mort',
//       count: 5,
//       itemsToLoad: 1
//     });

//     // Easing
//     $('.easing-1').simpleLoadMore({
//       item: '.load_mort',
//       count: 5,
//       itemsToLoad: 2,
//       easing: 'fade'
//     });
//     $('.easing-2').simpleLoadMore({
//       item: '.load_mort',
//       count: 5,
//       itemsToLoad: 2,
//       easing: 'slide'
//     });

//     // Callbacks
//     $('.callback-onload').simpleLoadMore({
//       item: '.load_mort',
//       count: 5,
//       itemsToLoad: 5,
//       easing: 'fade',
//       onLoad: function($items, $btn) {
//         $(this).after('<p class="callback-response"><i>Callback Response: SimpleLoadMore successfully initialized on this instance!</i></p>')
//       },
//     });
//     $('.callback-onnextload').simpleLoadMore({
//       item: '.load_mort',
//       count: 5,
//       itemsToLoad: 2,
//       easing: 'fade',
//       onNextLoad: function($items, $btn) {
//         if ($(this).next('p').length) {
//           $(this).next('p').find('i').text('Callback Response: More items loaded. Total items remain: ' + $items.filter(':hidden').length);
//         } else {
//           $(this).after('<p class="callback-response"><i>Callback Response: More items loaded. Total items remain: ' + $items.filter(':hidden').length + '</i></p>');
//         }
//       },
//       onComplete: function($items, $btn) {
//         $(this).next('p').html('<p class="callback-response"><i>Callback Response: All items have been loaded!</i></p>');
//       },
//     });
//     $('.callback-oncomplete').simpleLoadMore({
//       item: 'div',
//       count: 5,
//       itemsToLoad: 5,
//       easing: 'fade',
//       onComplete: function() {
//         $(this).after('<p class="callback-response"><i>Callback Response: All items have been loaded!</i></p>');
//       },
//     });

/**********************************/

// jQuery(document).ready(function(){

//   var $this = $('.some-list-22');
//   if ($this.find('div').length > 2) {
//       $('.some-list-22').append('<div><a href="javascript:;" class="showMore"></a></div>');
//   }

//   // If more than 2 Education items, hide the remaining
// 	$('.some-list-22 .load_mort2').slice(0,3).addClass('shown');
// 	$('.some-list-22 .load_mort2').not('.shown').hide();
// 	$('.some-list-22 .showMore').on('click',function(){
// 		$('.some-list-22 .load_mort2').not('.shown').toggle(300);
// 		$(this).toggleClass('showLess');
// 	});

// });

// jQuery(document).ready(function(){

//   var $this = $('.some-list-23');
//   if ($this.find('div').length > 2) {
//       $('.some-list-23').append('<div><a href="javascript:;" class="showMore"></a></div>');
//   }

//   // If more than 2 Education items, hide the remaining
// 	$('.some-list-23 .load_mort3').slice(0,3).addClass('shown');
// 	$('.some-list-23 .load_mort3').not('.shown').hide();
// 	$('.some-list-23 .showMore').on('click',function(){
// 		$('.some-list-23 .load_mort3').not('.shown').toggle(300);
// 		$(this).toggleClass('showLess');
// 	});

// });


// jQuery(document).ready(function(){

//   var $this = $('.some-list-44');
//   if ($this.find('div').length > 2) {
//       $('.some-list-44').append('<div><a href="javascript:;" class="showMore"></a></div>');
//   }

//   // If more than 2 Education items, hide the remaining
// 	$('.some-list-44 .load_mort44').slice(0,6).addClass('shown');
// 	$('.some-list-44 .load_mort44').not('.shown').hide();
// 	$('.some-list-44 .showMore').on('click',function(){
// 		$('.some-list-44 .load_mort44').not('.shown').toggle(300);
// 		$(this).toggleClass('showLess');
// 	});

// });
// jQuery(document).ready(function(){

//   var $this = $('.some-list-55');
//   if ($this.find('div').length > 2) {
//       $('.some-list-55').append('<div><a href="javascript:;" class="showMore"></a></div>');
//   }

//   // If more than 2 Education items, hide the remaining
// 	$('.some-list-55 .load_mort55').slice(0,6).addClass('shown');
// 	$('.some-list-55 .load_mort55').not('.shown').hide();
// 	$('.some-list-55 .showMore').on('click',function(){
// 		$('.some-list-55 .load_mort55').not('.shown').toggle(300);
// 		$(this).toggleClass('showLess');
// 	});

// });

// jQuery(document).ready(function(){

//   var $this = $('.some-list-66');
//   if ($this.find('div').length > 2) {
//       $('.some-list-66').append('<div><a href="javascript:;" class="showMore"></a></div>');
//   }

//   // If more than 2 Education items, hide the remaining
// 	$('.some-list-66 .load_mort66').slice(0,6).addClass('shown');
// 	$('.some-list-66 .load_mort66').not('.shown').hide();
// 	$('.some-list-66 .showMore').on('click',function(){
// 		$('.some-list-66 .load_mort66').not('.shown').toggle(300);
// 		$(this).toggleClass('showLess');
// 	});

// });
// jQuery(document).ready(function(){

//   var $this = $('.some-list-77');
//   if ($this.find('div').length > 2) {
//       $('.some-list-77').append('<div><a href="javascript:;" class="showMore"></a></div>');
//   }

// If more than 2 Education items, hide the remaining
// 	$('.some-list-77 .load_mort77').slice(0,6).addClass('shown');
// 	$('.some-list-77 .load_mort77').not('.shown').hide();
// 	$('.some-list-77 .showMore').on('click',function(){
// 		$('.some-list-77 .load_mort77').not('.shown').toggle(300);
// 		$(this).toggleClass('showLess');
// 	});

// });
// jQuery(document).ready(function(){

//   var $this = $('.some-list-88');
//   if ($this.find('div').length > 2) {
//       $('.some-list-88').append('<div><a href="javascript:;" class="showMore"></a></div>');
//   }

//   // If more than 2 Education items, hide the remaining
// 	$('.some-list-88 .load_mort88').slice(0,6).addClass('shown');
// 	$('.some-list-88 .load_mort88').not('.shown').hide();
// 	$('.some-list-88 .showMore').on('click',function(){
// 		$('.some-list-88 .load_mort88').not('.shown').toggle(300);
// 		$(this).toggleClass('showLess');
// 	});

// });
// jQuery(document).ready(function(){

//   var $this = $('.some-list-99');
//   if ($this.find('div').length > 2) {
//       $('.some-list-99').append('<div><a href="javascript:;" class="showMore"></a></div>');
//   }

//   // If more than 2 Education items, hide the remaining
// 	$('.some-list-99 .load_mort99').slice(0,6).addClass('shown');
// 	$('.some-list-99 .load_mort99').not('.shown').hide();
// 	$('.some-list-99 .showMore').on('click',function(){
// 		$('.some-list-99 .load_mort99').not('.shown').toggle(300);
// 		$(this).toggleClass('showLess');
// 	});


// });

$('.showmap').hide();
$('.showmap').click(function() {
    $('.showmap').toggle();
});


(function blink() {
    $('.blink_me').fadeOut(500).fadeIn(500, blink);
})();


function showMap() {
    $(".showmap").slideToggle();
}
var slider = new Swiper(".custom-gallery-slider", {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 20,
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

var thumbs = new Swiper(".custom-gallery-thumbs", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slideToClickedSlide: true
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;

$(document).ready(function() {
    var owl = $('.video-owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 800,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('#reality-show-tab').click();
    $('#web-series-tab').click();
    $('#events-tab').click();
});

$(document).ready(function() {
    var owl = $('.video-owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});