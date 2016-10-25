// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
$.backstretch('/nameplate/img/bg.jpg');

// Intialize Masonry
$('article').masonry({
	itemSelector: 'section',
	columnWidth: 300,
	gutter: 10,
	isFitWidth: true
});