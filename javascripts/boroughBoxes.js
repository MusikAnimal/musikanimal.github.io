$(function() {
  $('.borough-select').on('click', function(e) {
    if (!$(this).hasClass('hidden') && Zoner.filteredState) {
      $(document).trigger('reset');
    } else {
      $(document).trigger('reset',{skipZoneRest: true});
      Zoner.showBorough($(this).data('url'));
    }
  });

  $(document).on('reset', function() {
    $('.borough-select').removeClass('hidden');
  });
});
