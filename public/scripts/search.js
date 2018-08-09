(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var search = {};
var header = document.getElementById("header-placeholder");
var sticky = header.offsetTop;
var butDiv = document.getElementById("searchButtons");
var btns = butDiv.getElementsByClassName("btn");
var queryString = window.location.href;
var searchText = queryString.substring(queryString.lastIndexOf("=") + 1).replace("+", "_");

search.stickyElement = function () {
	if (window.pageYOffset >= sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
};
search.init = function (searchString) {
	$(".beerList").empty();
	console.log(searchString);
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			beer_name: searchString
		}
	}).then(function (res) {
		if (res.length === 0) {
			var $noResults = $("<h2>").text("No Results Found.  Try Another search / option.");
			$(".beerList").append($noResults);
		} else {
			var beerArray = res;
			search.displayBeers(beerArray);
		}
	});
};

search.hopsSearch = function (searchString) {
	$(".beerList").empty();
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			hops: searchString
		}
	}).then(function (res) {
		if (res.length === 0) {
			var $noResults = $("<h2>").text("No Results Found.  Try Another search / option.");
			$(".beerList").append($noResults);
		} else {
			var beerArray = res;
			search.displayBeers(beerArray);
		}
	});
};

search.maltSearch = function (searchString) {
	$(".beerList").empty();
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			malt: searchString
		}
	}).then(function (res) {
		if (res.length === 0) {
			var $noResults = $("<h2>").text("No Results Found.  Try Another search / option.");
			$(".beerList").append($noResults);
		} else {
			var beerArray = res;
			search.displayBeers(beerArray);
		}
	});
};

search.foodSearch = function (searchString) {
	$(".beerList").empty();
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			food: searchString
		}
	}).then(function (res) {
		console.log(res);
		if (res.length === 0) {
			var $noResults = $("<h2>").text("No Results Found.  Try Another search / option.");
			$(".beerList").append($noResults);
		} else {
			var beerArray = res;
			search.displayBeers(beerArray);
		}
	});
};

search.displayBeers = function (beerObj) {
	beerObj.forEach(function (beer) {
		var $title = $("<h2>").text(beer.name);
		var $tagline = $("<p>").text(beer.tagline);
		var $image = $("<img>").addClass("listImage").attr("src", beer.image_url);
		var $textDiv = $("<div>").addClass("text").append($title, $tagline);
		var $overlayDiv = $("<div>").addClass("overlay").append($textDiv);
		var $linkEl = $("<a>").attr("href", "beerinfo.html?id=" + beer.id).append($overlayDiv);
		var $containerDiv = $("<div>").addClass("listContainer").append($image, $linkEl);
		$(".beerList").append($containerDiv);
	});
};

