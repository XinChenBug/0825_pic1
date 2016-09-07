/**
 * Created by xinchen on 9/7/2016.
 */

$(function(){

//    函数1 开始
    /*
$(".fore8").hover(
    function()
    {
        $(" .fore8 .dd").slideDown();
       $("#shortcut-2014 .fore8 .ci-right s").css("top","2px")
        $("#ttbar-serv .dt").css("background","#fff")
    },
    function()
    {
        $(".fore8 .dd").slideUp();
        $("#shortcut-2014 .fore8 .ci-right s").css("top","-7px")
        $("#ttbar-serv .dt").css("background","#f1f1f1")
    }
)

*/
    //    函数1 结束

    //函数2 开始
    $(".dorpdown").hover(

        function()
        {
           $(this).find(".dd").slideDown();
            $(this).find("s").css("top","2px");
            $(this).find(".dt").css("background","#fff");
        },
        function()
        {
            $(this).find(".dd").slideUp();
            $(this).find("s").css("top","-7px")
            $(this).find(".dt").css("background","#f1f1f1");
        }


    )





})