
// VARIABLES
var allCSS = [].slice.call(document.styleSheets)
    .reduce(function(prev, styleSheet) {
        if (styleSheet.cssRules) {
            return prev + [].slice.call(styleSheet.cssRules)
                .reduce(function(prev, cssRule) {
                    return prev + " " + cssRule.cssText;
                }, '');
        } else {
            return prev;
        }
    }, '');

var start = 0
var finish = 0;
var adjust = 0;
var offset = 0;

function scrollTo(to) {
    $('html,body').animate({
        scrollTop: $("#" + to).offset().top

    }, 1500);
}

function moveAvatar() {
    wScroll = $(this).scrollTop();
    wScrollP = wScroll / $(window).height();;

    if (wScrollP < 1) {
        $('.avatar').css({
            'transform': 'translateY(' + adjust * wScrollP + 'px)'
        });
    }
}



// window FUNCTIONS
window.onload = function() {
    document.getElementById("bg").innerHTML += allCSS.repeat(100);
    //scrollTo("home");
    start = $('.avatar').offset().top;
    finish = ($('.main-header').offset().top - $('.avatar').height()) - offset
    adjust = finish - start;

    

    $(function() {
        $("#typed").typed({
            strings: ["Apprentice", "Developer", "Photographer"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000
        });
    });
};

$(window).resize(function() {
    start = $('.avatar').offset().top - parseInt($('.avatar').css('transform').split(',')[5]);
    finish = ($('.main-header').offset().top - $('.avatar').height()) - offset
    adjust = finish - start;
    moveAvatar();
});

$(window).scroll(function() {
    moveAvatar();
})

$(window).bind('touchmove', function(e) {
    moveAvatar();
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-45806291-5', 'auto');
ga('send', 'pageview');
