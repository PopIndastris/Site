


						// HEADER

jQuery(document).ready(function(){

	let didScroll;
	let lastScrollTop = 0;
	let delta = 5;
	let navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		let st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('header').removeClass('nav-down').addClass('nav-up');
			$('.headerButtonPopUp').removeClass('displayPopUp');
			$('.headerMenu').removeClass('displayHeaderMenu');
			$('.burger').removeClass('is-active').addClass('is-deactive');
		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('header').removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = st;
	}

});

						// TO TOP

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

                        // SELECT

$('.inputTel~select').each(function(){
var $this = $(this), numberOfOptions = $(this).children('option').length;

$this.addClass('select-hidden');
$this.wrap('<div class="select"></div>');
$this.after('<div class="select-styled"></div>');

var $styledSelect = $this.next('div.select-styled');
$styledSelect.text($this.children('option').eq(0).text());

var $list = $('<ul />', {
    'class': 'select-options'
}).insertAfter($styledSelect);

for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
    }).appendTo($list);
}

$('form li').append(function (index){
    return $('<i />', { value: (index) })
});

var $listItems = $list.children('li');

$styledSelect.click(function(e) {
    e.stopPropagation();
    $('div.select-styled.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.select-options').hide();
    });
    $(this).toggleClass('active').next('ul.select-options').toggle();
});

$listItems.click(function(e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
});

$(document).click(function() {
    $styledSelect.removeClass('active');
    $list.hide();
});

});
							// hederButtonPopUp

$('.popUpInputTel~select').each(function(){
var $this = $(this), numberOfOptions = $(this).children('option').length;

$this.addClass('popUpselect-hidden');
$this.wrap('<div class="popUpselect"></div>');
$this.after('<div class="popUpselect-styled"></div>');

var $styledSelect = $this.next('div.popUpselect-styled');
$styledSelect.text($this.children('option').eq(0).text());

var $list = $('<ul />', {
    'class': 'popUpselect-options'
}).insertAfter($styledSelect);

for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
    }).appendTo($list);
}

$('form li').append(function (index){
    return $('<i />', { value: (index) })
});

var $listItems = $list.children('li');

$styledSelect.click(function(e) {
    e.stopPropagation();
    $('div.popUpselect-styled.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.popUpselect-options').hide();
    });
    $(this).toggleClass('active').next('ul.popUpselect-options').toggle();
});

$listItems.click(function(e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
});

$(document).click(function() {
    $styledSelect.removeClass('active');
    $list.hide();
});

});

						// GALLERY MENU

let galleryMenu = function () {
	$('.galleryMenuItem').click(function () {
		$('.galleryMenuItem').removeClass('galleryMenuItemActive');
		$(this).addClass('galleryMenuItemActive');
	});
};

galleryMenu();
						//DRUM


let drum = function () {
	$('.drumItem').mouseenter(function() {
		$('.drumItem').removeClass('drumItemActive');
		$(this).addClass('drumItemActive');
		$('.imagesItem').removeClass('imagesItemActive')
		$('.drumImages').children('.imagesItem').eq($(this).index()).addClass('imagesItemActive');
		let drumIndex = 182 - 182 * ($(this).index());
		$('.imagesItem').css('transform', function () {
			return 'translateY(' + drumIndex  + 'px)';
		})
	});

	$('.imagesItem').click(function() {
		$('.imagesItem').removeClass('imagesItemActive')
		$('.drumImages').children('.imagesItem').eq($(this).index()).addClass('imagesItemActive');
		let drumIndex = 182 - 182 * ($(this).index());
		$('.imagesItem').css('transform', function () {
			return 'translateY(' + drumIndex  + 'px)';
		});
		$('.drumItem').removeClass('drumItemActive').removeClass('drumItemActive');
		$('.drumList').children('.drumItem').eq($(this).index()).addClass('drumItemActive');
	});
};

drum();


						// DOWNLOAD BAR

let isDone = false;

function downloadBar() {
	if (!isDone) {
		let procent = 1131;
		let procentText = -1;

		let timerProcent = setInterval(function() {
			procent-=3;
			$('.download svg circle:nth-child(2)').css('stroke-dashoffset', procent);
			if (procent == 0) {
				clearInterval(timerProcent);
			};
		}, 6);

		let timerProcentText = setInterval(function() {
			procentText++;
			$('.procent span').text(procentText);
			if (procentText == 100) {
				clearInterval(timerProcentText);
				$('.procent').css({
					'transform': 'scale(1.15)',
					'transition': '.3s'
				});
				setTimeout(function() {
					$('.procent').css({
						'transform': 'scale(1)',
					});
				}, 300);
			};
		},22.62);
	};
	isDone = true;
};

						// SCROLL ANIMATION

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			let animElement = change.target;
			animElement.classList.add('active');
			if (animElement.classList.contains('download')) {
				setTimeout(downloadBar, 300);
			};
		};
	});
}

