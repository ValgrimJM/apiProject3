
const search = {};
const header = document.getElementById("header-placeholder");
const sticky = header.offsetTop;
var butDiv = document.getElementById("searchButtons");
var btns = butDiv.getElementsByClassName("btn");
let queryString = window.location.href;
let searchText =  queryString.substring(queryString.lastIndexOf("=")+1).replace("+", "_");

search.stickyElement = () =>{
	if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
search.init = (searchString) => {
	$(".beerList").empty();
	console.log(searchString);
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			beer_name: searchString
		}
	}).then((res) => {
		if (res.length === 0) {
			var $noResults = $("<h2>").text("No Results Found.  Try Another search / option.");
			$(".beerList").append($noResults);
		}
		else{
			const beerArray = res;
			search.displayBeers(beerArray);
		}
	});
}

search.hopsSearch = (searchString) => {
	$(".beerList").empty();
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			hops: searchString
		}
	}).then((res) => {
		if (res.length === 0) {
			var $noResults = $("<h2>").text("No Results Found.  Try Another search / option.");
			$(".beerList").append($noResults);
		}
		else{
			const beerArray = res;
			search.displayBeers(beerArray);
		}
	});
}

search.maltSearch = (searchString) => {
	$(".beerList").empty();
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			malt: searchString
		}
	}).then((res) => {
		if (res.length === 0) {
			var $noResults = $("<h2>").text("No Results Found.  Try Another search / option.");
			$(".beerList").append($noResults);
		}
		else{
			const beerArray = res;
			search.displayBeers(beerArray);
		}
	});
}

search.foodSearch = (searchString) => {
	$(".beerList").empty();
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			food: searchString
		}
	}).then((res) => {
		console.log(res);
		if (res.length === 0) {
			var $noResults = $("<h2>").text("No Results Found.  Try Another search / option.");
			$(".beerList").append($noResults);
		}
		else{
			const beerArray = res;
			search.displayBeers(beerArray);
		}
	});
}



search.displayBeers = (beerObj) =>{
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

$(function() {
	$("#header-placeholder").load("headerBar.html header");
	$("#footer-placeholder").load("headerBar.html footer");
	search.init(searchText);

	window.onscroll = function() {search.stickyElement()};

	console.log(btns);
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
	}

	$(".nameSearch").on("click", function(){
		search.init(searchText)
	});
	
	$(".hopsSearch").on("click", function() {search.hopsSearch(searchText)});
	$(".maltSearch").on("click", function() {search.maltSearch(searchText)});
	$(".foodSearch").on("click", function() {search.foodSearch(searchText)});
});