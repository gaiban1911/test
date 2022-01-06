
/* 
JS FOR LOGIN FORM */
$(document).ready(function() {
	(function () {
		$('.btn').click(function () {
		  $(this).toggleClass('active');
		  return $('.box').toggleClass('open');
		});
	  
	  }).call(this);
	/* JS FOR LOGIN FORM */
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');
	
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
	
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});

		/* END JS FOR LOGIN FORM */
	const $app = $('.app');
	const $img = $('.app__img');
	const $pageNav1 = $('.pages__item--1');
	const $pageNav2 = $('.pages__item--2');
	let animation = true;
	let curSlide = 1;
	let scrolledUp, nextSlide;
	
	let pagination = function(slide, target) {
		animation = true;
		if (target === undefined) {
			nextSlide = scrolledUp ? slide - 1 : slide + 1;
		} else {
			nextSlide = target;
		}
		
		$('.pages__item--' + nextSlide).addClass('page__item-active');
		$('.pages__item--' + slide).removeClass('page__item-active');
		
		$app.toggleClass('active');
		setTimeout(function() {
			animation = false;
		}, 3000)
	}
	
	let navigateDown = function() {
		if (curSlide > 1) return;
		scrolledUp = false;
		pagination(curSlide);
		curSlide++;
	}

	let navigateUp = function() {
		if (curSlide === 1) return;
		scrolledUp = true;
		pagination(curSlide);
		curSlide--;
	}

	setTimeout(function() {
		$app.addClass('initial');
	}, 1500);

	setTimeout(function() {
		animation = false;
	}, 4500);
	
/* 	$(document).on('mousewheel DOMMouseScroll', function(e) {
		var delta = e.originalEvent.wheelDelta;
		if (animation) return;
		if (delta > 0 || e.originalEvent.detail < 0) {
			navigateUp();
		} else {
			navigateDown();
		}
	});

	$(document).on("click", ".pages__item:not(.page__item-active)", function() {
		if (animation) return;
		let target = +$(this).attr('data-target');
		pagination(curSlide, target);
		curSlide = target;
	}); */
});

(function() {
	$(document).ready(function() {
	  var walkthrough;
	  walkthrough = {
		index: 0,
		nextScreen: function() {
		  if (this.index < this.indexMax()) {
			this.index++;
			return this.updateScreen();
		  }
		},
		prevScreen: function() {
		  if (this.index > 0) {
			this.index--;
			return this.updateScreen();
		  }
		},
		updateScreen: function() {
		  this.reset();
		  this.goTo(this.index);
		  return this.setBtns();
		},
		setBtns: function() {
		  var $lastBtn, $nextBtn, $prevBtn;
		  $nextBtn = $('.next-screen');
		  $prevBtn = $('.prev-screen');
		  $lastBtn = $('.finish');
		  if (walkthrough.index === walkthrough.indexMax()) {
			$nextBtn.prop('disabled', true);
			$prevBtn.prop('disabled', false);
			return $lastBtn.addClass('active').prop('disabled', false);
		  } else if (walkthrough.index === 0) {
			$nextBtn.prop('disabled', false);
			$prevBtn.prop('disabled', true);
			return $lastBtn.removeClass('active').prop('disabled', true);
		  } else {
			$nextBtn.prop('disabled', false);
			$prevBtn.prop('disabled', false);
			return $lastBtn.removeClass('active').prop('disabled', true);
		  }
		},
		goTo: function(index) {
		  $('.screen').eq(index).addClass('active');
		  return $('.dot').eq(index).addClass('active');
		},
		reset: function() {
		  return $('.screen, .dot').removeClass('active');
		},
		indexMax: function() {
		  return $('.screen').length - 1;
		},
		closeModal: function() {
		  $('.walkthrough, .shade').removeClass('reveal');
		  return setTimeout(((function(_this) {
			return function() {
			  $('.walkthrough, .shade').removeClass('show');
			  _this.index = 0;
			  return _this.updateScreen();
			};
		  })(this)), 200);
		},
		openModal: function() {
		  $('.walkthrough, .shade').addClass('show');
		  setTimeout(((function(_this) {
			return function() {
			  return $('.walkthrough, .shade').addClass('reveal');
			};
		  })(this)), 200);
		  return this.updateScreen();
		}
	  };
	  $('.next-screen').click(function() {
		return walkthrough.nextScreen();
	  });
	  $('.prev-screen').click(function() {
		return walkthrough.prevScreen();
	  });
	  $('.close').click(function() {
		return walkthrough.closeModal();
	  });
	  $('.open-walkthrough').click(function() {
		return walkthrough.openModal();
	  });
	  walkthrough.openModal();
	  return $(document).keydown(function(e) {
		switch (e.which) {
		  case 37:
			walkthrough.prevScreen();
			break;
		  case 38:
			walkthrough.openModal();
			break;
		  case 39:
			walkthrough.nextScreen();
			break;
		  case 40:
			walkthrough.closeModal();
			break;
		  default:
			return;
		}
		e.preventDefault();
	  });
	});
  
  }).call(this);
 $(document).ready(function() {
	$(".hover").mouseleave(
		function () {
		  $(this).removeClass("hover");
		}
	  );
  $('body.hero-anime').removeClass('hero-anime');
    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";
  
    function pagination() {
      scrolling = true;
  
      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");
  
      setTimeout(function() {
        scrolling = false;
      }, animTime);
    };
  
    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    };
  
    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    };
  
    $(document).on("mousewheel DOMMouseScroll", function(e) {
      if (scrolling) return;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    });
  
    $(document).on("keydown", function(e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
  
  }); 
  

