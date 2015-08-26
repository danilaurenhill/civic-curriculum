$(document).ready(function(){
  $("article .more-info").hide();
  $("a.expand").on("click", function(e){
    $(this).closest("article").find(".more-info").slideToggle("slow");
    // $(this).closest("article").find("p.description").slideToggle("slow");
    return false;
  });
});
