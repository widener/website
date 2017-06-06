/*-------------------------------------------
	Collage
-------------------------------------------*/

Site.modules.Collage = (function($, Site) {

	function init() {
    countItems();
    bindUI();
    sizeCarousel();
  }

  function bindUI() {
    Site.onResize.push(sizeCarousel);

		$(".collage_item_link").on("click", function() {
			$(".collage_gallery_carousel").carousel("jump", $(this).data("index"));
		});
  }

  function countItems() {
    var images = $(".collage_item_open_wrapper").length;
    var videos = $(".collage_item_play_wrapper").length;

    $(".collage_detail_images").html(images);
    $(".collage_detail_videos").html(videos);
  }

  function sizeCarousel() {
    var height = 0;

    $(".collage_gallery_caption").each(function() {
      if($(this).height() > height) {
        height = $(this).height();
      }
    });

    $(".collage_gallery_caption").each(function() {
      $(this).css("height", height);
    });

    $(".collage_gallery_carousel .fs-carousel-controls").css("margin-bottom", height - $(".collage_gallery_carousel .fs-carousel-controls").height() + 10);

    $(".collage_gallery_background").each(function() {
      $(this).css("height", $(".collage_gallery").height() - ($(".collage_gallery_header").outerHeight() + $(".collage_gallery_details").outerHeight() + 80));
    });

		$(".collage_gallery_image iframe").each(function() {
      $(this).css("height", $(".collage_gallery").height() - ($(".collage_gallery_header").outerHeight() + $(".collage_gallery_details").outerHeight() + 80));
    });
  }

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
