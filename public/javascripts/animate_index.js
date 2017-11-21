const l_activity = $(".l_activity");       //移动标签父元素
const a = $(".l_activity a");             //要移动的元素
const marginLeft = [0,334,526,718];       // 移动前元素margin-left大小
var offsetLeft = 0;                       //移动标签margin-left变量

//显示移动
function changeMargetLeft  (index) {
        var f_length = l_activity.offset().left; //父元素相对文档坐标
        offsetLeft = a.eq(index).offset().left;  //移动元素相对文档坐标


        //索引为0,其他元素都恢复原位
        if(index == 0) {
          for(let i=index+1;i<marginLeft.length;i++){
            a.eq(i).animate({"margin-left": `${marginLeft[i]}px`},300,function() {
          })
          }
          return;
        }//判断是否在原位,在原位,往左移动,margin-left减少
        else if(offsetLeft == (marginLeft[index]+f_length)) {
          a.eq(index).animate({"margin-left": `${index * 192}px`},500,function() {
        }
      )}
      else {
       //不在原位, 往恢复原位
       for(let i=index+1;i<marginLeft.length;i++){
         a.eq(i).animate({"margin-left": `${marginLeft[i]}px`},300,function() {
       })
       }
      }

    }

//鼠标触发事件
$(".l_activity a").mouseover(function() {
  var index = $(this).index();
  changeMargetLeft(index);

})
