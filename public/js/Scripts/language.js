function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            //pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
    );
    $(".goog-te-spinner-pos").remove()//一直在改变,占位
    $("#goog-gt-tt").remove()//原文提示
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

$('.multilingual-nav div').on('click',function () {
   $(this).addClass('multilingual-nav-active');
   $(this).siblings().removeClass('multilingual-nav-active');

   var index=$(this).index();
   $($('.multilingual-box')[index]).addClass('multilingual-box-show');
   $($('.multilingual-box')[index]).siblings().removeClass('multilingual-box-show');
});

$('#choiceLanguage').on('click',function (event) {
    /*event = event || window.event;
    if(event.stopPropagation) { //W3C阻止冒泡方法
        event.stopPropagation();
    } else {
        event.cancelBubble = true; //IE阻止冒泡方法
    }*/
    window.location.href='language.html';
});
