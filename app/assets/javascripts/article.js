var leftAlignArticle = function(){
  imageBoxes = $(".article-synopsis > .image-box");
  $.each(imageBoxes, function(i, imageBox){
    // height = $(this).closest("article").find(".preview").height();
    // $(this).height(height);
    $(this).closest("article").find(".article-text").css("overflow", "hidden");
  });
};

var expandCase = function(){
  $("article").on("click", ".js-more", function(e){
    var article = $(this).closest("article");
    $(article).find(".article-text").css("overflow", "visible");
    height = $(article).find(".preview").height();
    $(article).find(".image-box").height(height+100);
    $(article).height("auto");
    $(article).find(".article-text").height("auto");
    $(article).find(".more-info").slideDown();

    var moreDivs = $(".js-more");
    $.each(moreDivs, function(m, more){
      $(this).addClass("js-collapse").removeClass("js-more")
    });

    return false;
  });

  $("article").on("click", ".js-collapse", function(e){
    var article = $(this).closest("article");
    $(article).find(".article-text").css("overflow", "hidden");
    $(article).find(".image-box").height(100);
    $(article).height("150px");
    $(article).find(".article-text").height("130px");

    var collapseDivs = $(".js-collapse");
    $.each(collapseDivs, function(c, collapse){
      $(this).addClass("js-more").removeClass("js-collapse");
    });
  });

  // $("article .more-info").hide();

  // $("article").on("click", ".js-more", function(e){
  //   var article = $(this).closest("article");

  //   $(article).find(".more-info").slideDown();
  //   $(article).height("auto");

  //   var height = $(article).find(".description").height();
  //   $(".more-info .image-box").height(height + 50);
  //   var moreDivs = $(".js-more");
  //   $.each(moreDivs, function(m, more){
  //     $(this).addClass("js-collapse").removeClass("js-more")
  //   });
  //   return false;
  // });

  // $("article").on("click", ".js-collapse", function(e){
  //   var article = $(this).closest("article");
  //   $(article).animate({height: 200}, 500);
  //   $(article).find(".more-info").slideUp();

  //   var collapseDivs = $(".js-collapse");
  //   $.each(collapseDivs, function(c, collapse){
  //     $(this).addClass("js-more").removeClass("js-collapse");
  //   });
  //   return false;
  // });
}

$(document).ready(function(){
  var height = $(".more-info .description").height();
  $(".more-info .image-box").height(height + 30);
  var imageBoxes = $(".article-synopsis > .image-box");
  console.log(imageBoxes.length);
  $.each(imageBoxes, function(i, imageBox){
    height = $(this).closest("article").find(".article-text").height();
    $(this).height(height);
    console.log(height);
  });
  expandCase();
  return false;
});