let options = {
	threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.animItem');

for (let elm of elements) {
	observer.observe(elm);
}

// $('.formButton, .popUpFormButton, .appformButton').on('click', function() {
// 	$('.zForm').addClass('display');
// 	$('.zApplication').removeClass('display');
// });

$('.zFormBack, .zFormCross').on('click', function() {
	$('.zForm').removeClass('display');
	$('.headerButtonPopUp').removeClass('displayPopUp');
});

$('.callButton').on('click', function() {
	$('.burger').removeClass('is-active').addClass('is-deactive');
	$('.headerMenu').removeClass('displayHeaderMenu');
});


$('.headerButton').on('click', function() {
	$('.headerButtonPopUp').addClass('displayPopUp');
});


$('.topButton, .callButton, .topFlexItem, .accDetailed').on('click', function() {
	$('.zApplication').addClass('display');
});

$('.appBack, .appCross').on('click', function() {
	$('.zApplication').removeClass('display');
});

$('.topItem').on('click', function() {
	$('.topItemActive').removeClass('topItemActive').addClass('topItem');
	$(this).removeClass('topItem').addClass('topItemActive');
});
$('.topItem').on('click', function() {
	$('.topItemActive').removeClass('topItemActive').addClass('topItem');
	$(this).removeClass('topItem').addClass('topItemActive');
});

$('.item').on('click', function() {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active');
	};
});



$('#topItem').trigger('click');

						// BURGER

$('.burger').on('click', function() {
	if ($('.burger').hasClass('is-active')) {
		$('.burger').removeClass('is-active').addClass('is-deactive');
		$('.headerMenu').removeClass('displayHeaderMenu');
	} else {
		$('.burger').removeClass('is-deactive').addClass('is-active');
		$('.headerMenu').addClass('displayHeaderMenu');
	}

});


						// ACCORDION

$(document).ready(function() {
	$('.accordCap').on('click', f_acc);
});

function f_acc(){
	$('.accordContent').not($(this).next()).slideUp(500);
	$(this).next().slideToggle(500);
	if ($(this).find('div.ai1').hasClass('ai-active')) {
		$(this).find('div.ai1').removeClass('ai-active');
		$(this).find('div.ai2').removeClass('ai-active');
	} else {
		$('div.ai1').removeClass('ai-active');
		$('div.ai2').removeClass('ai-active');
		$(this).find('div.ai1').addClass('ai-active');
		$(this).find('div.ai2').addClass('ai-active');
	}
}

// let a = integer;
// let go_os = true;
//
// $(document).ready(function () {
// 	$(document).write('text')
// })


						// FORMSUBMIT

						//1 SMALL POPUP

$("[formId='sendMail1']").on('click', function() {
    let phone = $("[formId='phone1']").val();
    let communicationMethod = $("[formId='communicationMethod1']").val();


 	if (phone == '') {
        alert('Введите номер телефона');
        return false;
    } else if (communicationMethod == 'hide') {
        alert('Выберите способ связи');
        return false;
    }

    $.ajax({
        url: 'php/application.php',
        type: 'POST',
        cache: false,
        data: { 'name': name , 'phone': phone, 'communicationMethod': communicationMethod },
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail1').prop('disabled', true);
        },
        success: function () {
            $('#sendMail1').prop('disabled', false);
			$('.zForm').addClass('display');
			$('.zApplication').removeClass('display');
        }
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });


});

			// 2 BIG POPUP

$("[formId='sendMail2']").on('click', function() {
    let name = $("[formId='name2']").val();
    let phone = $("[formId='phone2']").val();
    let communicationMethod = $("[formId='communicationMethod2']").val();


	if (name == '') {
        alert('Введите Имя');
        return false;
    } else if (phone == '') {
        alert('Введите номер телефона');
        return false;
    } else if (!$("[formId='communicationMethod2']").is(':checked')) {
        alert('Выберите способ связи');
        return false;
    }

    $.ajax({
        url: 'php/application.php',
        type: 'POST',
        cache: false,
        data: { 'name': name , 'phone': phone, 'communicationMethod': communicationMethod },
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail2').prop('disabled', true);
        },
        success: function () {
            $('#sendMail2').prop('disabled', false);
			$('.zForm').addClass('display');
			$('.zApplication').removeClass('display');
        }
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });


});

				// 3 WIDTH NAME

