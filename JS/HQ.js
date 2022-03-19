
/* 
JS FOR LOGIN FORM */
$(document).ready(function () {

	/* JS FOR LOGIN FORM */
/* 	var signUpButton = document.getElementById('signUp');
	var signInButton = document.getElementById('signIn');
	var container = document.getElementById('container');
	
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
	
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	}); */

});
$(document).ready(function() {

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
  $('#news-slider').click({
	dots: false,
	infinite: false,
	prevArrow: '.previous',
	nextArrow: '.next',
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		}
	}, {
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
});

/* Fancybox
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

$(".fancybox").fancybox({
	maxWidth: 1200,
	maxHeight: 600,
	width: '70%',
	height: '70%',
});

/* Toggle sidebar
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$(this).toggleClass('active');
	});
});

/* Product slider 
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
// optional
$('#blogCarousel').carousel({
	interval: 5000
});
$(function(){
	var shrinkHeader = 200;
	 $(window).scroll(function() {
	   var scroll = getCurrentScroll();
		 if ( scroll >= shrinkHeader ) {
			  $('.header').addClass('shrink');
		   }
		   else {
			   $('.header').removeClass('shrink');
		   }
	 });
   function getCurrentScroll() {
	   return window.pageYOffset;
	   }
   });


   $(document).ready(function() {
  
	var $slider = $(".slider"),
		$slideBGs = $(".slide__bg"),
		diff = 0,
		curSlide = 0,
		numOfSlides = $(".slide").length-1,
		animating = false,
		animTime = 500,
		autoSlideTimeout,
		autoSlideDelay = 6000,
		$pagination = $(".slider-pagi");
	
	function createBullets() {
	  for (var i = 0; i < numOfSlides+1; i++) {
		var $li = $("<li class='slider-pagi__elem'></li>");
		$li.addClass("slider-pagi__elem-"+i).data("page", i);
		if (!i) $li.addClass("active");
		$pagination.append($li);
	  }
	};
	
	createBullets();
	
	function manageControls() {
	  $(".slider-control").removeClass("inactive");
	  if (!curSlide) $(".slider-control.left").addClass("inactive");
	  if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
	};
	
	function autoSlide() {
	  autoSlideTimeout = setTimeout(function() {
		curSlide++;
		if (curSlide > numOfSlides) curSlide = 0;
		changeSlides();
	  }, autoSlideDelay);
	};
	
	autoSlide();
	
	function changeSlides(instant) {
	  if (!instant) {
		animating = true;
		manageControls();
		$slider.addClass("animating");
		$slider.css("top");
		$(".slide").removeClass("active");
		$(".slide-"+curSlide).addClass("active");
		setTimeout(function() {
		  $slider.removeClass("animating");
		  animating = false;
		}, animTime);
	  }
	  window.clearTimeout(autoSlideTimeout);
	  $(".slider-pagi__elem").removeClass("active");
	  $(".slider-pagi__elem-"+curSlide).addClass("active");
	  $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
	  $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
	  diff = 0;
	  autoSlide();
	}
  
	function navigateLeft() {
	  if (animating) return;
	  if (curSlide > 0) curSlide--;
	  changeSlides();
	}
  
	function navigateRight() {
	  if (animating) return;
	  if (curSlide < numOfSlides) curSlide++;
	  changeSlides();
	}
  
	$(document).on("mousedown touchstart", ".slider", function(e) {
	  if (animating) return;
	  window.clearTimeout(autoSlideTimeout);
	  var startX = e.pageX || e.originalEvent.touches[0].pageX,
		  winW = $(window).width();
	  diff = 0;
	  
	  $(document).on("mousemove touchmove", function(e) {
		var x = e.pageX || e.originalEvent.touches[0].pageX;
		diff = (startX - x) / winW * 70;
		if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
		$slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
		$slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
	  });
	});
	
	$(document).on("mouseup touchend", function(e) {
	  $(document).off("mousemove touchmove");
	  if (animating) return;
	  if (!diff) {
		changeSlides(true);
		return;
	  }
	  if (diff > -8 && diff < 8) {
		changeSlides();
		return;
	  }
	  if (diff <= -8) {
		navigateLeft();
	  }
	  if (diff >= 8) {
		navigateRight();
	  }
	});
	
	$(document).on("click", ".slider-control", function() {
	  if ($(this).hasClass("left")) {
		navigateLeft();
	  } else {
		navigateRight();
	  }
	});
	
	$(document).on("click", ".slider-pagi__elem", function() {
	  curSlide = $(this).data("page");
	  changeSlides();
	});
	
  });
  function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}