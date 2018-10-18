
 window.sr = ScrollReveal({reset: true});

$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        duration: 50,
        interval: 3000
    });

    $(".button-collapse").sideNav({
        menuWidth: 250, 
        edge: 'left',
        closeOnClick: false,
        draggable: true,
        onOpen: function() {
            sr.reveal('.side-nav > li:not(.side-nav-title)', {
                duration: 3000,
                origin: 'left',
                direction: '20px',
                reset: true
            }, 100);
        }
    });
});

sr.reveal('.history-heading', {
    duration: 1000,
    origin: 'right',
    distance: '30px'
});

sr.reveal('.history-content', {
    duration: 500,
    origin: 'right',
    distance: '30px'
});

sr.reveal('.services-heading', {
    duration: 1000,
    origin: 'top',
    distance: '30px'
});

sr.reveal('.services-content-container > div', {
    duration: 1000,
    origin: 'bottom',
    distance: '30px'
}, 100);

sr.reveal('.team-container > .valign-wrapper:nth-child(1)', {
    duration: 1000,
    origin: 'left'
});

sr.reveal('.team-container-left-content', {
    duration: 1000,
    origin: 'right'
});

sr.reveal('.row > div:nth-child(1)', {
    duration: 500,
    origin: 'left',
    distance: '60px'
});

sr.reveal('.row > div:nth-child(2)', {
    duration: 500,
    origin: 'right',
    distance: '60px'    
});

sr.reveal('.row > div:nth-child(3) + input[type=submit]', {
    duration: 500,
    origin: 'bottom',
    distance: '60px'    
});