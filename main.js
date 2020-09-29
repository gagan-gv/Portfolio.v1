$(document).ready(function() {
    // sticky nav bar
    $(window).scroll(function() {
            if (this.scrollY > 20) {
                $('nav').addClass("sticky");
            } else {
                $('nav').removeClass("sticky");
            }
        })
        // typing animation
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Flutter Developer", "UI/UX Designer", "Poet"],
        typeSpeed: 150,
        backSpeed: 55,
        loop: true
    })
});