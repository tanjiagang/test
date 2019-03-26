$(function(){
	
	/*********首页**********/
	// 文凭菜单切换
	$('.left-menu > li').on('click',function(){
		var index = $(this).index() - 1;
		$('.left-menu > li').removeClass('menu-active')
		$(this).addClass('menu-active')
		$('.pic-list').hide()
		$('.pic-list').eq(index).show();
	})
})