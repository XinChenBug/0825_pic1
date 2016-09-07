/**
 * Created by xinchen on 8/29/2016.
 */

var maxSize=50;
var minSize=5;
var snowColor="#fff";
var newOn=200; //单位毫秒；

//每个雪片都是一个DIV，创造DIV对象，并设置脱离文档流,  div的内容是雪片符号，即：div.html（”*“）
//创建雪花
var  snow=$("<div></div>").css({"position":"absolute","top":"-50px"}).html("❆");


$(
    function()
    {
       var documentHeight=$(document).height();
        var documentWidth=$(document).width();

        //间隔一定的时间产生随机数：
        //Math.random(),结果是0~1的随机数
        //startPositionLeft雪片距离左边的距离的随机数
        //  雪片透明度startOpacity
        //雪片从最上面落到最下面锁需要的时间durationFall；


      setInterval(function()
      {
          var startPositionLeft=Math.random()* documentWidth;
          var startOpacity=0.7+Math.random()*0.3;  //初始化时透明度为0.7，透明度比较大，所以设置为0.7比较好
          var durationFall=2000+Math.random()*3000;  //单位是毫秒；
          var endPositionTop= documentHeight;
          var endPositionLeft= Math.random()* documentWidth;
          var snowSize=minSize+ maxSize*Math.random();

          //把雪片对象复制一次，并加到网页中；
          snow.clone().appendTo("body").css({"left":startPositionLeft,"opacity":startOpacity,"font-size":snowSize,"color":snowColor})
              .animate({"left":endPositionLeft,"opacity":0.5,"top":endPositionTop},durationFall,function(){$(this).remove();});

      },newOn);




    }
);