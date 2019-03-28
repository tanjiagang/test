var effectSel = 1;var time = 3000;var play = true;
(function() {
    var fxselect_arr = new Array("fxSoftScale","fxPressAway","fxSideSwing","fxFortuneWheel","fxSwipe","fxPushReveal","fxSnapIn","fxLetMeIn","fxStickIt","fxArchiveMe","fxVGrowth","fxSlideBehind","fxSoftPulse","fxEarthquake","fxCliffDiving");
	var support = { animations : Modernizr.cssanimations },
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		//effectSel = document.getElementById( 'fxselect' ),
		component = document.getElementById( 'component' ),
		items = component.querySelector( 'ul.itemwrap' ).children,
		current = 0,
		itemsCount = items.length,
		isAnimating = false;
		window.onload=function(){
			setInterval(timeplay,time);
		}
	function timeplay(){
		if(!isAnimating && play){
			navigate( 'next' );
		}
	}
	function init() {
		//hideNav();
		changeEffect();
		//effectSel.addEventListener( 'change', changeEffect );
	}

	function hideNav() {
	}

	function showNav() {
	}

	function changeEffect() {
		component.className = component.className.replace(/\bfx.*?\b/g, '');
		if( effectSel ) {
			classie.addClass( component, fxselect_arr[effectSel-1] );
			showNav();
		}
		else {
			hideNav();
		}
        
	}

	function navigate( dir ) {
		if( isAnimating || !effectSel ) return false;
		isAnimating = true;
		var cntAnims = 0;


		var currentItem = items[ current ];

		if( dir === 'next' ) {
			current = current < itemsCount - 1 ? current + 1 : 0;
		}
		else if( dir === 'prev' ) {
			current = current > 0 ? current - 1 : itemsCount - 1;
		}
		var nextItem = items[ current ];
		var onEndAnimationCurrentItem = function() {
			this.removeEventListener( animEndEventName, onEndAnimationCurrentItem );
			classie.removeClass( this, 'current' );
			classie.removeClass( this, dir === 'next' ? 'navOutNext' : 'navOutPrev' );
			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		}
		var onEndAnimationNextItem = function() {
			this.removeEventListener( animEndEventName, onEndAnimationNextItem );
			classie.addClass( this, 'current' );
			classie.removeClass( this, dir === 'next' ? 'navInNext' : 'navInPrev' );
			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		}

		if( support.animations ) {
			currentItem.addEventListener( animEndEventName, onEndAnimationCurrentItem );
			nextItem.addEventListener( animEndEventName, onEndAnimationNextItem );
		}
		else {
			onEndAnimationCurrentItem();
			onEndAnimationNextItem();
		}
		classie.addClass( currentItem, dir === 'next' ? 'navOutNext' : 'navOutPrev' );
		classie.addClass( nextItem, dir === 'next' ? 'navInNext' : 'navInPrev' );
	}

	init();
	
	
})();
var img = document.getElementById('banner_img');
var img_height;
img.onload = function(){ 
img_height = $("#banner_img").height();
$(".component-fullwidth LI").height(img_height);
}
$(window).resize(function() {  
	img_height  = $("#banner_img").height();
	$(".component-fullwidth LI").height(img_height);
});  