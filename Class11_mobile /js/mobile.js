$(function() {
    $("#menu").click(function() {
        $("nav").toggleClass("menu-show");
    });
    $("nav > a").click(function() {
        // When you click a nav link, hide the nav bar
        $("nav").removeClass("menu-show");
    });
});

