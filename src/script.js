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


});
