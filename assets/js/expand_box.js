$(document).ready(function() {
  $('.expandable-box').click(function(e) {
    if($(this).hasClass('open')) {
//      $('.expandable-box.out').not($(this)).removeClass('out');
      $(this).removeClass('open');
      $(this).addClass('closed');
    }
    else {
//      $('.expandable-box').not($(this)).addClass('out');
      $(this).addClass('open');
      $(this).removeClass('closed');
    }
  });
});
