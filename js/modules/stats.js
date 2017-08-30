/*-------------------------------------------
	Stats
-------------------------------------------*/

Site.modules.Stats = (function($, Site) {

	function init() {
		if($(".stats").hasClass("theme_expanded")) {
			randomize();
			bindUI();
			bindWindow();
			kickStart();
			resizeStats();
		}

		if($(".stats").hasClass("theme_condensed")) {
			randomize();
			bindWindow();
			resizeStats();
		}
	}

	function randomize() {
		$(".stat_wrapper").each(function() {
			var $item = $(this).find(".stat_item");
			var amount = $item.length;
			var limit = amount - 4;
			var random;

			for(var i = 0; i < limit; i++) {
				random = grabRandom(amount);

				while(!($item.eq(random).length)) {
					random = grabRandom(amount);
				}

				$item.eq(random).remove();
			}
		});
	}

	function grabRandom(limit) {
		return Math.round(Math.random() * (limit - 1) + 1);
	}

	function bindUI() {
		$(".stats select").on("change", function() {
			var index = $(this).find(":selected").index();

			$(".stats_list .stat_wrapper").removeClass("selected");
			$(".stats_list .stat_wrapper").eq(index).addClass("selected");
		});
	}

	function bindWindow() {
		Site.onResize.push(resizeStats);
	}

	function kickStart() {
		$(".stats select option").eq(0).trigger("change");
	}

	function resizeStats() {
		if($(".stats").hasClass("theme_expanded")) {
			var height = 0;

			$(".stat .js-carousel").carousel("resize");

			if($(".stats_accordion_wrapper").css("padding-right") == "40px" || $(".stats_accordion_wrapper").css("padding-right") == "140px") {
				$(".stats_accordion_wrapper .js-carousel").carousel("disable");
			} else {
				$(".stats_accordion_wrapper .js-carousel").carousel("enable");
			}

			if($(".stats_accordion_wrapper").css("padding-right") == "40px" || $(".stats_accordion_wrapper").css("padding-right") == "140px") {
				$(".stat_aside").each(function() {
					if($(this).height() > height) {
						height = $(this).height();
					}
				});
			} else {
				$(".stat_wrapper").each(function() {
					if($(this).height() > height) {
						height = $(this).height();
					}
				});
			}

			$(".stats_list").css("height", height + 30);
			$(".stats_accordion_wrapper").css("min-height", height);
		}

		if($(".stats").hasClass("theme_condensed")) {
			if($(".stat_aside").css("padding-right") == "15px") {
				$(".stats_accordion_wrapper .js-carousel").carousel("disable");
			} else {
				$(".stats_accordion_wrapper .js-carousel").carousel("enable");
			}
		}
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
