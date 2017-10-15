$(function(){
	var index = 0;
	var shoppingTimer = null;
	var navTimer = null;
	var timer = null;

	/* 购物车按钮 */
	$("#header .header_box .shoppingList").on({
		mouseover : function(){
			$("#header .header_box .shoppingInfo").slideDown();
			$("#header .header_box .shoppingList").css({
				'color' : '#ff6700',
				'background' : '#fff',
			});
		},
		mouseout : function(){
			shoppingTimer = setTimeout(function(){
				$("#header .header_box .shoppingInfo").slideUp();
				$("#header .header_box .shoppingList").css({
				'color' : '#b0b0b0',
				'background' : '#424242',
			});
			},50);
		}
	});
	$("#header .header_box .shoppingInfo").on({
		mouseover :function(){
			clearInterval(shoppingTimer);
			$("#header .header_box .shoppingInfo").css('display','block');
			$("#header .header_box .shoppingList").css({
				'color' : '#ff6700',
				'background' : '#fff',
			});
		},
		mouseout : function(){
			$("#header .header_box .shoppingInfo").slideUp();
			$("#header .header_box .shoppingList").css({
				'color' : '#b0b0b0',
				'background' : '#424242',
			});
		}
	});
	
	/* 页头导航条下拉显示动画 */
	$(".nav_left li").on({
		mouseover : function(){
			clearInterval(navTimer);
			index = $(this).index();
			if(index > 6){ 
				$(".second_nav").slideUp();
				return ;}
			$(".second_nav").slideDown();
			$(".second_nav_list ul").eq(index).show().siblings().hide();
		},
		mouseout : function(){
			clearInterval(navTimer);
			index = $(this).index();
			navTimer = setTimeout(function(){
				$(".second_nav").slideUp();
				$(".second_nav_list ul").eq(index).hide();
			},2000);
		}
	});
	$(".second_nav .second_nav_list ul").on({
		mouseover : function(){
			index = $(this).index();
			$(".second_nav").show();
			$(".second_nav .second_nav_list ul").eq(index).show().siblings().hide();
		},
		// mouseout : function(){
		// 	index = $(this).index();
		// 	timer = setTimeout(function(){
		// 		$(".second_nav").slideUp();
		// 		$(".second_nav .second_nav_list ul").eq(index).hide();
		// 	},2000);
		// }  
	});
	$(".second_nav").on({
		mouseover :function(){
			clearInterval(navTimer);
			$(".second_nav").show();
		},
		mouseout : function(){
			clearInterval(navTimer);
			navTimer = setTimeout(function(){
					$(".second_nav").slideUp();
				},100);
		},
	});

	/* 侧栏导航 */
	var sideTimer = null; 
	$("#main .side_nav .categories li").on({
		mouseover : function(){
			clearInterval(sideTimer);
			index = $(this).index();
			$("#main .detail .hide_detail").eq(index).css('display','block').siblings().css('display','none');
		},
		mouseout : function(){
			index = $(this).index();
			sideTimer = setTimeout(function(){
				$("#main .detail .hide_detail").eq(index).css('display','none');
			},100);
		},
	});
	$("#main .detail .hide_detail").on({
		mouseover : function(){
			clearInterval(sideTimer);
			index = $(this).index();
			$("#main .detail .hide_detail").eq(index).css('display','block').siblings().css('display','none');
		},
		mouseout : function(){
			index = $(this).index();
			$("#main .detail .hide_detail").eq(index).css('display','none');
		},
	});



	/* 轮播图动画效果 */
	/* 自动轮播 */
	function autoPlay(){
		timer = setInterval(function(){
			index++;
			if (index > 5) {
				index = 0;
			}
			$(".pic_pot li").eq(index).addClass('active_pot').siblings().removeClass();
			$(".pic_list a").eq(index).fadeIn().siblings().fadeOut();
		},5000);
	}
	autoPlay();
	/* 点击圆点 */
	$(".pic_pot li").click(function(){
		index = $(this).index();
		$(this).addClass('active_pot').siblings().removeClass();
		$(".pic_list a").eq(index).fadeIn().siblings().fadeOut();
		return false;
	});
	/* 点击左右按钮 */
	$(".prevPic").click(function(){
		index--;
		if(index < 0){
			index = 5;
		}
		$(".pic_pot li").eq(index).addClass('active_pot').siblings().removeClass();
		$(".pic_list a").eq(index).fadeIn().siblings().fadeOut();
	});
	$(".nextPic").click(function(){
		index++;
		if(index > 5){
			index = 0;
		}
		$(".pic_pot li").eq(index).addClass('active_pot').siblings().removeClass();
		$(".pic_list a").eq(index).fadeIn().siblings().fadeOut();
	});

	/* 小米明星单品滑动轮播 */
	var lunboTimer = null;
	var btnTimer = null;
	var btnTimer2 = null;
	lunboTimer = setInterval(function(){
		if(parseInt($(".xiaomiStar .xiaomiStarList").css('margin-left')) == 0){
			$(".xiaomiStar .lunbotu_btn .btn_right").css('color','#e0e0e0');
			$(".xiaomiStar .lunbotu_btn .btn_left").css('color','#b0b0b0');
			$(".xiaomiStar .lunbotu_btn .btn_right").on({
				mouseover : function(){
					btnDisabled($(".xiaomiStar .lunbotu_btn .btn_left"));
				},
				mouseout : function(){
					$(".xiaomiStar .lunbotu_btn .btn_right").css('color', '#e0e0e0');
				},
			});
			$(".xiaomiStar .lunbotu_btn .btn_left").on({
				mouseover : function(){
					btnEnabled($(".xiaomiStar .lunbotu_btn .btn_left"));
				},
					mouseout : function(){
					$(".xiaomiStar .lunbotu_btn .btn_left").css('color', '#b0b0b0');
				},
			});
			lunBoMove2($(".xiaomiStar .xiaomiStarList"),-10,-1240);
		}
		if(parseInt($(".xiaomiStar .xiaomiStarList").css('margin-left')) == -1240){
			$(".xiaomiStar .lunbotu_btn .btn_left").css('color','#e0e0e0');
			$(".xiaomiStar .lunbotu_btn .btn_right").css('color','#b0b0b0');				
			$(".xiaomiStar .lunbotu_btn .btn_left").on({
				mouseover : function(){
					btnDisabled($(".xiaomiStar .lunbotu_btn .btn_left"));
				},
				mouseout : function(){
					$(".xiaomiStar .lunbotu_btn .btn_left").css('color', '#e0e0e0');
				},
			});
			$(".xiaomiStar .lunbotu_btn .btn_right").on({
				mouseover: function(){
					btnEnabled($(".xiaomiStar .lunbotu_btn .btn_right"));
				},
				mouseout : function(){
					$(".xiaomiStar .lunbotu_btn .btn_right").css('color', '#b0b0b0');
				},
			});
			lunBoMove2($(".xiaomiStar .xiaomiStarList"),10,0);
		}
	},7000);

	$(".xiaomiStar .lunbotu_btn .btn_right").on('click',function(){
		var _this = $(this);
		_this.css('color','#e0e0e0');
		$(".xiaomiStar .lunbotu_btn .btn_left").css({
			'color' : '#b0b0b0',
			'cursor' : 'pointer',
		});
		_this.on({
			mouseover : function(){
				btnDisabled(_this);
			},
			mouseout : function(){
				_this.css('color', '#e0e0e0');
			},
		});
		$(".xiaomiStar .lunbotu_btn .btn_left").on({
			mouseover: function(){
				btnEnabled($(".xiaomiStar .lunbotu_btn .btn_left"));
			},
			mouseout : function(){
				$(".xiaomiStar .lunbotu_btn .btn_left").css('color', '#b0b0b0');
			},
		});
		lunBoMove($(".xiaomiStar .xiaomiStarList"),-10,-1240);
	});
	$(".xiaomiStar .lunbotu_btn .btn_left").on('click',function(){
		var _this = $(this);
		_this.css('color','#e0e0e0');
		$(".xiaomiStar .lunbotu_btn .btn_right").css({
			'color' : '#b0b0b0',
			'cursor' : 'pointer',
		});
		_this.on({
			mouseover : function(){
				btnDisabled(_this);
			},
			mouseout : function(){
				_this.css('color', '#e0e0e0');
			},
		});
		$(".xiaomiStar .lunbotu_btn .btn_right").on({
			mouseover : function(){
				btnEnabled($(".xiaomiStar .lunbotu_btn .btn_right"));
			},
			mouseout : function(){
				$(".xiaomiStar .lunbotu_btn .btn_right").css('color', '#b0b0b0');
			},
		});
		lunBoMove($(".xiaomiStar .xiaomiStarList"),10,0);
	});
	function btnEnabled(obj){
		obj.css({
			'cursor' : 'pointer',
			'color' : '#ff6700',
		});
	}
	function btnDisabled(obj){
		obj.css({
			'cursor' : 'default',
			'color' : '#e0e0e0',
		});
	}
	function lunBoMove(obj, dir , tar){
		clearInterval(btnTimer);
		btnTimer = setInterval(function(){
			var speed = parseInt(obj.css('margin-left')) + dir;
			if(speed <= tar && dir < 0){
				speed = tar;
			}
			if(speed >= tar && dir > 0){
				speed = tar;
			}
			obj.css('margin-left',speed+'px');
			if(speed == tar){
				clearInterval(btnTimer);
			}
		},10);
	}
	function lunBoMove2(obj, dir , tar){
		clearInterval(btnTimer2);
		btnTimer2 = setInterval(function(){
			var speed = parseInt(obj.css('margin-left')) + dir;
			if(speed < tar && dir < 0){
				speed = tar;
			}
			if(speed > tar && dir > 0){
				speed = tar;
			}
			obj.css('margin-left',speed+'px');
			if(speed == tar){
				clearInterval(btnTimer2);
			}
		},10);
	}

	/* 产品浏览动作 */
	$("#other .household ._head .kind li").on({
		mouseover : function(){
			index = $(this).index();
			$(this).addClass('activeli').siblings().removeClass('activeli');
			$("#other .household ._content ._content_right .rightlist").eq(index).show().siblings().hide();
		},
	});




	/* 为你推荐轮播动画 */
	var iNowRight = 1;
	var iNowLeft = 0;
	$(".command4u .lunbotu_btn .btn_right").on('click',function(){
		var _this = $(this);

		if(iNowRight == 3){
			_this.css('color','#e0e0e0');
			_this.on({
				mouseover : function(){
					btnDisabled(_this);
				},
				mouseout : function(){
					_this.css('color', '#e0e0e0');
				},
			});
		}
		$(".command4u .lunbotu_btn .btn_left").css({
			'color' : '#b0b0b0',
			'cursor' : 'pointer',
		});
		$(".command4u .lunbotu_btn .btn_left").on({
			mouseover: function(){
				btnEnabled($(".command4u .lunbotu_btn .btn_left"));
			},
			mouseout : function(){
				$(".command4u .lunbotu_btn .btn_left").css('color', '#b0b0b0');
			},
		});
		lunBoMove($(".command4u ._content .command4uul"),-30,-1226*iNowRight);
		if(iNowRight < 3){
			iNowRight++;
			iNowLeft--;
		}
	});

	$(".command4u .lunbotu_btn .btn_left").on('click',function(){
		var _this = $(this);
		iNowLeft++;
		iNowRight--;
		if(iNowLeft == 0){
			_this.css('color','#e0e0e0');
			_this.on({
				mouseover : function(){
					btnDisabled(_this);
				},
				mouseout : function(){
					_this.css('color', '#e0e0e0');
				},
			});
		}
		$(".command4u .lunbotu_btn .btn_right").css({
			'color' : '#b0b0b0',
			'cursor' : 'pointer',
		});
		$(".command4u .lunbotu_btn .btn_right").on({
			mouseover: function(){
				btnEnabled($(".command4u .lunbotu_btn .btn_right"));
			},
			mouseout : function(){
				$(".command4u .lunbotu_btn .btn_right").css('color', '#b0b0b0');
			},
		});
		lunBoMove($(".command4u ._content .command4uul"),30,1226*iNowLeft);
	});

	/* 内容的图片滑动 */
	var bookRight = 1;
	var bookLeft = 0;
	$("#other .content .book .cardright").on('click',function(){
		if(bookRight >= $("#other .content .book .contentul li").length ){
			return;
		}
		lunBoMove($("#other .content .book .contentul"),-10,-296*bookRight);
		bookRight++;
		bookLeft--;
	});
	$("#other .content .book .cardleft").on('click',function(){
		bookLeft++;
		bookRight--;
		if(bookLeft > 0){
			return;
		}
		lunBoMove($("#other .content .book .contentul"),10,296*bookLeft);
		
	});
	$("#other .content .contentsize").on({
		mouseover : function(){
			$(this).find(".cardleft").show();
			$(this).find(".cardright").show();
		},
		mouseout : function(){
			$(this).find(".cardleft").hide();
			$(this).find(".cardright").hide();
		},
	});
	$("#other .content .book .cardlist li").on('click',function(){
		var indexPrev = $("#other .content .book .cardlist .onli").index(); 
		index = $(this).index();
		$(this).addClass('onli').siblings().removeClass('onli');
		if(index > indexPrev){
			lunBoMove($("#other .content .book .contentul"),-10,-296*index);
		}
		if(index < indexPrev){
			lunBoMove($("#other .content .book .contentul"),10,296*(-index));
		}
		
	});
});


