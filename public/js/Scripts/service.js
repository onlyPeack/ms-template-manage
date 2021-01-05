$(function () {
    var url=window.location.href;
    if(url.indexOf('service')!=-1){
        $('#menu2').find('a').css('color','#1772BD');
        $('#menu2').siblings().find('a').css('color','#565656');
    }

    //产品展示切换
    $('.services_nav li').on('click',function () {
        $(this).siblings().removeClass('services_active');
        $(this).addClass('services_active');

        var id=$(this).attr('name');
        $('#'+id).siblings().addClass('services_none');
        $('#'+id).removeClass('services_none');
    });

    //成功案例
    $('.services_case li').hover(function () {

        $(this).find('.services_case_mask').css('display','block');
        $(this).find('.services_case_info').css('display','block');

        /*$(this).find('.services_case_info').animate({
            'marginTop': '-340px'
        }, 1000);*/

    },function () {

        $(this).find('.services_case_mask').css('display','none');
        $(this).find('.services_case_info').css({
            'display':'none'
        });
    });

    $('.services_pro_list li div').hover(function () {
        var title=$(this).text();
        $(this).attr('title',title);
    },function () {

    });

    $('.services_case_info').hover(function () {
        var title=$(this).find('.services_case_text').text();
        $(this).attr('title',title);
    },function () {

    })
});