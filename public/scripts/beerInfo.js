(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var beer = {};
var header = document.getElementById("header-placeholder");
var aside = document.getElementById("beerImage");
var sticky = header.offsetTop;

beer.stickyElement = function () {
	if (window.pageYOffset >= sticky) {
		header.classList.add("sticky");
		aside.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
		aside.classList.remove("sticky");
	}
};
beer.init = function () {
	console.log("initialization");
	var queryString = window.location.href;
	var idVal = queryString.substring(queryString.lastIndexOf("=") + 1);

	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			ids: idVal
		}
	}).then(function (res) {
		var $title = $("<h1>").text(res[0].name);
		var $tagline = $("<p>").text(res[0].tagline);
		var $image = $("<img>").attr("src", res[0].image_url);
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

		$hops.forEach(function (ingred) {
			var $hopName = $("<h4>").text("" + ingred.name);
			var $hopAmount = $("<p>").text("Amount: " + ingred.amount.value + " " + ingred.amount.unit + " added at " + ingred.add);
			$hopDiv.append($hopName, $hopAmount);
		});
		$malts.forEach(function (ingred) {
			var $maltName = $("<h4>").text("" + ingred.name);
			var $maltAmount = $("<p>").text("Amount: " + ingred.amount.value + " " + ingred.amount.unit);
			$maltDiv.append($maltName, $maltAmount);
		});
		$foodpair.forEach(function (food) {
			var foodWords = food.replace(/\s+/g, "+");
			var $foodLink = $("<a>").attr("target", "_blank").attr("href", "http://www.google.com/search?q=" + foodWords).text(food);
			$foodDiv.append($foodLink);
		});

		var $infoDiv = $("<div>").addClass("infoBody").append($tagline, $firstBrew, $descrip, $brewTips, $hopDiv, $maltDiv, $yeastDiv, $foodDiv);
		$("section").append($title, $infoDiv);
		$("aside").append($image).css("height", $(".beerTextInfo").height());
		var test = $(".beerTextInfo").height();
		console.log(test);
	});
};

