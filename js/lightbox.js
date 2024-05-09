(function ($) {
    //ready
    $(function () {
        // console.log("hello");

        $("img.shop").click(function () {
        // console.log(this);
        // var thisImage = $(this);
        var thisImage = this;
        var thisClone = $(this).clone();

        // var thisImagedup = thisImage.toString();

        var xWidth = thisImage.width;
        var xWidthPX = xWidth.toString() + "px";
        var xHeight = thisImage.height;
        var xHeightPX = xHeight.toString() + "px";


        var xPos = $(thisImage).offset().left;
        var yPos = $(thisImage).offset().top;

        console.log(xWidth);
        console.log(xHeight);
        console.log(xWidthPX);
        console.log(xPos);
        console.log(yPos);

        // console.log('x: ' + x + ' y: ' + y);
        // $("#overlay").append(thisImage).css("width", xWidth);
        $("#overlay").append(thisClone).css({'position': 'absolute','top': yPos, 'left': xPos, 'width': xWidth}); 

        // $("p:first").addClass("intro");

        // $("#overlay").animate({
        //     opacity: 0.8,
        //     left: "+=50",
        //     height: "toggle"
        //     }, 2000, function() {
        // });


        $("#overlay").animate({
            left: "0",
            top: "20",
            width: "100%"
            }, 800, function() {
        });




  // $( "#overlay" ).animate({
  //   left: "0",
  //   top: "20",
  //   width: "100%",

  // }, {
  //   duration: 5000,
  //   specialEasing: {
  //     left: "linear",
  //     height: "linear"
  //   },
  //   complete: function() {
  //     console.log( "finished");
  //   }
  // });




        });






    });







}(jQuery));