$("[formId='sendMail3']").on('click', function() {
    let name = $("[formId='name3']").val();
    let phone = $("[formId='phone3']").val();
    let communicationMethod = $("[formId='communicationMethod3']").val();


	if (name == '') {
        alert('Введите Имя');
        return false;
    } else if (phone == '') {
        alert('Введите номер телефона');
        return false;
    } else if (!$("[formId='communicationMethod3']").is(':checked')) {
        alert('Выберите способ связи');
        return false;
    }

    $.ajax({
        url: 'php/application.php',
        type: 'POST',
        cache: false,
        data: { 'name': name , 'phone': phone, 'communicationMethod': communicationMethod },
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail3').prop('disabled', true);
        },
        success: function () {
            $('#sendMail3').prop('disabled', false);
			$('.zForm').addClass('display');
			$('.zApplication').removeClass('display');
        }
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });


});

						// 4 WIDTH OUT NAME

$("[formId='sendMail4']").on('click', function() {
	let phone = $("[formId='phone4']").val();
	let communicationMethod = $("[formId='communicationMethod4']").val();


 	if (phone == '') {
		alert('Введите номер телефона');
		return false;
	} else if (communicationMethod == 'hide') {
		alert('Выберите способ связи');
		return false;
	}

	$.ajax({
		url: 'php/application.php',
		type: 'POST',
		cache: false,
		data: { 'name': name , 'phone': phone, 'communicationMethod': communicationMethod },
		dataType: 'html',
		beforeSend: function () {
			$('#sendMail4').prop('disabled', true);
		},
		success: function () {
			$('#sendMail4').prop('disabled', false);
			$('.zForm').addClass('display');
			$('.zApplication').removeClass('display');
		}
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});


});

						// 5 MOBILE   POP UP

$("[formId='sendMail5']").on('click', function() {
    let name = $("[formId='name5']").val();
    let phone = $("[formId='phone5']").val();
    let communicationMethod = $("[formId='communicationMethod5']").val();

	if (name == '') {
        alert('Введите Имя');
        return false;
    } else if (phone == '') {
        alert('Введите номер телефона');
        return false;
    } else if (communicationMethod == null) {
        alert('Выберите способ связи');
        return false;
    }

    $.ajax({
        url: 'php/application.php',
        type: 'POST',
        cache: false,
        data: { 'name': name , 'phone': phone, 'communicationMethod': communicationMethod },
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail5').prop('disabled', true);
        },
        success: function () {
            $('#sendMail5').prop('disabled', false);
			$('.zForm').addClass('display');
			$('.zApplication').removeClass('display');
        }
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });


});

						// 5 MOBILE   WITH NAME

$("[formId='sendMail6']").on('click', function() {
	let name = $("[formId='name6']").val();
	let phone = $("[formId='phone6']").val();
	let communicationMethod = $("[formId='communicationMethod6']").val();

	if (name == '') {
		alert('Введите Имя');
		return false;
	} else if (phone == '') {
		alert('Введите номер телефона');
		return false;
	} else if (communicationMethod == null) {
		alert('Выберите способ связи');
		return false;
	}

	$.ajax({
		url: 'php/application.php',
		type: 'POST',
		cache: false,
		data: { 'name': name , 'phone': phone, 'communicationMethod': communicationMethod },
		dataType: 'html',
		beforeSend: function () {
		$('#sendMail6').prop('disabled', true);
		},
		success: function () {
		$('#sendMail6').prop('disabled', false);
		$('.zForm').addClass('display');
		$('.zApplication').removeClass('display');
		}
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});


});

// 5 MOBILE   WITH OUT NAME

$("[formId='sendMail7']").on('click', function() {
	let phone = $("[formId='phone7']").val();
	let communicationMethod = $("[formId='communicationMethod7']").val();

	 if (phone == '') {
		alert('Введите номер телефона');
		return false;
	} else if (communicationMethod == null) {
		alert('Выберите способ связи');
		return false;
	}

	$.ajax({
		url: 'php/application.php',
		type: 'POST',
		cache: false,
		data: { 'name': name , 'phone': phone, 'communicationMethod': communicationMethod },
		dataType: 'html',
		beforeSend: function () {
		$('#sendMail7').prop('disabled', true);
		},
		success: function () {
		$('#sendMail7').prop('disabled', false);
		$('.zForm').addClass('display');
		$('.zApplication').removeClass('display');
		}
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});


});

// 						NO RIGHT CLiCK
//
// document.oncontextmenu = function() {
// 	return false;
// };
// document.onkeydown = function(e) {
// 	if (e.keyCode == 123) {
// 			return false;
// 		}
// 	if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
// 			return false;
// 		}
// 	if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
// 			return false;
// 		}
// 	if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
// 		return false;
// 	}
// 	if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
// 		return false;
// 	}
// }
