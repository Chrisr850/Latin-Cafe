// initializing global variables
var menu = {
	"coffee": 2.50,
	"tea": 2.50,
	"hot chocolate": 2.00
};
var order = {};
var total_price = 0.00;
var button_begin = '<button id=\'down\' id=\'';
var div_begin = '<div id=\'btn\' class=\'btndown\'></div>';

$(document).ready(function(){

	// adding menu items to website at load
	// beware, there is an extremely long line of code below
	$.each(menu, function(key, value) {
		$('#lhs').append("<div id=\'" + key + "\' class=\'orderBigBox\'>"+ button_begin+key+'\'>'+key+': $'+value.toFixed(2)+div_begin+'</button><div id=\'orderContainer\' class=\'hidden\'>Amt: <textarea rows=\'1\' cols=\'5\'></textarea><div class=\'addButton\'>Add to order</div></div></div>');
		order[key] = 0;
	});

	// init animations when click on menu item
	$("button").on("click", function(){
		if($(this).attr("id") === "down") {
			$(this).removeAttr("id");
			$(this).attr("id", "up");
			var btn = $(this).find("#btn");
			btn.removeClass("btndown");
			btn.addClass("btnup");
			$(this).siblings("#orderContainer").removeClass("hidden");
		}
		else {
			$(this).removeAttr("id");
			$(this).attr("id", "down");
			var btn = $(this).find("#btn");
			btn.removeClass("btnup");
			btn.addClass("btndown");
			$(this).siblings("#orderContainer").addClass("hidden");
		}
	});

	$(".addButton").on("click", function(){
		var type_of_thing = $(this).parent().parent().attr("id");
		var amt = parseInt($(this).siblings("textarea").val());
		var price = menu[type_of_thing] * amt;
		total_price += price;
		order[type_of_thing] += amt;
	});

	/*
		note that this function is temporary.
		Instead of text, the JSON doc will include
		The contents of the order
	*/
	$('#orderButton').on("click", function(){
		var temp_var = $(this).text(); // temporary
		$.ajax({
			type: "post",
			dataType: "json",
			url: "http://10.74.1.3:5000/",
			crossDomain: true,
			contentType: "application/json",
			data: JSON.stringify({'text': temp_var}),
			processData: false
		});
	});

});
