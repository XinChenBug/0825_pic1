/**
 * Created by xinchen on 8/26/2016.
 */


var timer37,timer38,timer39,timer40;
$(
    function()
    {


        var $bird=$("#bird1");   //找到小鸟对象
        var pos=$bird.offset();  //获取到小鸟的位置；
        var birdSize={width:$bird.width(),height:$bird.height()  };                  //获取小鸟的尺寸：宽度和 高度
        var speed=100;

        var key_record=37;


        timer37=setInterval
        (
            function()
            {
                pos.left-=speed;
                if( pos.left<=-birdSize.width)
                {  pos.left=$(window).width();}
                $bird.offset(pos);

            },500
        );



        $(document).keydown               //对页面进行 键盘操作时
        (
            function(even)
            {
                ////////////////////////////////
              // clearInterval(timer1);

                var key=even.keyCode;   //得到键盘事件，上/下/左/右 键
                if(key!=key_record)
                {
                   $bird.removeClass().addClass("dir_"+key);     //先移除原有样式再增加新的样式

                }
                key_record=key;
                switch (key)
                {
                    case 37:                   //37为左键

                        clearInterval(timer38);
                        clearInterval(timer39);
                        clearInterval(timer40);
                        pos.left-=speed;
                        if( pos.left<=-birdSize.width)
                        {  pos.left=$(window).width();}

                      timer37= setInterval
                        (
                            function()
                            {
                                pos.left-=speed;
                                if( pos.left<=-birdSize.width)
                                {  pos.left=$(window).width();}
                                $bird.offset(pos);

                            },500
                        );

                        break;

                    case 38:                   //38为上键
                        clearInterval(timer37);
                        clearInterval(timer39);
                        clearInterval(timer40);
                        pos.top-=speed;
                        if( pos.top<=-birdSize.height)
                        {  pos.top=$(window).height();}


                       timer38= setInterval
                        (
                            function()
                            {
                                pos.top-=speed;
                                if( pos.top<=-birdSize.height)
                                {  pos.top=$(window).height();}
                                $bird.offset(pos);

                            },500
                        );

                        break;

                    case 39:                   //39为右键

                        clearInterval(timer37);
                        clearInterval(timer38);
                        clearInterval(timer40);

                        pos.left+=speed;
                        if( pos.left>=$(window).width())
                        {pos.left=-birdSize.width;}

                        timer39=setInterval
                        (
                            function()
                            {
                                pos.left+=speed;
                                if( pos.left>=$(window).width())
                                {pos.left=-birdSize.width;}
                                $bird.offset(pos);

                            },500
                        );
                        break;



                    case 40:                   //40为下键
                        clearInterval(timer37);
                        clearInterval(timer38);
                        clearInterval(timer39);

                        pos.top+=speed;
                        if( pos.top>=$(window).height())
                        {pos.top=-birdSize.height;}

                        timer40=setInterval
                        (
                            function()
                            {
                                pos.top+=speed;
                                if( pos.top>=$(window).height())
                                {pos.top=-birdSize.height;}
                                $bird.offset(pos);

                            },500
                        );
                        break;
                }

                $bird.offset(pos);    //对小鸟对象的位置重新赋值
            }
        );






    }
);

/*
function  showBird()
{
    timer1=setInterval
    (
        function()
        {
            pos.left-=speed;
            if( pos.left<=-birdSize.width)
            {  pos.left=$(window).width();}
            $bird.offset(pos);

        },2000
    );
}
*/