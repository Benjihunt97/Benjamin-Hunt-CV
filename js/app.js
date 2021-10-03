$(window).on("load", function () {
	$(".loader").fadeOut(4000);
	$(".container").fadeIn(4000);
});

$(document).ready(function () {
	$(".reload").click(function () {
		location.reload();
	});

	let width = $(".window").width();

	$(".next").on("click", function () {
		$(".window").animate({ scrollLeft: "+=" + width }, 600);
	});

	$(".prev").on("click", function () {
		$(".window").animate({ scrollLeft: "-=" + width }, 600);
	});

	$(".tab_info").eq(1).hide();
	$(".tab_info").eq(2).hide();

	// $(".tab_item").click(function () {
	// 	$(this).addClass("active").siblings().removeClass("active");
	// 	$('.tab_info')
	// });
	//	Simpler version of The tab selection

	$(".tab_item")
		.eq(0)
		.on("click", function () {
			$(this).addClass("active");
			$(".tab_item").eq(1).removeClass("active");
			$(".tab_item").eq(2).removeClass("active");

			$(".tab_info").eq(0).show();
			$(".tab_info").eq(1).hide(); //hide tab info
			$(".tab_info").eq(2).hide(); //hide tab info
		});

	$(".tab_item")
		.eq(1)
		.on("click", function () {
			$(this).addClass("active");
			$(".tab_item").eq(0).removeClass("active");
			$(".tab_item").eq(2).removeClass("active");

			$(".tab_info").eq(1).show();
			$(".tab_info").eq(0).hide(); //hide tab info
			$(".tab_info").eq(2).hide(); //hide tab info
		});

	$(".tab_item")
		.eq(2)
		.on("click", function () {
			$(this).addClass("active");
			$(".tab_item").eq(0).removeClass("active");
			$(".tab_item").eq(1).removeClass("active");

			$(".tab_info").eq(2).show();
			$(".tab_info").eq(0).hide(); //hide tab info
			$(".tab_info").eq(1).hide(); //hide tab info
		});
});
