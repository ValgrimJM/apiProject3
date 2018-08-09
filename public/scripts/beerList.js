(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var beerList = {};
var pageNum = 1;
var header = document.getElementById("header-placeholder");
var sticky = header.offsetTop;

beerList.stickyElement = function () {
	if (window.pageYOffset >= sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
};

beerList.init = function (page) {
	console.log(page);
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		method: "GET",
		dataType: "json",
		data: {
			page: page
		}
	}).then(function (res) {
		var beerArray = res;
		beerList.displayBeers(beerArray);
	});
};

beerList.displayBeers = function (beerObj) {
	$(".beerList").empty();
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
	$(".prevBut").attr("disabled", "disabled");

	beerList.init(pageNum);

	window.onscroll = function () {
		beerList.stickyElement();
	};

	$(".nextBut").on("click", function () {
		if (pageNum < 9) {
			pageNum++;
			beerList.init(pageNum);
			$(".prevBut").removeAttr("disabled");
		} else {
			pageNum++;
			beerList.init(pageNum);
			$(".nextBut").attr("disabled", "disabled");
		}
	});
	$(".prevBut").on("click", function () {
		if (pageNum > 2) {
			pageNum--;
			beerList.init(pageNum);
			$(".nextBut").removeAttr("disabled");
		} else {
			pageNum--;
			beerList.init(pageNum);
			$(".prevBut").attr("disabled", "disabled");
		}
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9iZWVyTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxXQUFXLEVBQWpCO0FBQ0EsSUFBSSxVQUFVLENBQWQ7QUFDQSxJQUFNLFNBQVMsU0FBUyxjQUFULENBQXdCLG9CQUF4QixDQUFmO0FBQ0EsSUFBTSxTQUFTLE9BQU8sU0FBdEI7O0FBRUEsU0FBUyxhQUFULEdBQXlCLFlBQUs7QUFDN0IsS0FBSSxPQUFPLFdBQVAsSUFBc0IsTUFBMUIsRUFBa0M7QUFDL0IsU0FBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0QsRUFGRixNQUVRO0FBQ0wsU0FBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0Q7QUFDRixDQU5EOztBQVFBLFNBQVMsSUFBVCxHQUFnQixVQUFDLElBQUQsRUFBUztBQUN4QixTQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsR0FBRSxJQUFGLENBQU87QUFDTixPQUFLLGtDQURDO0FBRU4sVUFBUSxLQUZGO0FBR04sWUFBVSxNQUhKO0FBSU4sUUFBTTtBQUNMLFNBQU07QUFERDtBQUpBLEVBQVAsRUFPRyxJQVBILENBT1EsVUFBQyxHQUFELEVBQVE7QUFDZixNQUFNLFlBQVksR0FBbEI7QUFDQSxXQUFTLFlBQVQsQ0FBc0IsU0FBdEI7QUFDQSxFQVZEO0FBV0EsQ0FiRDs7QUFlQSxTQUFTLFlBQVQsR0FBd0IsVUFBQyxPQUFELEVBQVk7QUFDbkMsR0FBRSxXQUFGLEVBQWUsS0FBZjtBQUNBLFNBQVEsT0FBUixDQUFnQixVQUFDLElBQUQsRUFBUztBQUN4QixNQUFJLFNBQVMsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLEtBQUssSUFBcEIsQ0FBYjtBQUNBLE1BQUksV0FBVyxFQUFFLEtBQUYsRUFBUyxJQUFULENBQWMsS0FBSyxPQUFuQixDQUFmO0FBQ0EsTUFBSSxTQUFTLEVBQUUsT0FBRixFQUFXLFFBQVgsQ0FBb0IsV0FBcEIsRUFBaUMsSUFBakMsQ0FBc0MsS0FBdEMsRUFBNkMsS0FBSyxTQUFsRCxDQUFiO0FBQ0EsTUFBSSxXQUFXLEVBQUUsT0FBRixFQUFXLFFBQVgsQ0FBb0IsTUFBcEIsRUFBNEIsTUFBNUIsQ0FBbUMsTUFBbkMsRUFBMkMsUUFBM0MsQ0FBZjtBQUNBLE1BQUksY0FBYyxFQUFFLE9BQUYsRUFBVyxRQUFYLENBQW9CLFNBQXBCLEVBQStCLE1BQS9CLENBQXNDLFFBQXRDLENBQWxCO0FBQ0EsTUFBSSxVQUFVLEVBQUUsS0FBRixFQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLHNCQUFzQixLQUFLLEVBQWpELEVBQXFELE1BQXJELENBQTRELFdBQTVELENBQWQ7QUFDQSxNQUFJLGdCQUFnQixFQUFFLE9BQUYsRUFBVyxRQUFYLENBQW9CLGVBQXBCLEVBQXFDLE1BQXJDLENBQTRDLE1BQTVDLEVBQW9ELE9BQXBELENBQXBCO0FBQ0EsSUFBRSxXQUFGLEVBQWUsTUFBZixDQUFzQixhQUF0QjtBQUNBLEVBVEQ7QUFXQSxDQWJEOztBQWVBLEVBQUUsWUFBWTtBQUNiLEdBQUUscUJBQUYsRUFBeUIsSUFBekIsQ0FBOEIsdUJBQTlCO0FBQ0EsR0FBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4Qix1QkFBOUI7QUFDQSxHQUFFLFVBQUYsRUFBYyxJQUFkLENBQW1CLFVBQW5CLEVBQStCLFVBQS9COztBQUVBLFVBQVMsSUFBVCxDQUFjLE9BQWQ7O0FBRUEsUUFBTyxRQUFQLEdBQWtCLFlBQVc7QUFBQyxXQUFTLGFBQVQ7QUFBeUIsRUFBdkQ7O0FBRUEsR0FBRSxVQUFGLEVBQWMsRUFBZCxDQUFpQixPQUFqQixFQUEwQixZQUFXO0FBQ3BDLE1BQUksVUFBVSxDQUFkLEVBQWlCO0FBQ2hCO0FBQ0EsWUFBUyxJQUFULENBQWMsT0FBZDtBQUNBLEtBQUUsVUFBRixFQUFjLFVBQWQsQ0FBeUIsVUFBekI7QUFDQSxHQUpELE1BS0k7QUFDSDtBQUNBLFlBQVMsSUFBVCxDQUFjLE9BQWQ7QUFDQSxLQUFFLFVBQUYsRUFBYyxJQUFkLENBQW1CLFVBQW5CLEVBQStCLFVBQS9CO0FBQ0E7QUFDRCxFQVhEO0FBWUEsR0FBRSxVQUFGLEVBQWMsRUFBZCxDQUFpQixPQUFqQixFQUEwQixZQUFVO0FBQ25DLE1BQUksVUFBVSxDQUFkLEVBQWlCO0FBQ2hCO0FBQ0EsWUFBUyxJQUFULENBQWMsT0FBZDtBQUNBLEtBQUUsVUFBRixFQUFjLFVBQWQsQ0FBeUIsVUFBekI7QUFDQSxHQUpELE1BS0k7QUFDSDtBQUNBLFlBQVMsSUFBVCxDQUFjLE9BQWQ7QUFDQSxLQUFFLFVBQUYsRUFBYyxJQUFkLENBQW1CLFVBQW5CLEVBQStCLFVBQS9CO0FBQ0E7QUFDRCxFQVhEO0FBWUEsQ0FqQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBiZWVyTGlzdCA9IHt9O1xyXG5sZXQgcGFnZU51bSA9IDE7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXBsYWNlaG9sZGVyXCIpO1xyXG5jb25zdCBzdGlja3kgPSBoZWFkZXIub2Zmc2V0VG9wO1xyXG5cclxuYmVlckxpc3Quc3RpY2t5RWxlbWVudCA9ICgpID0+e1xyXG5cdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgfVxyXG59XHJcblxyXG5iZWVyTGlzdC5pbml0ID0gKHBhZ2UpID0+e1xyXG5cdGNvbnNvbGUubG9nKHBhZ2UpO1xyXG5cdCQuYWpheCh7XHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnNcIixcclxuXHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdGRhdGFUeXBlOiBcImpzb25cIixcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0cGFnZTogcGFnZVxyXG5cdFx0fVxyXG5cdH0pLnRoZW4oKHJlcykgPT57XHJcblx0XHRjb25zdCBiZWVyQXJyYXkgPSByZXM7XHJcblx0XHRiZWVyTGlzdC5kaXNwbGF5QmVlcnMoYmVlckFycmF5KTtcclxuXHR9KTtcclxufVxyXG5cclxuYmVlckxpc3QuZGlzcGxheUJlZXJzID0gKGJlZXJPYmopID0+e1xyXG5cdCQoXCIuYmVlckxpc3RcIikuZW1wdHkoKTtcclxuXHRiZWVyT2JqLmZvckVhY2goKGJlZXIpID0+e1xyXG5cdFx0dmFyICR0aXRsZSA9ICQoXCI8aDI+XCIpLnRleHQoYmVlci5uYW1lKTtcclxuXHRcdHZhciAkdGFnbGluZSA9ICQoXCI8cD5cIikudGV4dChiZWVyLnRhZ2xpbmUpO1xyXG5cdFx0dmFyICRpbWFnZSA9ICQoXCI8aW1nPlwiKS5hZGRDbGFzcyhcImxpc3RJbWFnZVwiKS5hdHRyKFwic3JjXCIsIGJlZXIuaW1hZ2VfdXJsKTtcclxuXHRcdHZhciAkdGV4dERpdiA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcInRleHRcIikuYXBwZW5kKCR0aXRsZSwgJHRhZ2xpbmUpXHJcblx0XHR2YXIgJG92ZXJsYXlEaXYgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJvdmVybGF5XCIpLmFwcGVuZCgkdGV4dERpdik7XHJcblx0XHR2YXIgJGxpbmtFbCA9ICQoXCI8YT5cIikuYXR0cihcImhyZWZcIiwgXCJiZWVyaW5mby5odG1sP2lkPVwiICsgYmVlci5pZCkuYXBwZW5kKCRvdmVybGF5RGl2KTtcclxuXHRcdHZhciAkY29udGFpbmVyRGl2ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwibGlzdENvbnRhaW5lclwiKS5hcHBlbmQoJGltYWdlLCAkbGlua0VsKTtcclxuXHRcdCQoXCIuYmVlckxpc3RcIikuYXBwZW5kKCRjb250YWluZXJEaXYpO1xyXG5cdH0pO1xyXG5cclxufVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0JChcIiNoZWFkZXItcGxhY2Vob2xkZXJcIikubG9hZChcImhlYWRlckJhci5odG1sIGhlYWRlclwiKTtcclxuXHQkKFwiI2Zvb3Rlci1wbGFjZWhvbGRlclwiKS5sb2FkKFwiaGVhZGVyQmFyLmh0bWwgZm9vdGVyXCIpO1xyXG5cdCQoXCIucHJldkJ1dFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuXHJcblx0YmVlckxpc3QuaW5pdChwYWdlTnVtKTtcclxuXHJcblx0d2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7YmVlckxpc3Quc3RpY2t5RWxlbWVudCgpfTtcclxuXHJcblx0JChcIi5uZXh0QnV0XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAocGFnZU51bSA8IDkpIHtcclxuXHRcdFx0cGFnZU51bSsrO1xyXG5cdFx0XHRiZWVyTGlzdC5pbml0KHBhZ2VOdW0pO1xyXG5cdFx0XHQkKFwiLnByZXZCdXRcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0cGFnZU51bSsrO1xyXG5cdFx0XHRiZWVyTGlzdC5pbml0KHBhZ2VOdW0pO1xyXG5cdFx0XHQkKFwiLm5leHRCdXRcIikuYXR0cihcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JChcIi5wcmV2QnV0XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuXHRcdGlmIChwYWdlTnVtID4gMikge1xyXG5cdFx0XHRwYWdlTnVtLS07XHJcblx0XHRcdGJlZXJMaXN0LmluaXQocGFnZU51bSk7XHJcblx0XHRcdCQoXCIubmV4dEJ1dFwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRwYWdlTnVtLS07XHJcblx0XHRcdGJlZXJMaXN0LmluaXQocGFnZU51bSk7XHJcblx0XHRcdCQoXCIucHJldkJ1dFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSk7Il19
