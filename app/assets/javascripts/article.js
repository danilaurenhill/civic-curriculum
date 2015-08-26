$(document).ready(function(){
  $("article p.description").hide();
  $("a.expand").on("click", function(e){
    $(this).closest("article").find("p.description").slideToggle("slow");
    return false;
  });
});