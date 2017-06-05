/*-------------------------------------------
	Spotlight
-------------------------------------------*/

Site.modules.Spotlight = (function($, Site) {

	function init() {
    bindUI();
    determineCarousel();
	}

  function bindUI() {
    Site.onResize.push(determineCarousel);
  }

  function determineCarousel() {
    if($(".spotlight_switches_wrapper").css("top") == "0px") {
      $(".spotlight_switches").carousel("disable");
    } else {
      $(".spotlight_switches").carousel("enable");
    }
  }

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
