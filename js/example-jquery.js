(function(){

  $('#slideToggle').on('click',function(){
          $("p").slideToggle("Not work.");
      });
  $('#remove').on('click',(function(){
        $("p").remove("This is my another work");
    });
});
    $("#hide").click(function(){
        $("p").hide("Working is hard");
    });
    $("#show").click(function(){
        $("p").show("Working is hard");
    });
});
