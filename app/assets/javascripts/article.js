var expandCase = function(){
  $("article .more-info").hide();
  $("article").on("click", ".js-more", function(e){
    var moreDivs = $(".js-more");
    $(this).closest("article").find(".more-info").slideDown();
    $(this).closest("article").height("auto");
    $.each(moreDivs, function(m, more){
      $(this).addClass("js-collapse").removeClass("js-more")
    });
    var height = $(".more-info .description").height();
    $(".more-info .image-box").height(height + 30);
    return false;
  });
  $("article").on("click", ".js-collapse", function(e){
    var collapseDivs = $(".js-collapse");
    $(this).closest("article").animate({height:"200px"}, 500);
    $(this).closest("article").find(".more-info").slideUp();
    $.each(collapseDivs, function(c, collapse){
      $(this).addClass("js-more").removeClass("js-collapse");
    });
    $("article .more-info").animate({display: "none"}, 500);
    var height = $(".more-info .description").height();
    $(".more-info .image-box").height(height + 30);
    return false;
  });
}

$(document).ready(function(){
  var height = $(".more-info .description").height();
  $(".more-info .image-box").height(height + 30);
  expandCase();
  return false;
});
