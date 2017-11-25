
/*
 功能: 实现轮播效果
 @lists, 轮播图片ul容器
 @page, 轮播图页码
 @pageLiClass, 页码类名
 @time, 轮播时间
*/

function carousel(lists, page,pageLiClass,time){

  /*
   定义全局变量:
  @imgCon 获取轮播图片变量,并且初始化,除第一张外其他隐藏
  @picNumber 定义图片个数
  @ index 表示索引
  */

    const imgCon=lists.children();
    imgCon.not(imgCon.eq(0)).hide();
    const picNumber = imgCon.length;
    let html_page = '', index =0;

    // 添加页码
    for (let i = 0; i<picNumber; i++) {
      if(i === 0) {
        html_page += `<li class="${pageLiClass}"> <a class="adPage0" >${i+1}</a> </li>`;
      }
      else {
        html_page += `<li><a class="adPage0" >${i+1}</a></li>`;
      }
    }

   page.html(html_page); //显示索引对象图片

   // 显示索引对应的图片
   function  showPic(index ) {
     imgCon.eq(index).show().siblings("li").hide();
     page.find("li").eq(index).addClass(`${pageLiClass}`).siblings("li").removeClass(`${pageLiClass}`);
   }

   //页码按钮移入
  //  $(".page li")
   page.find("li").mouseover(function() {
     index = $(this).index(); //获取索引
     showPic(index);
   })

   /*
    功能:触发指定事件.
    鼠标移动到相应的索引处时，清除计时器，显示相应的图片。否则，继续执行计时器事件，每隔两秒，索引增加一个单位，展示相应的图片，循环图片轮播。代码如下图所示
   */

   lists.hover(function() {
     clearInterval(window.timer);
   }, function() {
     window.timer = setInterval(function() {
       showPic(index);
       index++;
       if(index === picNumber) {
         index = 0;
       }
     }, `${time}`);
   }).trigger('mouseleave');
}
