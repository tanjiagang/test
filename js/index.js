$(document).ready(function() {

	FastClick.attach(document.body);

	/*首页*/
	function adhr(adhrs) {
		$(adhrs).hover(function() {
			$(this).addClass("act");
		}, function() {
			$(this).removeClass("act");
		})
	}
	$(".ithfl-mr label").click(function() {
		$(this).siblings("input").attr({
			"placeholder": $(this).attr("zdytx")
		});
		$(this).addClass("act").siblings("label").removeClass("act");
	})
	adhr(".ithfl-st input");

	$('.ifs-vd').hover(function() {
		if ($(window).width() > 1200) {
			$(this).filter(':not(:animated)').animate({
				right: "-60px",
				zIndex: 18
			}, 300).animate({
				right: "12px"
			}, 300);
		}
	}, function() {
		if ($(window).width() > 1200) {
			$(this).filter(':not(:animated)').animate({
				right: "-60px",
				zIndex: 15
			}, 300).animate({
				right: "12px"
			}, 300);
		}
	})
	$(".ithfl-st input").click(function() {
		clearTimeout(xst);
		$(".ithfr-price i").addClass("adc3");
		setTimeout(function() {
			$(".ithfr-price i").removeClass("adc3");
		}, 2000);
	})
	var xst = setInterval(xxd, 250);

	function xxd() {
		var amount = Math.floor(Math.random() * 90000 + 100000);
		$(".ithfr-price i").text(amount);
	}
	$(".ad-click").click(function() {
		$(".inp-yy").show();
		$(".inp-nr").show();
	})
	$(".inpn-off,.inp-yy").click(function() {
		$(".inp-yy").hide();
		$(".inp-nr").hide();
	})
	$(".hdtc-map").hover(function() {
		$(this).find(".hdtcm-show").addClass("adhr");
		$(this).find(".hdtcm-hide").filter(':not(:animated)').slideDown(300);
	}, function() {
		$(this).find(".hdtcm-show").removeClass("adhr");
		$(this).find(".hdtcm-hide").slideUp(200);
	})
	adhr(".hdcf-xz li");
	$(".hdcf-xz").hover(function() {
		$(this).find("i").addClass("act");
		$(this).find("ul").filter(':not(:animated)').slideDown(300);
	}, function() {
		$(this).find("i").removeClass("act");
		$(this).find("ul").slideUp(200);
	})
	$(".hdcf-xz li").click(function() {
		$(".hdcf-xz i").removeClass("act");
		$(".hdcf-xz ul").slideUp(200);
		$(".hdcf-xz p").text($(this).text());
	})
	$(window).scroll(function() {
		if ($(window).scrollTop() > parseInt($(".wap-banner").css("marginTop"))) {
			$(".hdb").addClass("ad-wap-hdpo");
		} else {
			$(".hdb").removeClass("ad-wap-hdpo");
		}
		if ($(window).scrollTop() > $(".br-wk").offset().top) {
			$(".hdb-nks").addClass("ad-pc-hdpo");
		} else {
			$(".hdb-nks").removeClass("ad-pc-hdpo");
		}
	})

	$(document).on("mousewheel DOMMouseScroll", function(e) {
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
			(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
		if (delta > 0) {
			$(".hdb-nks").removeClass("ad-pc-hdpfb").addClass("ad-pc-hdpft");
		} else if (delta < 0) {
			$(".hdb-nks").removeClass("ad-pc-hdpft").addClass("ad-pc-hdpfb");
		}
	});

	$("#open-appoint").click(function() {
		//$(".righttool-appointment").addClass("active").css({top:0});	
		$(".righttool-appointment").css({
			top: 0,
			opacity: 1
		}).addClass("active");
	})
	$(".righttool-appointment").click(function(e) {
		$(".righttool-appointment").removeClass("active").stop().animate({
			opacity: 0
		}, 300, function() {
			$(".righttool-appointment").css({
				top: "-100%"
			});
		});
		if (e && e.stopPropagation) {
			e.stopPropagation();
		} else {
			window.event.cancelBubble = true;
		}
	})
	$(".gj-dialog-box").click(function(e) {
		//$(".righttool-appointment").addClass("active").css({top:0});	
		if (e && e.stopPropagation) {
			e.stopPropagation();
		} else {
			window.event.cancelBubble = true;
		}
	})
	$(".icon-to-top").click(function() {
		$("html,body").stop().animate({
			scrollTop: 0
		}, "slow");
	})
	$(".code").hover(function() {
		$(".code-box").show();
	}, function() {
		$(".code-box").hide();
	})
	var re = function() {
		var hd = parseInt($(window).height());
		var wd = parseInt($(window).width());
		if (wd < 1200) {
			$(".pcadxg").removeClass("wow");
		} else {
			$(".pcadxg").addClass("wow");
		}
	}
	re();
	$(window).resize(function() {
		re();
	});
	$(".in-tc-phx").click(function() {
		$("#open-appoint").click();
	})

	/*3设计作品*/
	setTimeout(function() {
		$(".zs-txg").slideUp(600);
	}, 3000);
	$(".zslbtc-js").click(function() {
		$(".zspo-yy").show();
		if ($(window).width() > 750) {
			$(".zspo").stop().animate({
				top: "50%"
			}, 600);
		} else {
			$(".zspo").stop().animate({
				top: ($(window).height() - $(".zspo").height()) / 2
			}, 600);
		}
	})
	$(".zspo-yy,.zspo-off").click(function() {
		$(".zspo-yy").hide();
		$(".zspo").stop().animate({
			top: "-250%"
		}, 600);
	})
	/*3设计作品-作品详情页*/
	$(".pzxbh-img").hover(function() {
		$(this).find("a").stop().animate({
			top: "26px"
		}, 100);
	}, function() {
		$(this).find("a").stop().animate({
			top: "-35px"
		}, 100);
	})
	$(".pzxbp-st input").click(function() {
		$(this).parents(".pzxbp-st").siblings(".index-form-bj-screen").find(".index-form-screen-sz").hide();
		$(this).parents(".pzxbp-st").siblings(".pzxbp-price").find(".pxbn-txs").show();
	})
	$(".pzx-bt-yy,.pzx-bt-po-off").click(function() {
		$(".pzx-bt-yy").hide();
		$(".pzx-bt-po").stop().animate({
			top: -$(".pzx-bt-po").height() * 2
		}, 300);
	})
	$(".pzxb-tcfr").click(function() {
		$(".pzx-bt-yy").show();
		$(".pzx-bt-po").stop().animate({
			top: ($(window).height() - $(".pzx-bt-po").height()) / 2
		}, 300);
	})




	/*---------------------- 邻居怎么说页面 --------------------------*/

	// 点赞
	$('.comment-wrap .zan').click(function() {
		var zanNum = $(this).find('.zan-num').text()
		if ($(this).hasClass('zan-active')) {
			$(this).removeClass('zan-active')
			$(this).find('.zan-num').text(--zanNum)
		} else {
			$(this).addClass('zan-active')
			$(this).find('.zan-num').text(++zanNum)
		}
	})

	// 点击图片查看大图
	$('.comment-list .img-list > img').on('click', function() {
		var imgSrcs = [] // 图片路径数组
		var currentIndex = $(this).index() // 当前图片的索引
		$(this).parent().find('img').each(function() {
			imgSrcs.push($(this).attr('src'))
		})

		$('.big-img-list > li').each(function() {
			$(this).find('img').attr({
				'src': imgSrcs[$(this).index()]
			})
		})

		$('.big-img-popup').css({
			'display': 'block'
		});
		setTimeout(function() {
			$('.big-img-list').css({
				'transform': 'scale(1)'
			});
		}, 100)
		$('.big-img-popup .next, .big-img-popup .prev, .big-img-popup .close').fadeIn();
		$('.big-img-list > li').css({
			'display': 'none'
		});
		$('.big-img-list > li').eq(currentIndex).css({
			'display': 'block'
		});

		var currentPage = currentIndex + 1;
		var pageAll = imgSrcs.length;
		$('.big-img-popup .page .current-page').text(currentPage)
		$('.big-img-popup .page .page-all').text(pageAll)
		if (currentPage == 1) {
			$('.big-img-popup .prev').hide()
		} else if (currentPage == pageAll) {
			$('.big-img-popup .next').hide()
		} else {
			$('.big-img-popup .next, .big-img-popup .prev').show()
		}
	})

	// 大图列表上一页
	$('.big-img-popup .prev').on('click', function(e) {
		var e = e || widow.event
		var currentPage = parseInt($('.big-img-popup .current-page').text())
		$('.big-img-list > li').hide()
		$('.big-img-popup .next').show()
		$('.big-img-list > li').eq(--currentPage - 1).show()
		$('.big-img-popup .current-page').text(currentPage)
		if (currentPage == 1) $(this).hide()
		// 	e.cancelBubble()
		// 	e.preventDefault()	
		return false
	})

	// 大图列表下一页
	$('.big-img-popup .next').on('click', function(e) {
		var e = e || widow.event
		var currentPage = parseInt($('.big-img-popup .current-page').text())
		$('.big-img-popup .prev').show()
		$('.big-img-list > li').hide()
		$('.big-img-list > li').eq(++currentPage - 1).show()
		$('.big-img-popup .current-page').text(currentPage)
		if (currentPage == $('.big-img-list > li').length) $(this).hide()
		// 	e.cancelBubble()
		// 	e.preventDefault()	
		return false
	})


	// 点击遮罩或者关闭按钮关闭遮罩
	$('.big-img-popup .mask, .big-img-popup .close').on('click', function(e) {
		var e = e || window.event;
		var target = e.target || e.srcElement;
		$('.big-img-list').css({
			'transform': 'scale(0)'
		});
		$('.big-img-popup .next, .big-img-popup .prev, .big-img-popup .close').fadeOut();
		setTimeout(function() {
			$('.big-img-popup').css({
				'display': 'none'
			});
		}, 500)
	})
	// 防止点击图片关闭遮罩
	$('.big-img-popup img').on('click', function(e) {
		var e = e || window.event
		return false
	})


	// 滚轮让图片缩放
	var imgScale = 1; // 缩放系数
	$('.big-img-popup').on('mousewheel DOMMouseScroll', function(e) {
		var detail = e.originalEvent.detail || e.originalEvent.wheelDelta
		// var currentScale = $(this).find('img').css('transform')
		if (imgScale >= 2) imgScale = 2;
		if (imgScale <= 0) imgScale = 0;

		if (detail > 0) {
			imgScale -= 1 / 10
			$(this).find('.big-img-list').css({
				'transform': 'scale(' + imgScale + ')'
			})
		} else {
			imgScale += 1 / 10
			$(this).find('.big-img-list').css({
				'transform': 'scale(' + imgScale + ')'
			})
		}

		return false
	})

	// 下一页评论列表
	$('.comment-item').each(function() {
		// 一开始只显示前四项
		if ($(this).index() > 3) $(this).hide()
	})
	// 每点击一次显示四项
	$('.comment-wrap .next-page-btn').on('click', function() {
		$('.comment-item:hidden').each(function() {
			if ($(this).index > 3) return
			$(this).show()
		})
	})





	/*==========================================
					装修攻略
	============================================*/
	// 文字滚动
	function Marquee(wrapper, scrollDoc, cloneDoc, speed) {
		var wrapper = document.querySelector(wrapper)
		var scrollDoc = document.querySelector(scrollDoc)
		var cloneDoc = document.querySelector(cloneDoc)

		cloneDoc.innerHTML = scrollDoc.innerHTML



		var MyMar = setInterval(function() {
			if (wrapper.scrollTop >= scrollDoc.offsetHeight) {
				wrapper.scrollTop = 0;
			} else {
				wrapper.scrollTop = wrapper.scrollTop + 1;
			}
		}, speed);
		wrapper.onmouseover = function() {
			clearInterval(MyMar)
		};
		wrapper.onmouseout = function() {
			MyMar = setInterval(function() {
				if (wrapper.scrollTop >= scrollDoc.offsetHeight) {
					wrapper.scrollTop = 0;
				} else {
					wrapper.scrollTop = wrapper.scrollTop + 1;
				}
			}, speed);
		};
	}

	Marquee('.name-wrap .wrap', '.name-wrap .wrap .scroll-ul', '.name-wrap .wrap .clone-ul', 60)
})
