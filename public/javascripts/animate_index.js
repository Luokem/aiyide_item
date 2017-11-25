
/*
 功能: 一组图片左右滚动
 @l_activity, 移动标签父元素
 @elem,要移动的元素
 @移动前元素elem的margin-left大小
 @length, 要移动margin-left大小
*/

function animate(l_activity,elem,marginLeft,length) {
    var offsetLeft =0;  //移动标签margin-left变量
    //鼠标触发事件
    l_activity.find("a").mouseover(function() {
      var index = $(this).index();
      changeMargetLeft(l_activity,elem,marginLeft,length,offsetLeft,index);

    });
}



//显示移动
function changeMargetLeft  (l_activity,elem,marginLeft,length,offsetLeft,index) {
        var f_length = l_activity.offset().left; //父元素相对文档左边坐标
        offsetLeft = elem.eq(index).offset().left;  //移动元素相对文档左边坐标


        //索引为0,其他元素都恢复原位
        if(index == 0) {
          for(let i=index+1;i<marginLeft.length;i++){
            elem.eq(i).animate({"margin-left": `${marginLeft[i]}px`},300,function() {
          })
          }
          return;
        }//判断是否在原位,在原位,往左移动,margin-left减少
        else if(offsetLeft == (marginLeft[index]+f_length)) {
          for(let i=index;i>=0;i--){
          elem.eq(i).animate({"margin-left": `${i * length}px`},500,function() {
         }
        )
      }
    }
      else {
       //不在原位, 往恢复原位
       for(let i=index+1;i<marginLeft.length;i++){
         elem.eq(i).animate({"margin-left": `${marginLeft[i]}px`},300,function() {
       })
       }
      }

    }


/*
 功能: 实现光标放在图片上左晃动
 @elem,要移动元素
 @length, 左移动距离
*/
function smallMoveMargin (elem, length) {
  elem.hover(function(event){
      $(this).find("img").css("margin",`0 1px 0 ${-length}px`);
  }, function() {
     $(this).find("img").css("margin",`0 -2px 0 0`);
  })
}
