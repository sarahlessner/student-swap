$(document).ready(function(){
  // console.log("hello from animation.js");
  $(document).on("mouseleave","#iron_box, #broom", function(){
    // console.log(this.id);
    if(this.id === "iron_box"){
      TweenMax.fromTo("#iron_box",2,{
        rotation:360,
        ease:Back.easeOut,
        yoyo:true
      },{
        rotation:0,
        ease:Back.easeOut,
        yoyo:true
      });
    }

    if(this.id === "broom"){
      TweenMax.fromTo("#broom",2,{
        rotation:360,
        ease:Back.easeOut,
        yoyo:true
      },{
        rotation:0,
        ease:Back.easeOut,
        yoyo:true
      });
    }
  });

  var pos = true;

  $(document).on("click", "#iron_box, #broom", function(){
    if(pos){
      TweenMax.to("#broom",2,{
        x:250,
        ease:Back.easeOut,
        yoyo:true
      });
      TweenMax.to("#iron_box",2,{
        x:-250,
        ease:Back.easeOut,
        yoyo:true
      });
      pos = false;
    } else {
      TweenMax.to("#broom",2,{
        x:0,
        ease:Back.easeOut,
        yoyo:true
      });
      TweenMax.to("#iron_box",2,{
        x:0,
        ease:Back.easeOut,
        yoyo:true
      });
      pos = true;
      // console.log("the positions have switched!");
    }

  });

});
