/*
  功能: 选型卡功能
  @letterLi, 选项卡
  @letter_lis, 选项卡菜单
  @letterLiClass, 选项卡类名,添加样式
*/

function letters(letterLi, letter_lis,letterLiClass) {
  letterLi.mouseover(function() {
      const index = $(this).index();
      $(this).addClass(letterLiClass).siblings("li").removeClass(letterLiClass);
      letter_lis.eq(index).show().siblings("li").hide();
    })
}
