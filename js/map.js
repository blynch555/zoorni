    // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
                

                var pozX = 38.5766058;
                var pozY = -121.4789523;
            function init() {
                     console.log(pozX+" : "+pozY)      


                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    zoom: 5, 
                    center: new google.maps.LatLng(pozX, pozY),
                    disableDefaultUI: true,
                    scrollwheel: true
                    

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                   //styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"saturation":"80"},{"invert_lightness":true}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"administrative.country","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#ff0000"}]},{"featureType":"administrative.province","elementType":"geometry","stylers":[{"visibility":"on"},{"saturation":"100"},{"lightness":"100"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"on"},{"invert_lightness":true}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"},{"saturation":"6"},{"lightness":"2"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"},{"saturation":"52"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"off"},{"weight":"7.34"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.bus","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.rail","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
                };
                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
                
                var markerImage = new google.maps.MarkerImage(
                    'img/marker.png',
                    new google.maps.Size(33,33),
                    new google.maps.Point(0,0),
                    new google.maps.Point(0,33)
                );

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    icon: markerImage,
                    position: new google.maps.LatLng(pozX, pozY),
                    // position: new google.maps.LatLng(30.6700, -94.9400), 
                    map: map,
                    title: 'zoorni!'
                });
                $('.map-navigation select').one('change',function(){
                    var change = $('.map-navigation select option:selected').attr('position');
                     pozX = $('.map-marker-info #'+change+' .marler-position-x').html();
                     pozY = $('.map-marker-info #'+change+' .marler-position-y').html();
                    $('.map-marker-box').html('');
                    var infoBox = $('.map-marker-info #'+change+' .marker-box-info').html();
                    console.log(infoBox)
                    $('.map-marker-box').html(infoBox);
                    $('.map-marker-box').css('display','block');
                     init();    
                 })
                $('.map-box-exit').on('click',function(){
                    $('.map-marker-box').css('display','none')
                })
            }