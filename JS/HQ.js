
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