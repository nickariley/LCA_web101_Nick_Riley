// Refactored with jQuery!
// Read through the comments to make sense of this new code. This is the only way you'll learn before practicing it. 
// "Stay on target!"

$(document).ready(function($) {

    var $findMeBtn = $('.find-me');
  
    // Check if the browser supports the Geolocation API
    // Reads: if navigator.geolocations is not true
    if (!navigator.geolocation) {
  
      // then disable the "Find your location" by adding the "disabled" attribute
      $findMeBtn.addClass('disabled');
      // and make the the "visible" attribute to the <p/> with the "no-geolocation-support" class     
      $('.no-geolocation-support').addClass('visible');
  
      // But if the geolocation is available...
      // Check if the page is accessed over HTTPS
    } else if (location.protocol !== 'https:') {
  
      // Fancy work here: simply asking if the page that's loading is infact loading in the local   browser (top-level frame), not loading in an iframe that is being rendered somewhere else and brought in to the page because CodePen doesn't allow that. 
      if (window.top === window.self) {
  
        // Reload the page over HTTPS
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  
        // If not top-level, display a message
        // Note: CodePen does not allow an `<iframe>` to reload the top-level frame (browser window). See about the `sandbox` attribute at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#Attributes.
      
      // else, if browser won't run "https" vs "http" we're going to block the user from using the service.
      } else {
  
        $findMeBtn.addClass('disabled');
        $('.not-on-https').addClass('visible');
  
      };
  
    // Finally, if all checks pass let's use the Geolocation API!
    } else {
  
      $findMeBtn.on('click', function(e) {
  
        // always added in to prevent the page from reloading on the click event 
        e.preventDefault();
  
        navigator.geolocation.getCurrentPosition(function(position) {
  
          // Get the location coordinates
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
  
          $('.latitude').text(lat.toFixed(6) + '°');
          $('.longitude').text(lng.toFixed(6) + '°');
          $('.coordinates').addClass('visible');
  
          // Really fancy stuff here...
          // Create a map and place a marker at the current location 
          // https://developers.google.com/maps/documentation/javascript/reference
          // But you can figure it out :)
  
          // calls google and ask for a method called "maps" to create an image of where we are.
          var mapLatLng = new google.maps.LatLng(lat, lng);
  
          // Holds the values for the "maps" functions to know how we want the map to be rendered.
          var mapOptions = {
            zoom: 15,
            mapTypeControl: false,
            center: mapLatLng,
          };
  
          // Noticed at the end of this line: "mapOptions" is passed into the "map" method?
          var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
          // Holds the value of the device we just asked for it coordinates.   
          var mapMarker = new google.maps.Marker({
            position: mapLatLng,
            map: map,
            title: 'Your browser/device places you here',
          });
         
          // Re-center the map on user location when window/viewport resizes
          $(window).resize(function() {
            google.maps.event.trigger(map, 'resize');
            map.panTo(mapLatLng);
          });
  
        });
  
      });
  
    };
  
  });
  