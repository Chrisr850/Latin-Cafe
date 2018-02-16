// initializing global variables
var menu = {
	"coffee": 2.50,
	"tea": 2.50,
	"hot chocolate": 2.00
};

var order = {};

var total_price = 0.00;

// adding menu items to website at load
// beware, there is an extremely long line of code below
$(document).ready(function(){

	$.each(menu, function(key, value) {
		$('#lhs').append('<div class=\'menuitem\' id=\'down\' id=\'' + key + '\'>' + key + ': $' + value.toFixed(2) + '<div id=\'btn\' class=\'btndown\'></div>' + '</div>');
	});

	// init animations when click on menu item
	$("#down").on("click", function(){
		$(this).removeAttr("id");
		$(this).attr("id", "up");
		console.log("up");
		var btn = $(this).find("div");
		btn.removeClass("btndown");
		btn.addClass("btnup");
	});
	$("#up").on("click", function(){
		$(this).removeAttr("id");
		$(this).attr("id", "down");
		console.log("down");
		var btn = $(this).find("div");
		btn.removeClass("btnup");
		btn.addClass("btndown");
	});

	/*
		note that this function is temporary.
		Instead of text, the JSON doc will include
		The contents of the order
	*/
	$('#orderButton').on("click", function(){
		console.log("this is function");
		var temp_var = $(this).text(); // temporary
		$.ajax({
			type: "post",
			dataType: "json",
			url: "http://10.74.1.3:5000/",
			crossDoman: true,
			contentType: "application/json",
			data: JSON.stringify({'text': temp_var}),
			processData: false
		});
	});

});

