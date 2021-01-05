$(function () {
    var url=window.location.href;
    if(url.indexOf('recruitment')!=-1){
        $('#menu5').find('a').css('color','#1772BD');
        $('#menu5').siblings().find('a').css('color','#565656');
    }
    
    $('.jion_title').on('click',function () {
        $(this).addClass('jion_title_check');
        $(this).siblings().removeClass('jion_title_check');

        $(this).siblings().find('img').attr('src','Img/advertise/jth.png');
        $(this).find('img').attr('src','Img/advertise/jtl.png');

        var index=$(this).attr('name');
        $($('.jion_recruit')[index]).removeClass('jion_recruit_none');
        $($('.jion_recruit')[index]).siblings().addClass('jion_recruit_none');
    });
});