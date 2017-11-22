/* 选项卡 letters.j
----------------------*/
  //announcement  letter
  const letterLi = $(".J-letters"); //选项卡
  const letter_lis = $(".letters ul li"); //选项卡菜单

  letters(letterLi, letter_lis,"focus");


/* 轮播图  carousel.js
--------------------------------------------*/

// center 轮播图
const lists1 = $(".focusing .list");
const page1 = $('.focusing .page');
const pageLiClass1 = "focus";

// carousel(lists1,page1,pageLiClass1,4000);

 // center 小轮播图
const lists2 = $(".u_toggle .list");
const page2 = $('.u_toggle .page');
const pageLiClass2 = "focus";
// carousel(lists2,page2,pageLiClass2,7000);

// 美妆, 小轮播图
const lists3 = $(".s_h254 .list");
const page3 = $(".s_h254 .list").siblings(".page");
const pageLiClass3 = "focus";
carousel(lists3, page3, pageLiClass3, 5000);


/* animate.js
----------------------------*/
//firstScreen 图片左右滚动

const l_activity1 = $(".firstScreen .l_activity");       //移动标签父元素
const a1 = l_activity1.find("a");             //要移动的元素
const marginLeft1 = [0,334,526,718];       // 移动前元素margin-left大小
const length1 = 192;                        //要移动margin-left 大小

animate(l_activity1, a1, marginLeft1,length1);

// main_item  图片左右滚动
const l_activity2 = $(".main_item .l_activity");       //移动标签父元素
const a2 = l_activity2.find("a");             //要移动的元素
const marginLeft2 = [0,400,600,800,1000];       // 移动前元素margin-left大小
const length2 = 200;

animate(l_activity2, a2, marginLeft2,length2);

//美妆,营养, 图片晃动
const e_goodsImg = $('.e_goodsImg');
const e_length = 1;
smallMoveMargin(e_goodsImg, e_length);
