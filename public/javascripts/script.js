// Smooth Scrolling
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')	||location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});


// Scroll Reveal
var srOptions ={
	reset: true
}

window.sr = ScrollReveal(srOptions);

sr.reveal('.content-section-a',{duration: 1000});
sr.reveal('.soc-but',{duration:2000},200);
sr.reveal('.fadein-head',{duration: 2000,origin:'top',distance:'50px'}, 300);
sr.reveal('.intro-divider', {duration: 1000, distance:'10vh'});