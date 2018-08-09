(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var beer = {};

beer.init = function () {
	console.log("initialization");
	var winWidth = window.innerWidth;
	console.log(winWidth);
	var numOfElements = Math.floor(winWidth / 200);
	console.log(numOfElements);
	var elementWidth = Math.floor(100 / numOfElements);
	for (var i = 0; i <= numOfElements; i++) {
		$.ajax({
			url: "https://api.punkapi.com/v2/beers/random",
			method: "GET",
			dataType: "json"
		}).then(function (res) {
			console.log(res);
			var $title = $("<h2>").text(res[0].name);
			var $tagline = $("<p>").text(res[0].tagline);
			var $image = $("<img>").addClass("image").attr("src", res[0].image_url);
			var $textDiv = $("<div>").addClass("text").append($title, $tagline);
			var $overlayDiv = $("<div>").addClass("overlay").append($textDiv);
			var $linkEl = $("<a>").attr("href", "beerinfo.html?id=" + res[0].id).append($overlayDiv);
			var $containerDiv = $("<div>").addClass("container").append($image, $linkEl);
			$(".container").css("width", elementWidth + "%");
			$(".photoBar").append($containerDiv);
		});
	}
};

$(document).ready(function () {
	// for some reason you must specify the elements of the html file you want loaded.  *look into later*
	$("#header-placeholder").load("headerBar.html header");
	$("#footer-placeholder").load("headerBar.html footer");
	// $.get("headerBar.html", function(data){
	// 	console.log("test");
	// 	// $("#header-placeholder").replaceWith(data);
	// });
	beer.init();
	$("form").on("submit", function (e) {
		e.preventDefault();
		console.log("test");
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLElBQU0sT0FBTyxFQUFiOztBQUVBLEtBQUssSUFBTCxHQUFZLFlBQU07QUFDakIsU0FBUSxHQUFSLENBQVksZ0JBQVo7QUFDQSxLQUFJLFdBQVcsT0FBTyxVQUF0QjtBQUNBLFNBQVEsR0FBUixDQUFZLFFBQVo7QUFDQSxLQUFJLGdCQUFnQixLQUFLLEtBQUwsQ0FBVyxXQUFXLEdBQXRCLENBQXBCO0FBQ0EsU0FBUSxHQUFSLENBQVksYUFBWjtBQUNBLEtBQUksZUFBZSxLQUFLLEtBQUwsQ0FBVyxNQUFNLGFBQWpCLENBQW5CO0FBQ0EsTUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixLQUFLLGFBQXJCLEVBQW9DLEdBQXBDLEVBQXlDO0FBQ3hDLElBQUUsSUFBRixDQUFPO0FBQ04sUUFBSyx5Q0FEQztBQUVOLFdBQVEsS0FGRjtBQUdOLGFBQVU7QUFISixHQUFQLEVBSUcsSUFKSCxDQUlRLFVBQUMsR0FBRCxFQUFTO0FBQ2hCLFdBQVEsR0FBUixDQUFZLEdBQVo7QUFDQyxPQUFJLFNBQVMsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLElBQUksQ0FBSixFQUFPLElBQXRCLENBQWI7QUFDQSxPQUFJLFdBQVcsRUFBRSxLQUFGLEVBQVMsSUFBVCxDQUFjLElBQUksQ0FBSixFQUFPLE9BQXJCLENBQWY7QUFDQSxPQUFJLFNBQVMsRUFBRSxPQUFGLEVBQVcsUUFBWCxDQUFvQixPQUFwQixFQUE2QixJQUE3QixDQUFrQyxLQUFsQyxFQUF5QyxJQUFJLENBQUosRUFBTyxTQUFoRCxDQUFiO0FBQ0EsT0FBSSxXQUFXLEVBQUUsT0FBRixFQUFXLFFBQVgsQ0FBb0IsTUFBcEIsRUFBNEIsTUFBNUIsQ0FBbUMsTUFBbkMsRUFBMkMsUUFBM0MsQ0FBZjtBQUNBLE9BQUksY0FBYyxFQUFFLE9BQUYsRUFBVyxRQUFYLENBQW9CLFNBQXBCLEVBQStCLE1BQS9CLENBQXNDLFFBQXRDLENBQWxCO0FBQ0EsT0FBSSxVQUFVLEVBQUUsS0FBRixFQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLHNCQUFzQixJQUFJLENBQUosRUFBTyxFQUFuRCxFQUF1RCxNQUF2RCxDQUE4RCxXQUE5RCxDQUFkO0FBQ0EsT0FBSSxnQkFBZ0IsRUFBRSxPQUFGLEVBQVcsUUFBWCxDQUFvQixXQUFwQixFQUFpQyxNQUFqQyxDQUF3QyxNQUF4QyxFQUFnRCxPQUFoRCxDQUFwQjtBQUNBLEtBQUUsWUFBRixFQUFnQixHQUFoQixDQUFvQixPQUFwQixFQUFnQyxZQUFoQztBQUNBLEtBQUUsV0FBRixFQUFlLE1BQWYsQ0FBc0IsYUFBdEI7QUFDRCxHQWZEO0FBZ0JBO0FBQ0QsQ0F6QkQ7O0FBMkJBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVztBQUM1QjtBQUNBLEdBQUUscUJBQUYsRUFBeUIsSUFBekIsQ0FBOEIsdUJBQTlCO0FBQ0EsR0FBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4Qix1QkFBOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUssSUFBTDtBQUNBLEdBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQVMsQ0FBVCxFQUFXO0FBQzdCLElBQUUsY0FBRjtBQUNBLFVBQVEsR0FBUixDQUFZLE1BQVo7QUFDRixFQUhIO0FBS0EsQ0FkRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5cclxuY29uc3QgYmVlciA9IHt9O1xyXG5cclxuYmVlci5pbml0ID0gKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6YXRpb25cIik7XHJcblx0bGV0IHdpbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0Y29uc29sZS5sb2cod2luV2lkdGgpO1xyXG5cdGxldCBudW1PZkVsZW1lbnRzID0gTWF0aC5mbG9vcih3aW5XaWR0aCAvIDIwMCk7XHJcblx0Y29uc29sZS5sb2cobnVtT2ZFbGVtZW50cyk7XHJcblx0bGV0IGVsZW1lbnRXaWR0aCA9IE1hdGguZmxvb3IoMTAwIC8gbnVtT2ZFbGVtZW50cyk7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gbnVtT2ZFbGVtZW50czsgaSsrKSB7XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnMvcmFuZG9tXCIsXHJcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdFx0ZGF0YVR5cGU6IFwianNvblwiXHJcblx0XHR9KS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHR2YXIgJHRpdGxlID0gJChcIjxoMj5cIikudGV4dChyZXNbMF0ubmFtZSk7XHJcblx0XHRcdFx0dmFyICR0YWdsaW5lID0gJChcIjxwPlwiKS50ZXh0KHJlc1swXS50YWdsaW5lKTtcclxuXHRcdFx0XHR2YXIgJGltYWdlID0gJChcIjxpbWc+XCIpLmFkZENsYXNzKFwiaW1hZ2VcIikuYXR0cihcInNyY1wiLCByZXNbMF0uaW1hZ2VfdXJsKTtcclxuXHRcdFx0XHR2YXIgJHRleHREaXYgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJ0ZXh0XCIpLmFwcGVuZCgkdGl0bGUsICR0YWdsaW5lKVxyXG5cdFx0XHRcdHZhciAkb3ZlcmxheURpdiA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcIm92ZXJsYXlcIikuYXBwZW5kKCR0ZXh0RGl2KTtcclxuXHRcdFx0XHR2YXIgJGxpbmtFbCA9ICQoXCI8YT5cIikuYXR0cihcImhyZWZcIiwgXCJiZWVyaW5mby5odG1sP2lkPVwiICsgcmVzWzBdLmlkKS5hcHBlbmQoJG92ZXJsYXlEaXYpO1xyXG5cdFx0XHRcdHZhciAkY29udGFpbmVyRGl2ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiY29udGFpbmVyXCIpLmFwcGVuZCgkaW1hZ2UsICRsaW5rRWwpO1xyXG5cdFx0XHRcdCQoXCIuY29udGFpbmVyXCIpLmNzcyhcIndpZHRoXCIsIGAke2VsZW1lbnRXaWR0aH0lYCk7XHJcblx0XHRcdFx0JChcIi5waG90b0JhclwiKS5hcHBlbmQoJGNvbnRhaW5lckRpdik7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdC8vIGZvciBzb21lIHJlYXNvbiB5b3UgbXVzdCBzcGVjaWZ5IHRoZSBlbGVtZW50cyBvZiB0aGUgaHRtbCBmaWxlIHlvdSB3YW50IGxvYWRlZC4gICpsb29rIGludG8gbGF0ZXIqXHJcblx0JChcIiNoZWFkZXItcGxhY2Vob2xkZXJcIikubG9hZChcImhlYWRlckJhci5odG1sIGhlYWRlclwiKTtcclxuXHQkKFwiI2Zvb3Rlci1wbGFjZWhvbGRlclwiKS5sb2FkKFwiaGVhZGVyQmFyLmh0bWwgZm9vdGVyXCIpO1xyXG5cdC8vICQuZ2V0KFwiaGVhZGVyQmFyLmh0bWxcIiwgZnVuY3Rpb24oZGF0YSl7XHJcblx0Ly8gXHRjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcblx0Ly8gXHQvLyAkKFwiI2hlYWRlci1wbGFjZWhvbGRlclwiKS5yZXBsYWNlV2l0aChkYXRhKTtcclxuXHQvLyB9KTtcclxuXHRiZWVyLmluaXQoKTtcclxuXHQkKFwiZm9ybVwiKS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcbiAgXHR9KTtcclxuXHJcbn0pOyJdfQ==
