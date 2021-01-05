$(function () {
    var url = window.location.href;
    if (url.indexOf('brand') != -1) {
        $('#menu7').find('a').css('color', '#1772BD');
        $('#menu7').siblings().find('a').css('color', '#565656');
    }
});

function initCalendar(str,el) {

    $(el).css('color','#FF7F52');
    $(el).siblings().css('color','#3B3B3B');

    var brandList=$('.brand-detail');
    for(var i=0;i<brandList.length;i++){
        var name=$(brandList[i]).attr('name');

        if(str=='09'){

            if(name.charAt(0)*1>=0 && name.charAt(0)*1<=9){
                $(brandList[i]).removeClass('brand-detail_none');
            }else{
                $(brandList[i]).addClass('brand-detail_none');
            }

        }else if(str=='All'){

            $(brandList[i]).removeClass('brand-detail_none');

        }else{

            if(str!=name.charAt(0)){
                $(brandList[i]).addClass('brand-detail_none');
            }else{
                $(brandList[i]).removeClass('brand-detail_none');
            }

        }
    }
}