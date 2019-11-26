$(document).ready(function(){
   flag=1;
    $("#nex").click(function(){
       if(flag==0)
        {
            $("#welcome-layer").css("z-index","999");
            $("#weather-layer").css("z-index","9");
            $("#time-layer").css("z-index","9");
            $("#welcome-layer").css("transform","translateX(0px) scale(1.5)");
            $("#weather-layer").css("transform","translateX(-270px) scale(1)");
            $("#time-layer").css("transform","translateX(270px)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#time-layer").css("z-index","999");
            $("#weather-layer").css("z-index","9");
            $("#welcome-layer").css("z-index","9");
            $("#time-layer").css("transform","translateX(0px) scale(1.5)");
            $("#welcome-layer").css("transform","translateX(-270px) scale(1)");
            $("#weather-layer").css("transform","translateX(270px)");
            flag=2;
        }
        else if(flag==2)
        {
            $("#weather-layer").css("z-index","999");
            $("#time-layer").css("z-index","9");
            $("#welcome-layer").css("z-index","9");
            $("#weather-layer").css("transform","translateX(0px) scale(1.5)");
            $("#time-layer").css("transform","translateX(-270px) scale(1)");
            $("#welcome-layer").css("transform","translateX(270px)");
            flag=0;
        }
    });
    $("#pre").click(function(){
       if(flag==0)
        {
            $("#time-layer").css("z-index","999");
            $("#weather-layer").css("z-index","9");
            $("#welcome-layer").css("z-index","9");
            $("#time-layer").css("transform","translateX(0px) scale(1.5)");
            $("#welcome-layer").css("transform","translateX(-270px) scale(1)");
            $("#weather-layer").css("transform","translateX(270px)");
            flag=2;
        }
        else if(flag==1)
        {
            $("#weather-layer").css("z-index","999");
            $("#time-layer").css("z-index","9");
            $("#welcome-layer").css("z-index","9");
            $("#weather-layer").css("transform","translateX(0px) scale(1.5)");
            $("#time-layer").css("transform","translateX(-270px) scale(1)");
            $("#welcome-layer").css("transform","translateX(270px)");
            flag=0;
        }
        else if(flag==2)
        {
            $("#welcome-layer").css("z-index","999");
            $("#weather-layer").css("z-index","9");
            $("#time-layer").css("z-index","9");
            $("#welcome-layer").css("transform","translateX(0px) scale(1.5)");
            $("#weather-layer").css("transform","translateX(-270px) scale(1)");
            $("#time-layer").css("transform","translateX(270px)");
            flag=1;
        }
    });
});
