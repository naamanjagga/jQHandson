$(document).ready(function() {
	$('p').hide();

	$('#test').hide();  //Use the correct selector to hide an element with id="test".

    $(".test").hide();  //Use the correct selector to hide all elements with class="test"

    $("*").hide();  //Use the correct selector to hide all elements in the document.

    $("[href]").hide();  //Use the correct selector to hide all elements with an href attribute.

    $("tr:odd").hide();  //Use the correct selector to hide all odd table rows in a table.

    $("p").click(function(){
      $(this).hide();
    });                        //Use the correct event to hide all <p> elements with a "click".

    $("p").dblclick(function(){
      $(this).hide();
    });                         //Use the correct event to hide all <p> elements with a "double-click".


    $("p").mouseenter(function(){
      $(this).hide();
    });                             //When the mouse pointer enters a <p> element, it should be hidden. Use the correct event to do so.

    $("input").keypress(function(){
      $(this).hide();
    });                              //If you press a keyboard key inside an <input> element, it should be hidden. Use the correct event to do so.

    $("p").on("click", function(){
      $(this).hide();
    });                              //Use the on() method to attach a click event handler to all <p> elements.

    $("p").click(function(){
        $(this).hide();
      });                            //Use a jQuery method to hide a <p> element when it is clicked on.

    $("p").click(function(){
        $(this).hide("slow");
    });                             //Use a jQuery method to hide a <p> element when it is clicked on.

    $("button").click(function(){
        $("p").show();
    });                             //Use a jQuery method to show a <p> element.

    $("button").click(function(){
        $("p").toggle();
    });                             //Use a jQuery method to toggle between hiding and showing a <p> element.

    $("div").fadeOut();              //Use a jQuery method to fade out a <div> element.

    $("div").fadeOut("slow");       //Use a jQuery method to fade out a <div> element.

    $("div").fadeTo("slow", 0.2);    //Use a jQuery method to fade a <div> element to an opacity of "0.2".

    $("button").click(function(){
       $("div").fadeToggle(1000);
    });                             //Use a jQuery method to toggle between fading in and out a <div> element, when clicking on a button

    $("div").slideUp();             //Use a jQuery method to slide up a <div> element.

    $("div").slideUp("slow");       //Use a jQuery method to slide up a <div> element.

    $("div").slideDown();           //Use a jQuery method to slide down a <div> element.

    $("button").click(function(){
       $("div").slideToggle();
    });                             //Use a jQuery method to toggle between sliding up and down a <div> element, when clicking on a button.

    $("div").animate({ left: '250px'});  //Use the animate() method to move a <div> element 250 pixels to the right.

    $("div").animate({height: '500px'});  //Use the animate() method to set the height of a <div> element to 500 pixels.

    $("div").animate({
  
        opacity: '0.4',
          
        height: '500px',
          
        width : '500px'
    });                    //Use the animate() method to set the following CSS properties for <div>:

    $("div").animate({fontSize: '100px'}, "slow"); //Use the animate() method to set the font-size of a <div> element to 100 pixels:

    $("div").stop();      //Use a jQuery method to stop the animation effect of a <div> element.

    $("div").text();      //Use a jQuery method to return the text content of a <div> element.

    $("div").html();      //Use a jQuery method to return the HTML content of a <div> element.

    $("input").val();     //Use a jQuery method to return the value of an input field.

    $("a").attr("href");  //Use a jQuery method to return the URL address of a link.

    $("div").text("Hello World");  //Use a jQuery method to change the text of a <div> element to "Hello World".

    $("input").val("John Doe");  //Use a jQuery method to change the value of an input field to "John Doe".

    $("img").attr("src", "myimage.jpg"); //Use a jQuery method to change the value of an image's src attribute to "myimage.jpg".

    $("#myLink").text("Demo");
    $("#myLink").attr("href", "https://www.demo.com");  /*  Use jQuery to change the text of a link to "Demo",

                                                         and change the value of href's attribute value to "www.demo.com".*/


    $("p").append("YES!");   //Use a jQuery method to insert the text "YES!" at the end of a <p> element.
    







});
