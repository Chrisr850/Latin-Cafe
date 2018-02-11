// note that this function is temporary.
// Instead of text, the JSON doc will include
// The contents of the order
$('#orderButton').on('click', function(){
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