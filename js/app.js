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
    // play hadouken sound
    console.log('mousedown');
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    // show hadouken and animate it to the right of the screen
  })
  .mouseup(function() {
    console.log('mouseup');
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    // ryu goes back to his ready position
  });
});