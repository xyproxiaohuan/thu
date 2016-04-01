(function(){

  $('#slideToggle').on('click',function(){
          $("h2").slideToggle('Not work.');
      });
  $('#remove').on('click',function(){
        $("h3").remove();
      });
  // $(document).ready(function(){
  //   $("#hide").click(function(){
  //   $("p").hide();
  // });

   $("#hide").on('click',function(){
   $("p").hide();
 });
})();
   $("#show").on('click',function(){
   $("p").show();
});
