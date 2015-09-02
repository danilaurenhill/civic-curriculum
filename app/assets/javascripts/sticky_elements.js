$(document).ready(function(){
  var $window = $(window),
  $mainQuestions = $('.main-questions'),
  $tagAside = $('aside'),
  $tagAsideAnchor = $(".aside-anchor"),
  mainQuestionsTop = $mainQuestions.offset().top;

  $window.scroll(function() {
    $mainQuestions.toggleClass('sticky', $window.scrollTop() > mainQuestionsTop);
    $tagAside.toggleClass('sticky', $window.scrollTop() > mainQuestionsTop);
    $tagAsideAnchor.toggleClass('sticky', $window.scrollTop() > mainQuestionsTop);
    if($window.scrollTop() > mainQuestionsTop){
      $tagAside.width($(".aside-anchor.sticky").width()-30);
      $(".main").css("margin-top", "120px");
    } else {
      $(".main").css("margin-top", "0px");
      $tagAside.width($("100%"));
    };
  });
});
