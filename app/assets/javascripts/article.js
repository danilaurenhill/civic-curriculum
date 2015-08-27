$(document).ready(function(){
  $("article .more-info").hide();
  var height = $(".more-info .description").height();
  $(".more-info .image-box").height(height + 30);
  $("article").on("click", "a.more", function(e){
    $(this).closest("article").find(".more-info").slideDown();
    $(this).closest("article").height("auto");
    $(this).addClass("collapse").removeClass("more")
    $(this).html("<h4>Less</h4>")
    var height = $(".more-info .description").height();
    $(".more-info .image-box").height(height + 30);
    var height = $(".more-info .description").height();
    $(".more-info .image-box").height(height + 30);
    return false;
  });
  $("article").on("click", "a.collapse", function(e){
    $(this).closest("article").animate({height:"200px"}, 500);
    $(this).closest("article").find(".more-info").slideUp();
    $("article .more-info").animate({display: "none"}, 500);
    $(this).addClass("more").removeClass("collapse");
    $(this).html("<h4>More</h4>")
    var height = $(".more-info .description").height();
    $(".more-info .image-box").height(height + 30);
    return false;
  });
  return false;
});