$(function () {
	$("#header-placeholder").load("headerBar.html header");
	$("#footer-placeholder").load("headerBar.html footer");
	beer.init();

	window.onscroll = function () {
		beer.stickyElement();
	};
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9iZWVySW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EsSUFBTSxPQUFPLEVBQWI7QUFDQSxJQUFNLFNBQVMsU0FBUyxjQUFULENBQXdCLG9CQUF4QixDQUFmO0FBQ0EsSUFBTSxRQUFRLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFkO0FBQ0EsSUFBTSxTQUFTLE9BQU8sU0FBdEI7O0FBRUEsS0FBSyxhQUFMLEdBQXFCLFlBQUs7QUFDekIsS0FBSSxPQUFPLFdBQVAsSUFBc0IsTUFBMUIsRUFBa0M7QUFDL0IsU0FBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0EsUUFBTSxTQUFOLENBQWdCLEdBQWhCLENBQW9CLFFBQXBCO0FBQ0QsRUFIRixNQUdRO0FBQ0wsU0FBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0EsUUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFFBQXZCO0FBQ0Q7QUFDRixDQVJEO0FBU0EsS0FBSyxJQUFMLEdBQVksWUFBTTtBQUNqQixTQUFRLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLEtBQUksY0FBYyxPQUFPLFFBQVAsQ0FBZ0IsSUFBbEM7QUFDQSxLQUFJLFFBQVMsWUFBWSxTQUFaLENBQXNCLFlBQVksV0FBWixDQUF3QixHQUF4QixJQUE2QixDQUFuRCxDQUFiOztBQUdBLEdBQUUsSUFBRixDQUFPO0FBQ04sT0FBSyxrQ0FEQztBQUVOLFVBQVEsS0FGRjtBQUdOLFlBQVUsTUFISjtBQUlOLFFBQU07QUFDTCxRQUFNO0FBREQ7QUFKQSxFQUFQLEVBT0csSUFQSCxDQU9RLFVBQUMsR0FBRCxFQUFTO0FBQ2YsTUFBSSxTQUFTLEVBQUUsTUFBRixFQUFVLElBQVYsQ0FBZSxJQUFJLENBQUosRUFBTyxJQUF0QixDQUFiO0FBQ0EsTUFBSSxXQUFXLEVBQUUsS0FBRixFQUFTLElBQVQsQ0FB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RSxFQUFrRixPQUFsRixFQUEyRixRQUEzRixFQUFxRyxTQUFyRyxFQUFnSCxRQUFoSCxDQUFmO0FBQ0EsSUFBRSxTQUFGLEVBQWEsTUFBYixDQUFvQixNQUFwQixFQUE0QixRQUE1QjtBQUNBLElBQUUsT0FBRixFQUFXLE1BQVgsQ0FBa0IsTUFBbEIsRUFBMEIsR0FBMUIsQ0FBOEIsUUFBOUIsRUFBd0MsRUFBRSxlQUFGLEVBQW1CLE1BQW5CLEVBQXhDO0FBQ0EsTUFBSSxPQUFPLEVBQUUsZUFBRixFQUFtQixNQUFuQixFQUFYO0FBQ0EsVUFBUSxHQUFSLENBQVksSUFBWjtBQUNELEVBNUNEO0FBNkNBLENBbkREOztBQXFEQSxFQUFFLFlBQVc7QUFDWixHQUFFLHFCQUFGLEVBQXlCLElBQXpCLENBQThCLHVCQUE5QjtBQUNBLEdBQUUscUJBQUYsRUFBeUIsSUFBekIsQ0FBOEIsdUJBQTlCO0FBQ0EsTUFBSyxJQUFMOztBQUVBLFFBQU8sUUFBUCxHQUFrQixZQUFXO0FBQUMsT0FBSyxhQUFMO0FBQXFCLEVBQW5EO0FBSUEsQ0FURCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5jb25zdCBiZWVyID0ge307XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXBsYWNlaG9sZGVyXCIpO1xyXG5jb25zdCBhc2lkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmVlckltYWdlXCIpO1xyXG5jb25zdCBzdGlja3kgPSBoZWFkZXIub2Zmc2V0VG9wO1xyXG5cclxuYmVlci5zdGlja3lFbGVtZW50ID0gKCkgPT57XHJcblx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBzdGlja3kpIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gIH1cclxufVxyXG5iZWVyLmluaXQgPSAoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coXCJpbml0aWFsaXphdGlvblwiKTtcclxuXHRsZXQgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRsZXQgaWRWYWwgPSAgcXVlcnlTdHJpbmcuc3Vic3RyaW5nKHF1ZXJ5U3RyaW5nLmxhc3RJbmRleE9mKFwiPVwiKSsxKTtcclxuXHRcclxuXHJcblx0JC5hamF4KHtcclxuXHRcdHVybDogXCJodHRwczovL2FwaS5wdW5rYXBpLmNvbS92Mi9iZWVyc1wiLFxyXG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0ZGF0YVR5cGU6IFwianNvblwiLFxyXG5cdFx0ZGF0YToge1xyXG5cdFx0XHRpZHMgOiBpZFZhbFxyXG5cdFx0fVxyXG5cdH0pLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHR2YXIgJHRpdGxlID0gJChcIjxoMT5cIikudGV4dChyZXNbMF0ubmFtZSk7XHJcblx0XHRcdHZhciAkdGFnbGluZSA9ICQoXCI8cD5cIikudGV4dChyZXNbMF0udGFnbGluZSk7XHJcblx0XHRcdHZhciAkaW1hZ2UgPSAkKFwiPGltZz5cIikuYXR0cihcInNyY1wiLHJlc1swXS5pbWFnZV91cmwpO1xyXG5cdFx0XHR2YXIgJGZpcnN0QnJldyA9ICQoXCI8cD5cIikudGV4dChyZXNbMF0uZmlyc3RfYnJld2VkKTtcclxuXHRcdFx0dmFyICRkZXNjcmlwID0gJChcIjxwPlwiKS50ZXh0KHJlc1swXS5kZXNjcmlwdGlvbik7XHJcblx0XHRcdHZhciAkYnJld1RpcHMgPSAkKFwiPHA+XCIpLnRleHQocmVzWzBdLmJyZXdlcnNfdGlwcyk7XHJcblx0XHRcdHZhciAkaG9wcyA9IHJlc1swXS5pbmdyZWRpZW50cy5ob3BzO1xyXG5cdFx0XHR2YXIgJGhvcERpdiA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImhvcERpdlwiKS5hcHBlbmQoJChcIjxoMz5cIikudGV4dChcIkhvcHNcIikpO1xyXG5cdFx0XHR2YXIgJG1hbHRzID0gcmVzWzBdLmluZ3JlZGllbnRzLm1hbHQ7XHJcblx0XHRcdHZhciAkbWFsdERpdiA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcIm1hbHREaXZcIikuYXBwZW5kKCQoXCI8aDM+XCIpLnRleHQoXCJNYWx0c1wiKSk7XHJcblx0XHRcdHZhciAkeWVhc3QgPSByZXNbMF0uaW5ncmVkaWVudHMueWVhc3Q7XHJcblx0XHRcdHZhciAkeWVhc3REaXYgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJ5ZWFzdERpdlwiKS5hcHBlbmQoJChcIjxoMz5cIikudGV4dChcIlllYXN0XCIpLCAkKFwiPHA+XCIpLnRleHQoJHllYXN0KSk7XHJcblx0XHRcdHZhciAkZm9vZHBhaXIgPSByZXNbMF0uZm9vZF9wYWlyaW5nO1xyXG5cdFx0XHR2YXIgJGZvb2REaXYgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJmb29kRGl2XCIpLmFwcGVuZCgkKFwiPGgzPlwiKS50ZXh0KFwiRm9vZCBQYWlyaW5nc1wiKSk7XHJcblx0XHRcdFxyXG5cdFx0XHQkaG9wcy5mb3JFYWNoKChpbmdyZWQpID0+e1xyXG5cdFx0XHRcdHZhciAkaG9wTmFtZSA9ICQoXCI8aDQ+XCIpLnRleHQoYCR7aW5ncmVkLm5hbWV9YCk7XHJcblx0XHRcdFx0dmFyICRob3BBbW91bnQgPSAkKFwiPHA+XCIpLnRleHQoYEFtb3VudDogJHtpbmdyZWQuYW1vdW50LnZhbHVlfSAke2luZ3JlZC5hbW91bnQudW5pdH0gYWRkZWQgYXQgJHtpbmdyZWQuYWRkfWApO1xyXG5cdFx0XHRcdCRob3BEaXYuYXBwZW5kKCRob3BOYW1lLCAkaG9wQW1vdW50KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCRtYWx0cy5mb3JFYWNoKChpbmdyZWQpID0+e1xyXG5cdFx0XHRcdHZhciAkbWFsdE5hbWUgPSAkKFwiPGg0PlwiKS50ZXh0KGAke2luZ3JlZC5uYW1lfWApO1xyXG5cdFx0XHRcdHZhciAkbWFsdEFtb3VudCA9ICQoXCI8cD5cIikudGV4dChgQW1vdW50OiAke2luZ3JlZC5hbW91bnQudmFsdWV9ICR7aW5ncmVkLmFtb3VudC51bml0fWApO1xyXG5cdFx0XHRcdCRtYWx0RGl2LmFwcGVuZCgkbWFsdE5hbWUsICRtYWx0QW1vdW50KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCRmb29kcGFpci5mb3JFYWNoKChmb29kKSA9PntcclxuXHRcdFx0XHRsZXQgZm9vZFdvcmRzID0gZm9vZC5yZXBsYWNlKC9cXHMrL2csIFwiK1wiKTtcclxuXHRcdFx0XHR2YXIgJGZvb2RMaW5rID0gJChcIjxhPlwiKS5hdHRyKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpLmF0dHIoXCJocmVmXCIsIGBodHRwOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9JHtmb29kV29yZHN9YCkudGV4dChmb29kKTtcclxuXHRcdFx0XHQkZm9vZERpdi5hcHBlbmQoJGZvb2RMaW5rKTtcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdHZhciAkaW5mb0RpdiA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImluZm9Cb2R5XCIpLmFwcGVuZCgkdGFnbGluZSwgJGZpcnN0QnJldywgJGRlc2NyaXAsICRicmV3VGlwcywgJGhvcERpdiwgJG1hbHREaXYsICR5ZWFzdERpdiwgJGZvb2REaXYpO1xyXG5cdFx0XHQkKFwic2VjdGlvblwiKS5hcHBlbmQoJHRpdGxlLCAkaW5mb0Rpdik7XHJcblx0XHRcdCQoXCJhc2lkZVwiKS5hcHBlbmQoJGltYWdlKS5jc3MoXCJoZWlnaHRcIiwgJChcIi5iZWVyVGV4dEluZm9cIikuaGVpZ2h0KCkpO1xyXG5cdFx0XHRsZXQgdGVzdCA9ICQoXCIuYmVlclRleHRJbmZvXCIpLmhlaWdodCgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0ZXN0KTtcclxuXHR9KTtcclxufVxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHQkKFwiI2hlYWRlci1wbGFjZWhvbGRlclwiKS5sb2FkKFwiaGVhZGVyQmFyLmh0bWwgaGVhZGVyXCIpO1xyXG5cdCQoXCIjZm9vdGVyLXBsYWNlaG9sZGVyXCIpLmxvYWQoXCJoZWFkZXJCYXIuaHRtbCBmb290ZXJcIik7XHJcblx0YmVlci5pbml0KCk7XHJcblxyXG5cdHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge2JlZXIuc3RpY2t5RWxlbWVudCgpfTtcclxuXHJcblxyXG5cdFxyXG59KTsiXX0=
