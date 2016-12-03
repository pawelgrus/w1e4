$(document).ready(function() {

    $("#toogle").on("click", function() {
    	var opened = $(".hamburger").data("opened");

    	$(".hamburger").stop().transition({
    		x: opened ? 0 : $(".hamburger").outerWidth()
    	});

    	$(".hamburger").data("opened", opened ? false : true);
    });
});