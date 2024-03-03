$(document).ready(function () {
  const dict = {};
  $('input[type=checkbox]').change(function () {
    const id = $(this).attr('data-id');
    const name = $(this).attr('data-name');

    if ($(this).is(':checked')) {
      dict[id] = name;
    } else {
      delete dict[id];
    }

    const list = Object.values(dict).join(', ');
    $('.amenities h4').text(list);
  });

  $.getJSON('http://localhost:5000/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