$(function () {
	$("#header-placeholder").load("headerBar.html header");
	$("#footer-placeholder").load("headerBar.html footer");
	search.init(searchText);

	window.onscroll = function () {
		search.stickyElement();
	};

	console.log(btns);
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}

	$(".nameSearch").on("click", function () {
		search.init(searchText);
	});

	$(".hopsSearch").on("click", function () {
		search.hopsSearch(searchText);
	});
	$(".maltSearch").on("click", function () {
		search.maltSearch(searchText);
	});
	$(".foodSearch").on("click", function () {
		search.foodSearch(searchText);
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLElBQU0sU0FBUyxFQUFmO0FBQ0EsSUFBTSxTQUFTLFNBQVMsY0FBVCxDQUF3QixvQkFBeEIsQ0FBZjtBQUNBLElBQU0sU0FBUyxPQUFPLFNBQXRCO0FBQ0EsSUFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUFiO0FBQ0EsSUFBSSxPQUFPLE9BQU8sc0JBQVAsQ0FBOEIsS0FBOUIsQ0FBWDtBQUNBLElBQUksY0FBYyxPQUFPLFFBQVAsQ0FBZ0IsSUFBbEM7QUFDQSxJQUFJLGFBQWMsWUFBWSxTQUFaLENBQXNCLFlBQVksV0FBWixDQUF3QixHQUF4QixJQUE2QixDQUFuRCxFQUFzRCxPQUF0RCxDQUE4RCxHQUE5RCxFQUFtRSxHQUFuRSxDQUFsQjs7QUFFQSxPQUFPLGFBQVAsR0FBdUIsWUFBSztBQUMzQixLQUFJLE9BQU8sV0FBUCxJQUFzQixNQUExQixFQUFrQztBQUMvQixTQUFPLFNBQVAsQ0FBaUIsR0FBakIsQ0FBcUIsUUFBckI7QUFDRCxFQUZGLE1BRVE7QUFDTCxTQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsUUFBeEI7QUFDRDtBQUNGLENBTkQ7QUFPQSxPQUFPLElBQVAsR0FBYyxVQUFDLFlBQUQsRUFBa0I7QUFDL0IsR0FBRSxXQUFGLEVBQWUsS0FBZjtBQUNBLFNBQVEsR0FBUixDQUFZLFlBQVo7QUFDQSxHQUFFLElBQUYsQ0FBTztBQUNOLE9BQUssa0NBREM7QUFFTixVQUFRLEtBRkY7QUFHTixZQUFVLE1BSEo7QUFJTixRQUFNO0FBQ0wsY0FBVztBQUROO0FBSkEsRUFBUCxFQU9HLElBUEgsQ0FPUSxVQUFDLEdBQUQsRUFBUztBQUNoQixNQUFJLElBQUksTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3JCLE9BQUksYUFBYSxFQUFFLE1BQUYsRUFBVSxJQUFWLENBQWUsaURBQWYsQ0FBakI7QUFDQSxLQUFFLFdBQUYsRUFBZSxNQUFmLENBQXNCLFVBQXRCO0FBQ0EsR0FIRCxNQUlJO0FBQ0gsT0FBTSxZQUFZLEdBQWxCO0FBQ0EsVUFBTyxZQUFQLENBQW9CLFNBQXBCO0FBQ0E7QUFDRCxFQWhCRDtBQWlCQSxDQXBCRDs7QUFzQkEsT0FBTyxVQUFQLEdBQW9CLFVBQUMsWUFBRCxFQUFrQjtBQUNyQyxHQUFFLFdBQUYsRUFBZSxLQUFmO0FBQ0EsR0FBRSxJQUFGLENBQU87QUFDTixPQUFLLGtDQURDO0FBRU4sVUFBUSxLQUZGO0FBR04sWUFBVSxNQUhKO0FBSU4sUUFBTTtBQUNMLFNBQU07QUFERDtBQUpBLEVBQVAsRUFPRyxJQVBILENBT1EsVUFBQyxHQUFELEVBQVM7QUFDaEIsTUFBSSxJQUFJLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNyQixPQUFJLGFBQWEsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLGlEQUFmLENBQWpCO0FBQ0EsS0FBRSxXQUFGLEVBQWUsTUFBZixDQUFzQixVQUF0QjtBQUNBLEdBSEQsTUFJSTtBQUNILE9BQU0sWUFBWSxHQUFsQjtBQUNBLFVBQU8sWUFBUCxDQUFvQixTQUFwQjtBQUNBO0FBQ0QsRUFoQkQ7QUFpQkEsQ0FuQkQ7O0FBcUJBLE9BQU8sVUFBUCxHQUFvQixVQUFDLFlBQUQsRUFBa0I7QUFDckMsR0FBRSxXQUFGLEVBQWUsS0FBZjtBQUNBLEdBQUUsSUFBRixDQUFPO0FBQ04sT0FBSyxrQ0FEQztBQUVOLFVBQVEsS0FGRjtBQUdOLFlBQVUsTUFISjtBQUlOLFFBQU07QUFDTCxTQUFNO0FBREQ7QUFKQSxFQUFQLEVBT0csSUFQSCxDQU9RLFVBQUMsR0FBRCxFQUFTO0FBQ2hCLE1BQUksSUFBSSxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFDckIsT0FBSSxhQUFhLEVBQUUsTUFBRixFQUFVLElBQVYsQ0FBZSxpREFBZixDQUFqQjtBQUNBLEtBQUUsV0FBRixFQUFlLE1BQWYsQ0FBc0IsVUFBdEI7QUFDQSxHQUhELE1BSUk7QUFDSCxPQUFNLFlBQVksR0FBbEI7QUFDQSxVQUFPLFlBQVAsQ0FBb0IsU0FBcEI7QUFDQTtBQUNELEVBaEJEO0FBaUJBLENBbkJEOztBQXFCQSxPQUFPLFVBQVAsR0FBb0IsVUFBQyxZQUFELEVBQWtCO0FBQ3JDLEdBQUUsV0FBRixFQUFlLEtBQWY7QUFDQSxHQUFFLElBQUYsQ0FBTztBQUNOLE9BQUssa0NBREM7QUFFTixVQUFRLEtBRkY7QUFHTixZQUFVLE1BSEo7QUFJTixRQUFNO0FBQ0wsU0FBTTtBQUREO0FBSkEsRUFBUCxFQU9HLElBUEgsQ0FPUSxVQUFDLEdBQUQsRUFBUztBQUNoQixVQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0EsTUFBSSxJQUFJLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNyQixPQUFJLGFBQWEsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLGlEQUFmLENBQWpCO0FBQ0EsS0FBRSxXQUFGLEVBQWUsTUFBZixDQUFzQixVQUF0QjtBQUNBLEdBSEQsTUFJSTtBQUNILE9BQU0sWUFBWSxHQUFsQjtBQUNBLFVBQU8sWUFBUCxDQUFvQixTQUFwQjtBQUNBO0FBQ0QsRUFqQkQ7QUFrQkEsQ0FwQkQ7O0FBd0JBLE9BQU8sWUFBUCxHQUFzQixVQUFDLE9BQUQsRUFBWTtBQUNqQyxTQUFRLE9BQVIsQ0FBZ0IsVUFBQyxJQUFELEVBQVM7QUFDeEIsTUFBSSxTQUFTLEVBQUUsTUFBRixFQUFVLElBQVYsQ0FBZSxLQUFLLElBQXBCLENBQWI7QUFDQSxNQUFJLFdBQVcsRUFBRSxLQUFGLEVBQVMsSUFBVCxDQUFjLEtBQUssT0FBbkIsQ0FBZjtBQUNBLE1BQUksU0FBUyxFQUFFLE9BQUYsRUFBVyxRQUFYLENBQW9CLFdBQXBCLEVBQWlDLElBQWpDLENBQXNDLEtBQXRDLEVBQTZDLEtBQUssU0FBbEQsQ0FBYjtBQUNBLE1BQUksV0FBVyxFQUFFLE9BQUYsRUFBVyxRQUFYLENBQW9CLE1BQXBCLEVBQTRCLE1BQTVCLENBQW1DLE1BQW5DLEVBQTJDLFFBQTNDLENBQWY7QUFDQSxNQUFJLGNBQWMsRUFBRSxPQUFGLEVBQVcsUUFBWCxDQUFvQixTQUFwQixFQUErQixNQUEvQixDQUFzQyxRQUF0QyxDQUFsQjtBQUNBLE1BQUksVUFBVSxFQUFFLEtBQUYsRUFBUyxJQUFULENBQWMsTUFBZCxFQUFzQixzQkFBc0IsS0FBSyxFQUFqRCxFQUFxRCxNQUFyRCxDQUE0RCxXQUE1RCxDQUFkO0FBQ0EsTUFBSSxnQkFBZ0IsRUFBRSxPQUFGLEVBQVcsUUFBWCxDQUFvQixlQUFwQixFQUFxQyxNQUFyQyxDQUE0QyxNQUE1QyxFQUFvRCxPQUFwRCxDQUFwQjtBQUNBLElBQUUsV0FBRixFQUFlLE1BQWYsQ0FBc0IsYUFBdEI7QUFDQSxFQVREO0FBVUEsQ0FYRDs7QUFhQSxFQUFFLFlBQVc7QUFDWixHQUFFLHFCQUFGLEVBQXlCLElBQXpCLENBQThCLHVCQUE5QjtBQUNBLEdBQUUscUJBQUYsRUFBeUIsSUFBekIsQ0FBOEIsdUJBQTlCO0FBQ0EsUUFBTyxJQUFQLENBQVksVUFBWjs7QUFFQSxRQUFPLFFBQVAsR0FBa0IsWUFBVztBQUFDLFNBQU8sYUFBUDtBQUF1QixFQUFyRDs7QUFFQSxTQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsTUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssTUFBekIsRUFBaUMsR0FBakMsRUFBc0M7QUFDcEMsT0FBSyxDQUFMLEVBQVEsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVztBQUMzQyxPQUFJLFVBQVUsU0FBUyxzQkFBVCxDQUFnQyxRQUFoQyxDQUFkO0FBQ0EsV0FBUSxDQUFSLEVBQVcsU0FBWCxHQUF1QixRQUFRLENBQVIsRUFBVyxTQUFYLENBQXFCLE9BQXJCLENBQTZCLFNBQTdCLEVBQXdDLEVBQXhDLENBQXZCO0FBQ0EsUUFBSyxTQUFMLElBQWtCLFNBQWxCO0FBQ0QsR0FKRDtBQUtEOztBQUVELEdBQUUsYUFBRixFQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFVO0FBQ3RDLFNBQU8sSUFBUCxDQUFZLFVBQVo7QUFDQSxFQUZEOztBQUlBLEdBQUUsYUFBRixFQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFXO0FBQUMsU0FBTyxVQUFQLENBQWtCLFVBQWxCO0FBQThCLEVBQXZFO0FBQ0EsR0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVc7QUFBQyxTQUFPLFVBQVAsQ0FBa0IsVUFBbEI7QUFBOEIsRUFBdkU7QUFDQSxHQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBVztBQUFDLFNBQU8sVUFBUCxDQUFrQixVQUFsQjtBQUE4QixFQUF2RTtBQUNBLENBdkJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcbmNvbnN0IHNlYXJjaCA9IHt9O1xyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1wbGFjZWhvbGRlclwiKTtcclxuY29uc3Qgc3RpY2t5ID0gaGVhZGVyLm9mZnNldFRvcDtcclxudmFyIGJ1dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uc1wiKTtcclxudmFyIGJ0bnMgPSBidXREaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0blwiKTtcclxubGV0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbmxldCBzZWFyY2hUZXh0ID0gIHF1ZXJ5U3RyaW5nLnN1YnN0cmluZyhxdWVyeVN0cmluZy5sYXN0SW5kZXhPZihcIj1cIikrMSkucmVwbGFjZShcIitcIiwgXCJfXCIpO1xyXG5cclxuc2VhcmNoLnN0aWNreUVsZW1lbnQgPSAoKSA9PntcclxuXHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHN0aWNreSkge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gIH1cclxufVxyXG5zZWFyY2guaW5pdCA9IChzZWFyY2hTdHJpbmcpID0+IHtcclxuXHQkKFwiLmJlZXJMaXN0XCIpLmVtcHR5KCk7XHJcblx0Y29uc29sZS5sb2coc2VhcmNoU3RyaW5nKTtcclxuXHQkLmFqYXgoe1xyXG5cdFx0dXJsOiBcImh0dHBzOi8vYXBpLnB1bmthcGkuY29tL3YyL2JlZXJzXCIsXHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHRkYXRhVHlwZTogXCJqc29uXCIsXHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdGJlZXJfbmFtZTogc2VhcmNoU3RyaW5nXHJcblx0XHR9XHJcblx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRpZiAocmVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR2YXIgJG5vUmVzdWx0cyA9ICQoXCI8aDI+XCIpLnRleHQoXCJObyBSZXN1bHRzIEZvdW5kLiAgVHJ5IEFub3RoZXIgc2VhcmNoIC8gb3B0aW9uLlwiKTtcclxuXHRcdFx0JChcIi5iZWVyTGlzdFwiKS5hcHBlbmQoJG5vUmVzdWx0cyk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRjb25zdCBiZWVyQXJyYXkgPSByZXM7XHJcblx0XHRcdHNlYXJjaC5kaXNwbGF5QmVlcnMoYmVlckFycmF5KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuc2VhcmNoLmhvcHNTZWFyY2ggPSAoc2VhcmNoU3RyaW5nKSA9PiB7XHJcblx0JChcIi5iZWVyTGlzdFwiKS5lbXB0eSgpO1xyXG5cdCQuYWpheCh7XHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnNcIixcclxuXHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdGRhdGFUeXBlOiBcImpzb25cIixcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0aG9wczogc2VhcmNoU3RyaW5nXHJcblx0XHR9XHJcblx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRpZiAocmVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR2YXIgJG5vUmVzdWx0cyA9ICQoXCI8aDI+XCIpLnRleHQoXCJObyBSZXN1bHRzIEZvdW5kLiAgVHJ5IEFub3RoZXIgc2VhcmNoIC8gb3B0aW9uLlwiKTtcclxuXHRcdFx0JChcIi5iZWVyTGlzdFwiKS5hcHBlbmQoJG5vUmVzdWx0cyk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRjb25zdCBiZWVyQXJyYXkgPSByZXM7XHJcblx0XHRcdHNlYXJjaC5kaXNwbGF5QmVlcnMoYmVlckFycmF5KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuc2VhcmNoLm1hbHRTZWFyY2ggPSAoc2VhcmNoU3RyaW5nKSA9PiB7XHJcblx0JChcIi5iZWVyTGlzdFwiKS5lbXB0eSgpO1xyXG5cdCQuYWpheCh7XHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnNcIixcclxuXHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdGRhdGFUeXBlOiBcImpzb25cIixcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0bWFsdDogc2VhcmNoU3RyaW5nXHJcblx0XHR9XHJcblx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRpZiAocmVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR2YXIgJG5vUmVzdWx0cyA9ICQoXCI8aDI+XCIpLnRleHQoXCJObyBSZXN1bHRzIEZvdW5kLiAgVHJ5IEFub3RoZXIgc2VhcmNoIC8gb3B0aW9uLlwiKTtcclxuXHRcdFx0JChcIi5iZWVyTGlzdFwiKS5hcHBlbmQoJG5vUmVzdWx0cyk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRjb25zdCBiZWVyQXJyYXkgPSByZXM7XHJcblx0XHRcdHNlYXJjaC5kaXNwbGF5QmVlcnMoYmVlckFycmF5KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuc2VhcmNoLmZvb2RTZWFyY2ggPSAoc2VhcmNoU3RyaW5nKSA9PiB7XHJcblx0JChcIi5iZWVyTGlzdFwiKS5lbXB0eSgpO1xyXG5cdCQuYWpheCh7XHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnNcIixcclxuXHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdGRhdGFUeXBlOiBcImpzb25cIixcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0Zm9vZDogc2VhcmNoU3RyaW5nXHJcblx0XHR9XHJcblx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0aWYgKHJlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0dmFyICRub1Jlc3VsdHMgPSAkKFwiPGgyPlwiKS50ZXh0KFwiTm8gUmVzdWx0cyBGb3VuZC4gIFRyeSBBbm90aGVyIHNlYXJjaCAvIG9wdGlvbi5cIik7XHJcblx0XHRcdCQoXCIuYmVlckxpc3RcIikuYXBwZW5kKCRub1Jlc3VsdHMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0Y29uc3QgYmVlckFycmF5ID0gcmVzO1xyXG5cdFx0XHRzZWFyY2guZGlzcGxheUJlZXJzKGJlZXJBcnJheSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuc2VhcmNoLmRpc3BsYXlCZWVycyA9IChiZWVyT2JqKSA9PntcclxuXHRiZWVyT2JqLmZvckVhY2goKGJlZXIpID0+e1xyXG5cdFx0dmFyICR0aXRsZSA9ICQoXCI8aDI+XCIpLnRleHQoYmVlci5uYW1lKTtcclxuXHRcdHZhciAkdGFnbGluZSA9ICQoXCI8cD5cIikudGV4dChiZWVyLnRhZ2xpbmUpO1xyXG5cdFx0dmFyICRpbWFnZSA9ICQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImxpc3RJbWFnZVwiKS5hdHRyKFwic3JjXCIsIGJlZXIuaW1hZ2VfdXJsKTtcclxuXHRcdHZhciAkdGV4dERpdiA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcInRleHRcIikuYXBwZW5kKCR0aXRsZSwgJHRhZ2xpbmUpXHJcblx0XHR2YXIgJG92ZXJsYXlEaXYgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJvdmVybGF5XCIpLmFwcGVuZCgkdGV4dERpdik7XHJcblx0XHR2YXIgJGxpbmtFbCA9ICQoXCI8YT5cIikuYXR0cihcImhyZWZcIiwgXCJiZWVyaW5mby5odG1sP2lkPVwiICsgYmVlci5pZCkuYXBwZW5kKCRvdmVybGF5RGl2KTtcclxuXHRcdHZhciAkY29udGFpbmVyRGl2ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwibGlzdENvbnRhaW5lclwiKS5hcHBlbmQoJGltYWdlLCAkbGlua0VsKTtcclxuXHRcdCQoXCIuYmVlckxpc3RcIikuYXBwZW5kKCRjb250YWluZXJEaXYpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cdCQoXCIjaGVhZGVyLXBsYWNlaG9sZGVyXCIpLmxvYWQoXCJoZWFkZXJCYXIuaHRtbCBoZWFkZXJcIik7XHJcblx0JChcIiNmb290ZXItcGxhY2Vob2xkZXJcIikubG9hZChcImhlYWRlckJhci5odG1sIGZvb3RlclwiKTtcclxuXHRzZWFyY2guaW5pdChzZWFyY2hUZXh0KTtcclxuXHJcblx0d2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7c2VhcmNoLnN0aWNreUVsZW1lbnQoKX07XHJcblxyXG5cdGNvbnNvbGUubG9nKGJ0bnMpO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xyXG5cdCAgYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0ICAgIHZhciBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVwiKTtcclxuXHQgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuXHQgICAgdGhpcy5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcblx0ICB9KTtcclxuXHR9XHJcblxyXG5cdCQoXCIubmFtZVNlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcblx0XHRzZWFyY2guaW5pdChzZWFyY2hUZXh0KVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoXCIuaG9wc1NlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge3NlYXJjaC5ob3BzU2VhcmNoKHNlYXJjaFRleHQpfSk7XHJcblx0JChcIi5tYWx0U2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7c2VhcmNoLm1hbHRTZWFyY2goc2VhcmNoVGV4dCl9KTtcclxuXHQkKFwiLmZvb2RTZWFyY2hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtzZWFyY2guZm9vZFNlYXJjaChzZWFyY2hUZXh0KX0pO1xyXG59KTsiXX0=
