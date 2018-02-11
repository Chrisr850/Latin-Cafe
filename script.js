var menu = {
	"coffee": 2.50,
	"tea": 2.50,
	"hot chocolate": 2.00
};

var total_price = 0.00

function load_divs() {
	$.each(menu, function(key, value) {
		$('#lhs').append('<div class=\'menuitem\' id=\'' + key + '\'>' + key + ': $' + value.toFixed(2) + '</div>');
	})
}

$(document).ready(function(){
	load_divs();
});

// note that this function is temporary.
// Instead of text, the JSON doc will include
// The contents of the order
$('#orderButton').on('click', function() {
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