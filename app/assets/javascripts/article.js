var expandCase = function(){
  $("article .more-info").hide();
  $("article").on("click", ".js-more", function(e){
    var article = $(this).closest("article");

    $(article).find(".more-info").slideDown();
    $(article).height("auto");

    var height = $(article).find(".description").height();
    $(".more-info .image-box").height(height + 30);
    var moreDivs = $(".js-more");
    $.each(moreDivs, function(m, more){
      $(this).addClass("js-collapse").removeClass("js-more")
    });
    return false;
  });
  $("article").on("click", ".js-collapse", function(e){
    var article = $(this).closest("article");
    $(article).animate({height: 200}, 500);
    $(article).find(".more-info").slideUp();

    var collapseDivs = $(".js-collapse");
    $.each(collapseDivs, function(c, collapse){
      $(this).addClass("js-more").removeClass("js-collapse");
    });
    return false;
  });
}

$(document).ready(function(){
  var height = $(".more-info .description").height();
  $(".more-info .image-box").height(height + 30);
  expandCase();
  return false;
});
