/**
 * Created by Administrator on 2016/2/8.
 */
/*
* getPos(元素名).top可以直接获取到它到body的top值
*/
function getPos(obj){
    var l=0;
    var t=0;
    while(obj){
        l+=obj.offsetLeft;
        t+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return {
        left:l,
        top:t
    };
}