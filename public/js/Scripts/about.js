$(function () {
    var url = window.location.href;
    if (url.indexOf('about') != -1) {
        $('#menu3').find('a').css('color', '#1772BD');
        $('#menu3').siblings().find('a').css('color', '#565656');
    }
});