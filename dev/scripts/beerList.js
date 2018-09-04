const beerList = {};
let pageNum = 1;
const header = document.getElementById("header-placeholder");
const sticky = header.offsetTop;

beerList.stickyElement = () =>{
	if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

beerList.init = (page) =>{
	console.log(page);
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			page: page
		}
	}).then((res) =>{
		const beerArray = res;
		beerList.displayBeers(beerArray);
	});
}

beerList.displayBeers = (beerObj) =>{
	$(".beerList").empty();
	beerObj.forEach((beer) =>{
		var $title = $("<h2>").text(beer.name);
		var $tagline = $("<p>").text(beer.tagline);
		var $image = $("<img>").addClass("listImage").attr("src", beer.image_url);
		var $textDiv = $("<div>").addClass("text").append($title, $tagline)
		var $overlayDiv = $("<div>").addClass("overlay").append($textDiv);
		var $linkEl = $("<a>").attr("href", "beerInfo.html?id=" + beer.id).append($overlayDiv);
		var $containerDiv = $("<div>").addClass("listContainer").append($image, $linkEl);
		$(".beerList").append($containerDiv);
	});

}

$(function () {
	$("#header-placeholder").load("headerBar.html header");
	$("#footer-placeholder").load("headerBar.html footer");
	$(".prevBut").attr("disabled", "disabled");

	beerList.init(pageNum);

	window.onscroll = function() {beerList.stickyElement()};

	$(".nextBut").on("click", function() {
		if (pageNum < 9) {
			pageNum++;
			beerList.init(pageNum);
			$(".prevBut").removeAttr("disabled");
		}
		else{
			pageNum++;
			beerList.init(pageNum);
			$(".nextBut").attr("disabled", "disabled");
		}
	});
	$(".prevBut").on("click", function(){
		if (pageNum > 2) {
			pageNum--;
			beerList.init(pageNum);
			$(".nextBut").removeAttr("disabled");
		}
		else{
			pageNum--;
			beerList.init(pageNum);
			$(".prevBut").attr("disabled", "disabled");
		}
	});
});