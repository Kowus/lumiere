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
window.sr = ScrollReveal({reset:true});
sr.reveal('.definitions',{duration: 2000}, 800);
sr.reveal('.soc-but',{duration:2000},200);
sr.reveal('.fadein-head',{duration: 2000,origin:'top',distance:'50px'}, 300);
sr.reveal('.intro-divider', {duration: 1000, distance:'10vh'});
sr.reveal('.columns',{duration:2000,origin:'top',distance:'50vh', reset:false},200);
sr.reveal('.price-zone',{duration:2000,reset:false});
sr.reveal('.stats',{duration:2000,distance:'100px',reset:false});
sr.reveal('.price-zone-btn',{duration:1000, distance:'10vh',delay:1000,reset:false});