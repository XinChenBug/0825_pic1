/**
 * Created by xinchen on 8/29/2016.
 */


$(
    function()
    {
$(".pic ul li").mouseover(function()
{


//animate({width:"900px"},1000).  是一个动画操作，1000为毫秒
 $(this).stop(true).animate({width:"900px"},1000).siblings().stop(true).animate({width:"100px"},1000);

  //  $(this).stop(true,true).animate({width:"900px"},1000).siblings().stop(true,true).animate({width:"100px"},1000);
    //停止动画  $(this).stop(true)速度较为缓慢；  $(this).stop(true true) //速度过于迅速

})

    })