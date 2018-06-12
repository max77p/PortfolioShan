//show typed js when window is loaded
$(document).ready(function () {
    var typedOptions = {
        strings: ["Shan.", "Front-End.", "Back-End.", "Creative."],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    }
    var typed = new Typed(".typed", typedOptions);

}, 1000);

$('.owl-carousel').owlCarousel({
    // center:true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4,
        }
    }
})


//-----------------Scroll to Top------------------
$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 100px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       $('.locationNav').css("color","white");
    }
    else{
        $('.locationNav').css("color","black");
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});

//-----------------isotope settings--------------
$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    percentPosition: true,
    layoutMode: 'masonry',
    masonry: {
        columnWidth: '.grid-item'
    }
});

// filter items on button click
$('.filter-button-group').on('click', 'a', function (e) {
    $('#portfolioPages a').removeClass("active");
    $(this).addClass("active");

    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({
        filter: filterValue,
        transitionDuration: '1s'
    });
});

$('.nav-item').on('click','a',function(e){
    $('.nav-item a').removeClass("active");
    $(this).addClass("active");

});
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
var skills = ["HTML", "CSS", "JavaScript", "JQuery", "MongoDB", "React.js", "Express.js", "Node.js", "Firebase"];


$('.skillCont').each(function (i) {

    var bar = new ProgressBar.Line(this, {
        strokeWidth: 1,
        color: 'black',
        trailColor: '#b3b5bb',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: { color: '#000000' },
        to: { color: '#000000' },
        // Set default step function for all animate calls
        step: (state, bar) => {
            // bar.setText($(this).attr("data-skill"));
            bar.path.setAttribute('stroke', state.color);
            
            // bar.text.style.color = state.color;
        }       
    });
    // bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    // bar.text.style.fontSize = '1rem';
    
    bar.animate($(this).children('h5').attr("value"));  // Number from 0.0 to 1.0
});


