$(function() {
  // word switcher
  const switcher = $('#word-switcher');
  const delay = 2000;
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
