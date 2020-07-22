google.maps.event.addDomListener(window, 'load', function () {
    const places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'), {
    fields: ["formatted_address"]
});
    google.maps.event.addListener(places, 'place_changed', function () {
      place = places.getPlace().formatted_address;
      document.getElementById('txtPlaces').value = place;
    });
});
