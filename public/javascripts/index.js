$(function() {

  // announcement  letter 选项卡
  const letterLi = $(".J-letters"); //选项卡
  const letter_lis = $(".letters ul li"); //选项卡菜单

letterLi.mouseover(function() {
  console.log("hello");
    const index = $(this).index();
    $(this).addClass("focus").siblings("li").removeClass("focus");
    letter_lis.eq(index).show().siblings("li").hide();
  })
})
