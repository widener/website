/*-------------------------------------------
	Stats
-------------------------------------------*/

Site.modules.Stats = (function($, Site) {

	function init() {
		if($(".stats").hasClass("theme_expanded")) {
			bindUI();
			bindWindow();
			kickStart();
			resizeStats();
		}

		if($(".stats").hasClass("theme_condensed")) {
			bindWindow();
			resizeStats();
		}
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

			$(".stats_list").css("height", height);
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
