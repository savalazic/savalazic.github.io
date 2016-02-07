$(document).ready(function(){

	$('.main').onepage_scroll();

	$('.home').click(function(){
		$('.main').moveTo(1);
	});
	$('.about').click(function(){
		$('.main').moveTo(2);
	});
	$('.works').click(function(){
		$('.main').moveTo(3);
	});

	$('.contact').click(function(){
		$('.main').moveTo(4);
	});

	// HOME TYPING

  $(function(){
        $(".element").typed({
            strings: ["^1500Hello World.<br>My name is Sava Lazic.<br>I'm a Web Developer."],
						typeSpeed: 10,
						loop: false
        });
  });

	// CONTACT TYPING

	$(function(){
        $(".msg").typed({
            strings: ["savalazic9@gmail.com", "MESSAGE ME^3500"],
						typeSpeed: 50,
						loop: true
        });
	});

	// ABOUT - SKILLS JQUERY TYPING

	$(function(){
        $(".html").typed({
            strings: ["html5"],
						typeSpeed: 100,
						loop: false
        });
	});
	$(function(){
        $(".css").typed({
            strings: ["^1500css3"],
						typeSpeed: 100,
						loop: false
        });
	});
	$(function(){
        $(".js").typed({
            strings: ["^2000javascript"],
						typeSpeed: 100,
						loop: false
        });
	});
	$(function(){
        $(".jquery").typed({
            strings: ["^2500jquery"],
						typeSpeed: 100,
						loop: false
        });
	});
	$(function(){
        $(".responsive").typed({
            strings: ["^3300responsive"],
						typeSpeed: 100,
						loop: false
        });
	});

	$(function(){
        $(".design").typed({
            strings: ["^4500web design"],
						typeSpeed: 100,
						loop: false
        });
	});
	$(function(){
        $(".php").typed({
            strings: ["^5700php"],
						typeSpeed: 100,
						loop: false
        });
	});

	$(function(){
        $(".java").typed({
            strings: ["^6200java"],
						typeSpeed: 100,
						loop: false,
        });
	});
	$(function(){
        $(".mysql").typed({
            strings: ["^6700mysql"],
						typeSpeed: 100,
						loop: false
        });
	});
	$(function(){
        $(".android").typed({
            strings: ["^7200android"],
						typeSpeed: 100,
						loop: false
        });
	});

	// WORK TYPING

	$(function(){
        $(".work-header").typed({
            strings: ["^1000What I can do."],
						typeSpeed: 150,
						loop: false
        });
	});
	$(function(){
        $(".design-work").typed({
            strings: ["^4000Design."],
						typeSpeed: 100,
						loop: false
        });
	});
	$(function(){
        $(".develop-work").typed({
            strings: ["^4800Develop."],
						typeSpeed: 100,
						loop: false
        });
	});





});
