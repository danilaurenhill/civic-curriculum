$(document).ready(function(){

  $("article .more-info").hide();
  var height = $(".more-info .description").height();
  $(".more-info .image-box").height(height + 30);
  $("article").on("click", ".more", function(e){
    $(this).closest("article").find(".more-info").slideDown();
    $(this).closest("article").height("auto");
    $(this).addClass("collapse").removeClass("more")
    var height = $(".more-info .description").height();
    $(".more-info .image-box").height(height + 30);
    var height = $(".more-info .description").height();
    $(".more-info .image-box").height(height + 30);
    return false;
  });
  $("article").on("click", ".collapse", function(e){
    $(this).closest("article").animate({height:"200px"}, 500);
    $(this).closest("article").find(".more-info").slideUp();
    $("article .more-info").animate({display: "none"}, 500);
    $(this).addClass("more").removeClass("collapse");
    var height = $(".more-info .description").height();
    $(".more-info .image-box").height(height + 30);
    return false;
  });
  return false;
});
