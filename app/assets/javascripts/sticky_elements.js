$(document).ready(function(){
  var $window = $(window),
  $mainQuestions = $('.main-questions'),
  $tagAside = $('aside'),
  $tagAsideAnchor = $('.aside-anchor'),
  mainQuestionsTop = $mainQuestions.offset().top;

  $window.scroll(function() {
    $mainQuestions.toggleClass('sticky', $window.scrollTop() > mainQuestionsTop);
    $tagAside.toggleClass('sticky', $window.scrollTop() > mainQuestionsTop);
    $tagAsideAnchor.toggleClass('sticky', $window.scrollTop() > mainQuestionsTop);
  });
});
