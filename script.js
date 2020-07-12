$('.navbar ul li a').on('click', function(e) {
    e.preventDefault();
    var link = $(this).attr('href').substring(1, $(this).attr('href').length);
    if($('.'+link).length) {
      $('.navbar span.body').empty().html($('.'+link).html());
    }
 });