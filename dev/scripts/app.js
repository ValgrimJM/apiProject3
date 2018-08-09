

const beer = {};

beer.init = () => {
	console.log("initialization");
	let winWidth = window.innerWidth;
	console.log(winWidth);
	let numOfElements = Math.floor(winWidth / 200);
	console.log(numOfElements);
	let elementWidth = Math.floor(100 / numOfElements);
	for (let i = 0; i <= numOfElements; i++) {
		$.ajax({
			url: "https://api.punkapi.com/v2/beers/random",
			method: "GET",
			dataType: "json"
		}).then((res) => {
			console.log(res);
				var $title = $("<h2>").text(res[0].name);
				var $tagline = $("<p>").text(res[0].tagline);
				var $image = $("<img>").addClass("image").attr("src", res[0].image_url);
				var $textDiv = $("<div>").addClass("text").append($title, $tagline)
				var $overlayDiv = $("<div>").addClass("overlay").append($textDiv);
				var $linkEl = $("<a>").attr("href", "beerinfo.html?id=" + res[0].id).append($overlayDiv);
				var $containerDiv = $("<div>").addClass("container").append($image, $linkEl);
				$(".container").css("width", `${elementWidth}%`);
				$(".photoBar").append($containerDiv);
		});
	}
}

$(document).ready(function() {
	// for some reason you must specify the elements of the html file you want loaded.  *look into later*
	$("#header-placeholder").load("headerBar.html header");
	$("#footer-placeholder").load("headerBar.html footer");
	// $.get("headerBar.html", function(data){
	// 	console.log("test");
	// 	// $("#header-placeholder").replaceWith(data);
	// });
	beer.init();
	$("form").on("submit", function(e){
      e.preventDefault();
      console.log("test");
  	});

});