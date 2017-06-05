/*-------------------------------------------
	Gallery
-------------------------------------------*/

Site.modules.Gallery = (function($, Site) {

	var height = 0;
	var padding = 0;

	function init() {
		$(".gallery_panel .fs-carousel-controls").each(function() {
			$(this).wrap("<div class='fs-carousel-controls-wrapper'><div class='row'></div></div>");
		});

		$(".gallery_switch_background").background("loaded", function() {
			adjustGallery();
		});

		$(".gallery_switch").on("click", function() {
			$(".gallery_switches_close").trigger("click");
		});

		Site.onResize.push(adjustGallery);
	}

	function adjustGallery() {
		if($(".gallery_slide_caption").css("padding") == "0px") {
			resetValues();
			adjustCaptions();
			adjustControls();

			$(".gallery").css("padding-bottom", 0);
			$(".gallery_panels").css("height", height);
		} else {
			resetValues();
			adjustCaptions();
			adjustControls();

			$(".gallery").css("padding-bottom", padding + 20);
			$(".gallery_panels").css("height", height - padding);
		}
	}

	function resetValues() {
		height = $(".gallery_switches_wrapper").innerHeight();
		padding = 0;
	}

	function adjustCaptions() {
		$(".gallery_slide_caption").each(function() {
			$(this).innerHeight("auto");

			if($(this).innerHeight() > padding) {
				padding = $(this).innerHeight();
			}
		});

		$(".gallery_slide_caption").each(function() {
			$(this).innerHeight(padding);
		});
	}

	function adjustControls() {
		$(".gallery_panel .fs-carousel-controls-wrapper").css("bottom", padding + 40);
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
