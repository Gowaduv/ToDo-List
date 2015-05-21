// Build a Todo app using HTML, CSS and jQuery. 
// Your to-do app should display a list of to-do items as well as add, edit and delete them. 
// Feel free to add to anything you’d like to that application
$("#new-text").keypress(function(e) {
	if (e.which == 13) { //press enter key
		$("#add").click(); //trigger click event
		return false;
	}
});
$("#add").on("click", function() {
	var text = $("#new-text").val();

	if ($.trim($("#new-text").val()) === "") { //no empty list items
		event.preventDefault();
		alert("Please add an item");
	} else {
		$("#todoList").append("<li><input type='checkbox' class='done' /><span class='todo-content'>" + text + " </span><button class='delete'>Delete</button> <button class='edit'>Edit</button></li>");
		$("#new-text").val("");
	}

});


$(document).on("click", ".delete", function() { //delete items 
	$(this).parent().remove();
});

$(document).on("click", ".edit", function() {
	var editedText = prompt("enter corrected list item");
	$(this).parent().find(".todo-content").text(editedText);
});

$(document).on("click", ".done", function() { //line through completed items
	if ($(this).parent().css("textDecoration") === "line-through") {
		$(this).parent().css("textDecoration", "none");
	} else {
		$(this).parent().css("textDecoration", "line-through");
	}
});