$(document).ready(function() {
  $(".ryu").mouseenter(function(){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  }) //removing the ; allows it to be chained
  .mouseleave(function() { //code chaining to .ryu
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken(); // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1040px'},
      500,
      function() { //this function gets called when the animation completes. We are saying to hide the hadouken then set its left value back to 540px
        $(this).hide();
        $(this).css('left', '540px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    // ryu goes back to his ready position
  });
});
//play audio
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}