/* Please ❤ this if you like it! */


(function($) { "use strict";

$(function() {
  var header = $(".start-style");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 10) {
      header.removeClass('start-style').addClass("scroll-on");
    } else {
      header.removeClass("scroll-on").addClass('start-style');
    }
  });
});		
  
//Animation



//Menu On Hover
  
$('body').on('mouseenter mouseleave','.nav-item',function(e){
    if ($(window).width() > 750) {
      var _d=$(e.target).closest('.nav-item');_d.addClass('show');
      setTimeout(function(){
      _d[_d.is(':hover')?'addClass':'removeClass']('show');
      },1);
    }
});	

//Switch light/dark

$("#switch").on('click', function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $("#switch").removeClass("switched");
  }
  else {
    $("body").addClass("dark");
    $("#switch").addClass("switched");
  }
});  

})(jQuery); 


(function() {

	function init(item) {
		var items = item.querySelectorAll('li'),
        current = 0,
        autoUpdate = true,
        timeTrans = 4000;
        
		//create nav
		var nav = document.createElement('nav');
		nav.className = 'nav_arrows';

		//create button prev
		var prevbtn = document.createElement('button');
		prevbtn.className = 'prev';
		prevbtn.setAttribute('aria-label', 'Prev');

		//create button next
		var nextbtn = document.createElement('button');
		nextbtn.className = 'next';
		nextbtn.setAttribute('aria-label', 'Next');

		//create counter
		var counter = document.createElement('div');
		counter.className = 'counter';
		counter.innerHTML = "<span>1</span><span>"+items.length+"</span>";

		if (items.length > 1) {
			nav.appendChild(prevbtn);
			nav.appendChild(counter);
			nav.appendChild(nextbtn);
			item.appendChild(nav);
		}

		items[current].className = "current";
		if (items.length > 1) items[items.length-1].className = "prev_slide";

		var navigate = function(dir) {
			items[current].className = "";

			if (dir === 'right') {
				current = current < items.length-1 ? current + 1 : 0;
			} else {
				current = current > 0 ? current - 1 : items.length-1;
			}

			var	nextCurrent = current < items.length-1 ? current + 1 : 0,
				prevCurrent = current > 0 ? current - 1 : items.length-1;

			items[current].className = "current";
			items[prevCurrent].className = "prev_slide";
			items[nextCurrent].className = "";

			//update counter
			counter.firstChild.textContent = current + 1;
		}
    
    item.addEventListener('mouseenter', function() {
			autoUpdate = false;
		});

		item.addEventListener('mouseleave', function() {
			autoUpdate = true;
		});

		setInterval(function() {
			if (autoUpdate) navigate('right');
		},timeTrans);
    
		prevbtn.addEventListener('click', function() {
			navigate('left');
		});

		nextbtn.addEventListener('click', function() {
			navigate('right');
		});

		//keyboard navigation
		document.addEventListener('keydown', function(ev) {
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					break;
				case 39:
					navigate('right');
					break;
			}
		});

		// swipe navigation
		// from http://stackoverflow.com/a/23230280
		item.addEventListener('touchstart', handleTouchStart, false);        
		item.addEventListener('touchmove', handleTouchMove, false);
		var xDown = null;
		var yDown = null;
		function handleTouchStart(evt) {
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
				if ( xDiff > 0 ) {
					/* left swipe */
					navigate('right');
				} else {
					navigate('left');
				}
			} 
			/* reset values */
			xDown = null;
			yDown = null;
		};


	}

	[].slice.call(document.querySelectorAll('.cd-slider')).forEach( function(item) {
		init(item);
	});

})();

