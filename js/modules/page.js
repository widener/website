/*-------------------------------------------
	Page
-------------------------------------------*/

/* global picturefill, svg4everybody */

Site.modules.Page = (function($, Site) {

	var $mainNav = $(".js-main-nav");
	var $subNav = $(".js-sub-nav");
	var prev = "caret_left";
	var next = "caret_right";
	var $search = $(".site_search");

	function init() {

		// Plugins
		picturefill();
		svg4everybody();

		Site.$body.find(".js-background").background();
		Site.$body.find(".js-carousel").carousel({
			labels: {
				previous: "<span class='fs-carousel-icon'><svg class='symbol symbol_" + prev + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + prev + "'></use></svg></span>",
				next: "<span class='fs-carousel-icon'><svg class='symbol symbol_" + next + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + next + "'></use></svg></span>"
			}
		});
		Site.$body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox();
		Site.$body.find(".js-dropdown").dropdown();
		Site.$body.find(".js-equalize").equalize();
		Site.$body.find(".js-lightbox").lightbox({
			mobile: true,
			viewer: false,
			labels: {
				close: "<span class='fs-lightbox-icon-close'><svg class='symbol symbol_close'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#close'></use></svg></span>",
				previous: "<span class='fs-lightbox-icon-previous'><svg class='symbol symbol_" + prev + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#" + prev + "'></use></svg></span>",
				count: "<span class='fs-lightbox-meta-divider'></span>",
				next: "<span class='fs-lightbox-icon-next'><svg class='symbol symbol_" + next + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='" + next + "'></use></svg></span>"
			}
		});
		Site.$body.find(".js-navigation")
			.navigation({
				maxWidth: Site.maxLG + "px"
			})
			.on("open.navigation", function() {
				trackEvent($(this).data("analytics-open"));
				Site.$body.find(".js-navigation").attr("aria-hidden", "false").removeAttr("hidden");
			})
			.on("close.navigation", function() {
				trackEvent($(this).data("analytics-close"));
				Site.$body.find(".js-navigation").attr("aria-hidden", "true").attr("hidden", "");
			});
		Site.$body.find(".js-swap").swap();

		$.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
			enter: function() {
				$subNav.attr("aria-hidden", "false").removeAttr("hidden");
			},
			leave: function() {
				$subNav.attr("aria-hidden", "true").attr("hidden", "");
			}
		});

		$(".mini_search").on("click", function() {
			if($(this).attr("data-toggled") == "on") {
				$(this).attr("data-toggled", "off");
				$search.removeClass("swap-active");
			} else {
				$(this).attr("data-toggled", "on");
				$search.addClass("swap-active");
				console.log($search.find(".site_search_input").focus());
				$search.find(".site_search_input").focus();
			}
		});

		// Explorer

		$(".explorer_discovery").on("click", function() {
			if($(".explorer_panel").css("position") == "fixed") {
				$("body").addClass("fs-navigation-lock");
			}
		});

		$(".explorer_panel_close").on("click", function() {
			if($(".explorer_panel").css("position") == "fixed") {
				$("body").removeClass("fs-navigation-lock");
			}
		});


		// Collage

		$(".collage_item_link:not(.js-lightbox)").on("click", function() {
			$("body").addClass("fs-navigation-lock");
		});

		$(".collage_gallery_close").on("click", function() {
			$("body").removeClass("fs-navigation-lock");
		});


		// Quotes

		if($(".quote").length) {
			var count = $(".quote").length;

			$(".quote").each(function() {
				$(this).hide();
			});

			$(".quote").eq(Math.floor(Math.random() * count)).show();
		}


		// Display children of focused nav items

		$mainNav.find("a")
			.focus(function() {
				$(this).closest(".main_nav_item").addClass("focused");
			})
			.blur(function() {
				$(this).closest(".main_nav_item").removeClass("focused");
			});


		// Media Gallery

		if($(".media_gallery_items").length) {
			$(".media_gallery_items").equalize({
				target: ".media_gallery_label"
			});

			var height = $(".media_gallery_label").css("height");
			height = height.replace("px", "");
			height = parseInt(height) + 30;

			$(".media_gallery .fs-carousel-controls").css("margin-top", height);


		}


		// Analytics

		$.analytics({
			scrollDepth: true
		});


		// Wrapper for Tables

		Site.$body.find(".typography table")
			.wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');
		tableOverflow();


		// Responsive Video

		$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']", ".typography").each(function() {
			$(this).wrap('<div class="video_frame"></div>');
		});


		// Scrolling

		Site.onScroll.push(scroll);
		Site.onResize.push(resize);
		Site.onRespond.push(respond);

		Site.scroll();
	}

	function scroll() {}

	function resize() {
		scroll();
		tableOverflow();
	}

	function respond() {
		scroll();
	}

	function onScrollTo(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
				id = $target.attr("href");

		scrollToElement(id);
	}

	function scrollToElement(id) {
		var $to = $(id);

		if ($to.length) {
			var offset = $to.offset();

			scrollToPosition(offset.top);
		}
	}

	function scrollToPosition(top) {
		$("html, body").animate({
			scrollTop: top
		});
	}

	function onToggleClick(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
				activeClass = "js-toggle_active";

		if ($target.hasClass(activeClass)) {
			$target.removeClass(activeClass);
		} else {
			$target.addClass(activeClass);
		}
	}

	function trackEvent(data) {
		if ($.type(data) === "string") {
			data = data.split(",");

			$.analytics.apply(this, data);
		}
	}

	function tableOverflow() {
		$(".table_wrapper").each(function() {
			$(this).removeClass("table_wrapper_overflow");
			if ($(this).prop("scrollWidth") > $(this).width() + 1) {
				$(this).addClass("table_wrapper_overflow");
			} else {
				$(this).removeClass("table_wrapper_overflow");
			}
		});
	}


	// Hook Into Main init Routine

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
