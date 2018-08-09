
const beer = {};
const header = document.getElementById("header-placeholder");
const aside = document.getElementById("beerImage");
const sticky = header.offsetTop;

beer.stickyElement = () =>{
	if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    aside.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    aside.classList.remove("sticky");
  }
}
beer.init = () => {
	console.log("initialization");
	let queryString = window.location.href;
	let idVal =  queryString.substring(queryString.lastIndexOf("=")+1);
	

	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			ids : idVal
		}
	}).then((res) => {
			var $title = $("<h1>").text(res[0].name);
			var $tagline = $("<p>").text(res[0].tagline);
			var $image = $("<img>").attr("src",res[0].image_url);
			var $firstBrew = $("<p>").text(res[0].first_brewed);
			var $descrip = $("<p>").text(res[0].description);
			var $brewTips = $("<p>").text(res[0].brewers_tips);
			var $hops = res[0].ingredients.hops;
			var $hopDiv = $("<div>").addClass("hopDiv").append($("<h3>").text("Hops"));
			var $malts = res[0].ingredients.malt;
			var $maltDiv = $("<div>").addClass("maltDiv").append($("<h3>").text("Malts"));
			var $yeast = res[0].ingredients.yeast;
			var $yeastDiv = $("<div>").addClass("yeastDiv").append($("<h3>").text("Yeast"), $("<p>").text($yeast));
			var $foodpair = res[0].food_pairing;
			var $foodDiv = $("<div>").addClass("foodDiv").append($("<h3>").text("Food Pairings"));
			
			$hops.forEach((ingred) =>{
				var $hopName = $("<h4>").text(`${ingred.name}`);
				var $hopAmount = $("<p>").text(`Amount: ${ingred.amount.value} ${ingred.amount.unit} added at ${ingred.add}`);
				$hopDiv.append($hopName, $hopAmount);
			});
			$malts.forEach((ingred) =>{
				var $maltName = $("<h4>").text(`${ingred.name}`);
				var $maltAmount = $("<p>").text(`Amount: ${ingred.amount.value} ${ingred.amount.unit}`);
				$maltDiv.append($maltName, $maltAmount);
			});
			$foodpair.forEach((food) =>{
				let foodWords = food.replace(/\s+/g, "+");
				var $foodLink = $("<a>").attr("target", "_blank").attr("href", `http://www.google.com/search?q=${foodWords}`).text(food);
				$foodDiv.append($foodLink);
			})

			var $infoDiv = $("<div>").addClass("infoBody").append($tagline, $firstBrew, $descrip, $brewTips, $hopDiv, $maltDiv, $yeastDiv, $foodDiv);
			$("section").append($title, $infoDiv);
			$("aside").append($image).css("height", $(".beerTextInfo").height());
			let test = $(".beerTextInfo").height();
			console.log(test);
	});
}

$(function() {
	$("#header-placeholder").load("headerBar.html header");
	$("#footer-placeholder").load("headerBar.html footer");
	beer.init();

	window.onscroll = function() {beer.stickyElement()};


	
});