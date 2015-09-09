$(document).ready(function(){
  $mainQuestions = $('.main-questions'),
  $tagAside = $('aside'),
  $tagAsideAnchor = $(".aside-anchor"),
  mainQuestionsTop = $mainQuestions.offset().top;
  sidebarTop = $tagAsideAnchor.offset().top;

  $(window).scroll(function() {
    // $mainQuestions.toggleClass('sticky', $(window).scrollTop() >= mainQuestionsTop);
    // $tagAside.toggleClass('sticky', $(window).scrollTop() >= mainQuestionsTop);
    // $tagAsideAnchor.toggleClass('sticky', $(window).scrollTop() >= mainQuestionsTop);

    if($(window).scrollTop() >= sidebarTop){
      // $mainQuestions.addClass("sticky");
      $tagAsideAnchor.addClass("sticky");
      $tagAside.addClass("sticky");
      $tagAside.width($(".aside-anchor.sticky").width()-30);
      // $(".main").css("margin-top", "120px");
    } else {
      // $mainQuestions.removeClass("sticky");
      $tagAside.removeClass("sticky");
      $tagAsideAnchor.removeClass("sticky");
      $tagAside.width($("100%"));
      // $(".main").css("margin-top", "0px");
    };
  });
});
