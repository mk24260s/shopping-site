$(window).load(function(){
  $("#display_li img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});
