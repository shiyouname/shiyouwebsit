//使用方法
/*
*      addEvent(obj,fn)
*       obj:事件对象
*       fn:发生事件的函数（具体写法见下面）
*       function(down){
            if(down){
            //当鼠标滚轮向下的时候发生的事件
                oDiv.style.width=oDiv.offsetWidth+10+'px';
            }else{
            //当鼠标滚轮向上的时候发生的事件
                oDiv.style.width=oDiv.offsetWidth-10+'px';
            }
        }
*/
function addEvent(obj,fn){
    //当滚动滚轮的时候发生下列这个事件
    function fnWheel(ev){
        var oEvent=ev||event;
        var down=false;//布尔值开关，这个开关可以开，也可以关，这个随意
        //获取鼠标滚轮方向
        if(oEvent.detail){
            //detail 火狐下特有的滚轮方向
            down=oEvent.detail<0?false:true;
            /*给down赋值
                当oEvent.detail小于0的时候,火狐下,说明滚轮向上,向上的给down赋值false
                当oEvent.detail大于0的时候,火狐下,说明滚轮向下,向下的给down赋值true*/
        }else{
            down=oEvent.wheelDelta<0?true:false;
            //wheelDelta IE和chrome下使用
            //同上理，只是方向是相反的
        }

        fn(down);

        //当参数里面要传函数，必须有一个函数名字来接收
        //接收了一个函数的话，需要调用，但是匿名函数的调用会采用到封闭空间的方式
        //封闭空间可以给传进来的函数进行传参的
        oEvent.preventDefault&&oEvent.preventDefault();
        //因为addEventListener里面return false 不能用做阻止默认事件发生
        //使用&&的原因
        return false;
        //阻止默认浏览器的事件

    }
    if(window.navigator.userAgent.indexOf('Firefox')!=-1){
        //判断是不是火狐浏览器，是的话执行第一段代码
        obj.addEventListener('DOMMouseScroll',fnWheel,false);
        //DOMMouseScroll,这个事件只有使用事件绑定火狐下才能生效
    }else{
        obj.onmousewheel=fnWheel;
        //正常浏览器发生onmousewheel滚轮事件
    }
}
