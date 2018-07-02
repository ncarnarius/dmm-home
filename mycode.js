$(function() {
  // word switcher
  const switcher = $('#word-switcher');
  const delay = 2500;
  const count = switcher.find('p').length;

  const calculateWidths = function() {
    switcher.find('p').each(function(index) {
      $(this).attr('data-width', $(this).width());
    });
    switcher.width(switcher.find('.active').attr('data-width'));
  };

  var doChange = function() {
    //let nextItem = undefined;
    const currentItem = parseInt(switcher.find('.active').attr('data-oid'));
    if (currentItem === (count - 1)) {
      nextItem = 0;
    } else {
      nextItem = currentItem + 1;
    }
    switcher.addClass('in');
    switcher.find(`[data-oid="${currentItem}"]`).removeClass('active');
    switcher.find(`[data-oid="${nextItem}"]`).addClass('active');
    switcher.width(switcher.find(`[data-oid="${nextItem}"]`).attr('data-width'));
    setTimeout(doChange, delay);
  };

  calculateWidths();
  $(window).resize(function() {
    calculateWidths();
  });
  setTimeout(doChange, delay);
});



// --------------- scroll animation 1 ------------------- //

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".module1");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});


// ----------------- items scroll up ------------------ //

$('.revealedBox').each(function(i){ 

	var childrenSpan = $(this).children('span').length;

	$(this).addClass('childrenSpan-' + childrenSpan);  

  if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
  	$(this).addClass('revealedBox-in');       
  }   

}); 

$(window).scroll(function() { 
	$('.revealedBox').each(function(i){  
  if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
  	$(this).addClass('revealedBox-in');       
  }   
}); 
  
});



