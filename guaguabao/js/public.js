/*页面根字号设置*/
(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//页面头部 标题栏
var headerOuter = $('<div class="public-header" ></div>');
var headerBackImg = $('<div src="/images/shopimage/backIcon.png" class="public-back mui-icon mui-icon-arrowleft" backURL="" ></div>');
//页面头部返回按钮 点击 返回   backURL -》自定义属性
$(headerBackImg).on('tap',function (){
  console.log(1);
  if($(this).attr('backURL') == '' || $(this).attr('backURL') == " " || $(this).attr('backURL') == null){
     history.back();
  }else {
    location.href = $(this).attr('backURL');
  }
});
var headerPageName = $('<div class="public-pageName"></div>');

//页面头部标签拼接 显示控制   1-是否显示 2.页面名称 3.返回按钮 指定返回路径  4.返回按钮是否显示
function public_header(type,pageName,backURL,backBtnType){
  if( arguments[0] == 0 ){
    return false;
  }else {
    $(headerPageName).text(arguments[1]);
    //头部标签点击返回按钮 自定义属性赋值
    $(headerBackImg).attr('backURL',arguments[2]); 

    $(headerOuter).append(headerBackImg);
    $(headerOuter).append(headerPageName);
    $('body').append(headerOuter);
    if(arguments[3] == 0){
      $(headerBackImg).hide();
    }
  }
}

//公共页面底部控制
var fotterATTR = [
  {'linkURL':'','imgURL':'/images/shopimage/index','functionName':'商城'},
  {'linkURL':'','imgURL':'/images/shopimage/gameBack','functionName':'AUTO'},
  {'linkURL':'','imgURL':'/images/shopimage/userCenter','functionName':'会员中心'}
];

var fotterOuter = $('<div class="public-fotter"></div>');
function public_fotter(){
  var pageName = document.title;
  for(var i = 0; i < fotterATTR.length ; i ++){
    var fotterBlock = $('<a  href=""></a');
    $(fotterBlock).attr('href',fotterATTR[i].linkURL);
    var fotterImg = $('<img src="" />');
    $(fotterImg).attr('src',fotterATTR[i].imgURL + '.png');
    var fotterName = $('<span></span>');
    $(fotterName).text(fotterATTR[i].functionName);
    if(pageName == fotterATTR[i].functionName){
      $(fotterImg).attr('src',fotterATTR[i].imgURL +'2'+ '.png');
      $(fotterName).css('color','red');
    }
    $(fotterBlock).append(fotterImg);
    $(fotterBlock).append(fotterName);
    $(fotterOuter).append(fotterBlock);
  }
  $('body').append(fotterOuter);
}




//公共META标签
var meta = $('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />');
$(function (){
	if($('.public-tab').length > 0){
		$('.public-outer').css('padding-top','4rem');
	}
})




