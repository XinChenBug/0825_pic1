/**
 * Created by xinchen on 8/25/2016.
 */
var i=0;
var timer;
var real_j;
$(
    function()
    {

       $(".ig").eq(0).show().siblings().hide();   //显示第一张图片
        showTime();    //轮播图片

        $(".tab_li").mouseover(function()
        {
            i=$(this).index();           //获取当前.tab_li的Index
            show();
            clearInterval(timer);         //清除轮播事件
        })

        $(".tab_li").mouseout(function()
        {
            showTime();
        })

        $(".btn1").click
        (
            function()
            {

                if(i==0)
                {
                    i=5;
                }
                i=i-1;
                clearInterval(timer);
                show();
                showTime();

            }
        )


        $(".btn2").click
        (
            function()
            {

               i=i+1;
                if(i==5)
                {
                    i=0;
                }
                clearInterval(timer);
                show();
                showTime();

            }
        )






    }
)



function  show()
{
    //若需要使用渐变效果时候，使用如下语句
    $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);    //300为时间

    $(".tab_li").eq(i).addClass("bg").siblings().removeClass("bg");
}


//轮播函数
function  showTime()            //setInterval(function(){},time)  每隔一定时间执行某些时间或者操作，间隔时间的单位为毫秒
{
    timer=setInterval
    (
        function()
        {
            i++;
            if(i==5)
            {
                i=0;
            }
            //$(".ig").eq(i).show().siblings().hide();
            //若需要使用渐变效果时候，使用如下语句
            show();
        },4000
    );
}