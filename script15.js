$(function() {
  // start up code goes here
  //alert("this works!");

  //$("#title").text("Hell world here is the H1!");

  //$("#first").html("<h2>Great Quotes</h2>");

   //append and prepend work INSIDE the given selection
    $("#first").prepend("<h2>Great Quotes</h2>");
    $("#first").append("<h3>for you to ponder</h3>");

   //before, after, insertBefor, insideAfter work OUTSIDE 
   //the given selection.

 $("#title").addClass("standout");

});







