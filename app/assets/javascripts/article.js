$(document).ready(function(){
  $("article .more-info").hide();
  $("article").on("click", "a.more", function(e){
    $(this).closest("article").find(".more-info").slideDown();
    $(this).closest("article").height("auto");
    $(this).addClass("collapse").removeClass("more")
    return false;
  });
  $("article").on("click", "a.collapse", function(e){
    $(this).closest("article").animate({height:"200px"}, 500);
    $(this).closest("article").find(".more-info").slideUp();
    $("article .more-info").animate({display: "none"}, 500);
    $(this).addClass("more").removeClass("collapse");
    return false;
  });
    return false;
});
