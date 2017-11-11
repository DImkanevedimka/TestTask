$(document).ready(function(){

$('.play-button').click(function(){
		$('.play').css('display', 'none');
    $('#videoID')[0].play();
    $('#videoID').attr('controls','controls');
  });

  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

   $('.toggle').click(function(){
   	$('.nav-ul').toggleClass('display-nav');
   	$('.small-toggle').toggleClass('small-toggle-on');
   })
  });
