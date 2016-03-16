/**
 * Created by Administrator on 2016/2/8.
 */
/*
*高级运动,心中的痛!
*/
window.onload=function(){
    /*
     *第一个效果吸顶条
     * 当鼠标滚动的时候
     * c_in_h2(Hi There!的getPos的距离小于等于某一个值得时候)
     * nav和foot换一套css样式
     */
    /*(function(){
        var oNav=document.getElementById('nav1');
        var oFoot=document.getElementById('foot');
        window.onscroll=function(){
            var sT=document.documentElement.scrollTop||document.body.scrollTop;
            if(sT>=95){
                oNav.className='nav1 nav_re clearfix';
                oFoot.className='foot foot_re';
                //换一套CSS样式
            }else{
                oNav.className='nav1 clearfix';
                oFoot.className='foot';
            }
        };
    })();*/
    /*
     *第二个效果：吸顶取消效果
     */

    /*
     *第三个效果：Hi文字打印效果
     */
    (function(){
        var oCh2=document.getElementById('c_in_h2');
        var str='Hi There! Happy New Year 2016!';
        var timer;
        var i=0;
        clearInterval(timer);
        timer=setInterval(function(){
            oCh2.innerHTML=str.substring(0,i++);
        },200);
        if(i==str.length){
            clearInterval(timer);
        }
    })();
    /*
     *第四个效果：自定义滚动条效果
    */
    (function(){
        var oCtxt=document.getElementById('c_txt');
        var oCwh=document.getElementById('c_wheel');
        var oCtxtIn=document.getElementById('c_txt_in');
        oCwh.onmousedown=function(ev){
            var oEvent=ev||event;
            var disY=oEvent.clientY-oCwh.offsetTop;
            document.onmousemove=function(ev){
                var oEvent=ev||event;
                var t=(oEvent.clientY-disY);
                if(t<0){
                    t=0;
                }else if(t>oCtxt.offsetHeight-oCwh.offsetHeight-2){
                    t=oCtxt.offsetHeight-oCwh.offsetHeight-2;
                }
                var scail=t/(oCtxt.offsetHeight-oCwh.offsetHeight);
                oCtxtIn.style.top=-scail*(oCtxtIn.offsetHeight-oCtxt.offsetHeight)+'px';
                oCwh.style.top=t+'px';
            };
            document.onmouseup=function(){
                document.onmouseup=document.onmousemove=null;
                oCwh.releaseCapture&&oCwh.releaseCapture();
            };
            oCwh.setCapture&&oCwh.setCapture();
            return false;
        };
        addEvent(oCtxt,function(down){
            var t=oCwh.offsetTop;
            if(down){
                t+=10;
            }else{
                t-=10;
            }
            if(t<0){
                t=0;
            }else if(t>oCtxt.offsetHeight-oCwh.offsetHeight-2){
                t=oCtxt.offsetHeight-oCwh.offsetHeight-2;
            }
            var scail=t/(oCtxt.offsetHeight-oCwh.offsetHeight);
            oCtxtIn.style.top=-scail*(oCtxtIn.offsetHeight-oCtxt.offsetHeight)+'px';
            oCwh.style.top=t+'px';
        });
    })();
    /*
     *首屏拉出效果
     */
    (function(){
        var oPos=document.getElementById('pos');
        var oPosIn=document.getElementById('pos_in');
        var timer=null;
        oPosIn.onclick=function(){
        console.log(oPosIn.innerHTML);
            if(oPosIn.innerHTML=='&gt;'){
                timer=setInterval(function(){
                    oPos.style.left=oPos.offsetLeft+10+'px';
                    if(oPos.offsetLeft==0){
                        clearInterval(timer);
                        oPosIn.innerHTML='&lt;';
                    }
                },30);
            }else if(oPosIn.innerHTML=='&lt;'){
                timer=setInterval(function(){
                    oPos.style.left=oPos.offsetLeft-10+'px';
                    if(oPos.offsetLeft==-100){
                        clearInterval(timer);
                        oPosIn.innerHTML='&gt;';
                    }
                },30);
            }




        };

    })();
    /*
        使用锚点实现页面平滑滚动效果
        锚点效果：
        当点击about的时候页面开启定时器开始滚动
        当滚动距离==某一个值得时候停止滚动scrollTop是滚动距离about.offsetTop;
        行不通的原因是：当改变了scrollTop的值得时候，页面也没有滚动
    */
    /*(function(){
        var oGoAbout=document.getElementById('goAbout');
        var sT=document.documentElement.scrollTop||document.body.scrollTop;
        oGoAbout.onclick=function(){
            setInterval(function(){
                sT+=10;
                console.log(sT);
            },100);
        };
    })();*/
    /*暂时用jQuery实现页面锚点平滑滚动效果*/
    $('#goAbout').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-70
        }, 500);
        return false;
    });
    $('#goWork').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-70
        }, 500);
        return false;
    });
    $('#goCon').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-100
        }, 500);
        return false;
    });
    $('#goTop1').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $('#goTop').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $('#learnMore').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-70
        }, 500);
        return false;
    });
    /*
     *contact里面字数统计效果
     * label功能(html中已经完成)
     * 字数统计效果问题：
     *      当已经输入满100个字的时候如何做提示
     */
    (function(){
        var oMess=document.getElementById('mess');
        var oMes_num=document.getElementById('mes_num');
        var timer=null;
        var num=0;
        oMess.onfocus=function(){
            //聚焦的时候改变背景色
            oMess.style.background='#90ce36';
            clearInterval(timer);
            timer=setInterval(function(){
                num=oMess.value.length;
                    oMes_num.innerHTML='共输入'+num+'字,您还可以输入'+(500-num)+'字';
            },30);

        };
        oMess.onblur=function(){
            //失去焦点的时候背景色还原
            oMess.style.background='';
            clearInterval(timer);
        };
    })();
    /*
     *work里面选项卡效果
     *
     */
    (function(){
        var oWork_tab=document.getElementById('work_tab');
        var aUl=oWork_tab.getElementsByTagName('ul');

        var oWork_tab_in=document.getElementById('work_tab_in');
        var aDiv=oWork_tab_in.getElementsByTagName('div');
        var len=aDiv.length;
        for(var i=0;i<len;i++){
            aDiv[i].index=i;
            aDiv[i].onmouseenter=function(){
                for(var i=0;i<len;i++){
                    aDiv[i].className='';
                    aUl[i].className='work_pic clearfix';
                }
                aDiv[this.index].className='active';
                aUl[this.index].className='work_pic show clearfix';
            };
        }
    })();
};

