var $triangleTweenTarget = $('#triangle-tween-target');
var $playTriangle = $('#play-triangle');
MorphSVGPlugin.convertToPath($triangleTweenTarget);
MorphSVGPlugin.convertToPath($playTriangle);



var clicked = false;
// In the next line, .progress(1).pause(0) is a tip from @greensock to force processing of morphs immediately
var morph = TweenMax.to('#play-triangle', 0.5, 
                        { morphSVG: $triangleTweenTarget,
                          scale: 5,
                          transformOrigin: "center center"
                        }).progress(1).pause(0);
var $pbContainer = $('#play-button-container');
var $buttonCircleSvg = $('#button-circle-svg');
var $buttonCircle = $('#button-circle');
var $playTriangleSvg = $('#play-triangle-svg');
$pbContainer.on('click', function(){
  if(!clicked){
    clicked =true;
    TweenMax.to($buttonCircleSvg, 0.2, {scale: getScale(), opacity: 0.8});
    TweenMax.to($buttonCircle, 0.5, {fill: '#333333'});
    morph.play();
    TweenMax.to($playTriangleSvg, 0.5, 
                { width: $(window).width(), 
                  height: $(window).height(),
                  x: -1 * $pbContainer.offset().left,
                  y: -1 * $pbContainer.offset().top,
                  onStart: playVideo,
                  onComplete: moveVideo
                });
    
  } else {
    clicked = false;
    TweenMax.to($buttonCircleSvg, 0.5, {scale: 1});
    morph.reverse();
    TweenMax.to($buttonCircle, 0.5, {fill: '#DDDDDD'});
    TweenMax.to($playTriangleSvg, 0.5, 
                { width: $pbContainer.width(), 
                  height: $pbContainer.height(),
                  x: 0,
                  y: 0,
                  scale: 1,
                  onStart: stopVideo
                });
  }
  
  
  //get the minimum scale for the play button to cover the screen
  function getScale() {
    let buttonPosition = 
        { x: $playTriangleSvg.offset().left + ($playTriangleSvg.width()/2),
          y: $playTriangleSvg.offset().top + ($playTriangleSvg.height()/2)
        };
    
    let $window = $(window);
    let farthestCorner = 
        { x: (buttonPosition.x > $window.width() / 2) ? 0 : $window.width(),
          y: (buttonPosition.y > $window.height() / 2) ? 0 : $window.height()
        };
    
    let a = Math.abs(buttonPosition.x - farthestCorner.x);
    let b = Math.abs(buttonPosition.y - farthestCorner.y);
    let hypotenuse = Math.sqrt(a*a + b*b);
    
    return hypotenuse / ($playTriangleSvg.width() / 2);
  }
  
  
  
  function playVideo() {
    player.playVideo();
  }
  
  
  
  var $youtubeVideo = $('#youtube-video');
  var $playTriangle = $('#play-triangle');
  function moveVideo() {   
    let pbcOffset = $pbContainer.offset();  
    let boundingBox = $playTriangle[0].getBoundingClientRect();
    TweenMax.set($youtubeVideo, 
                 { x: boundingBox.left - pbcOffset.left, 
                   y: boundingBox.top - pbcOffset.top,
                   width: boundingBox.width,
                   height: boundingBox.height});
    showVideo();
    
  }
  
  
  
  function showVideo() {    
    TweenMax.to($youtubeVideo, 0.3, {opacity: 1});
    $youtubeVideo.addClass('-visible');
  }
  
  
  
  function stopVideo() {    
    player.stopVideo();
    $youtubeVideo.removeClass('-visible');
    TweenMax.to($youtubeVideo, 0, {opacity: 0});
  }
  
  
  
});


var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-video');  
}