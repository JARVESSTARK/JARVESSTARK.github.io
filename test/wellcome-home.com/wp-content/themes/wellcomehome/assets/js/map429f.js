var styles= [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e7e3e3"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "-37"
            },
            {
                "lightness": "33"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbd3da"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#bde6ab"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffe15f"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#efd151"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a2daf2"
            }
        ]
    }
];


var mapEl,
    mapObj,
    markerTmpl = "",
    markerCluster,
    icons,
    clusterStyle,
    mapCenter;


if(typeof js_vars === "undefined") {
    js_vars = {
        templateurl : ''
    }
}


function loadGoogleMaps() {
    if($('#map').length) {
        loadScript(js_vars.templateurl + '/assets/js/map-infobox.js', initializeMap);
    }
}

function initializeMap() {
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = js_vars.templateurl+"/assets/js/map-infobox.js";

    markerTmpl = $('#tmpl-infobox').html();

    if(typeof singleOffer !== "undefined") {
        mapCenter = new google.maps.LatLng(singleOffer.lat, singleOffer.lng);
    }else{
        mapCenter = new google.maps.LatLng(50.262239, 19.022425);
    }

    var mapOptions = {
        zoom: 12,
        minZoom:4,
        center: mapCenter,
        scrollwheel: false,
        draggable: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? false : true,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false
    };


    var styled_map = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    icons = {
        normal : {
            url: js_vars.templateurl + '/assets/img/pin-normal.png',
            size: new google.maps.Size(40, 68),
            scaledSize: new google.maps.Size(20, 34),
            anchor: new google.maps.Point(10, 34)
        },
        active : {
            url: js_vars.templateurl + '/assets/img/pin-active.png',
            size: new google.maps.Size(40, 68),
            scaledSize: new google.maps.Size(20, 34),
            anchor: new google.maps.Point(10, 34)
        },
        occupied : {
            url: js_vars.templateurl + '/assets/img/pin-occupied.png',
            size: new google.maps.Size(40, 68),
            scaledSize: new google.maps.Size(20, 34),
            anchor: new google.maps.Point(10, 34)
        },
        soon : {
            url: js_vars.templateurl + '/assets/img/pin-soon.png',
            size: new google.maps.Size(40, 68),
            scaledSize: new google.maps.Size(20, 34),
            anchor: new google.maps.Point(10, 34)
        },
        under : {
            url: js_vars.templateurl + '/assets/img/pin-under.png',
            size: new google.maps.Size(40, 68),
            scaledSize: new google.maps.Size(20, 34),
            anchor: new google.maps.Point(10, 34)
        }
    };

    /*

  {
    textColor: 'white',
    url: 'path/to/smallclusterimage.png',
    height: 50,
    width: 50
  },
 {
    textColor: 'white',
    url: 'path/to/mediumclusterimage.png',
    height: 50,
    width: 50
  },
 {
    textColor: 'white',
    url: 'path/to/largeclusterimage.png',
    height: 50,
    width: 50
  }
]

    * */


    clusterStyle = [
        [{
            url: js_vars.templateurl + '/assets/img/pin-cluster.png',
            height: 35,
            lineHeight: 30,
            width: 23,
            anchor: [0, 0],
            textColor: '#fff',
            textSize: 14
        }]
    ];

    mapEl = document.getElementById('map');
    mapObj = new google.maps.Map(mapEl, mapOptions);

    google.maps.Map.prototype.markers = [];
    google.maps.Map.prototype.tooltips = [];
    google.maps.Map.prototype.bounds = new google.maps.LatLngBounds();


    google.maps.Map.prototype.closeTooltips = function() {
        for(var i in this.markers) {
            this.markers[i].setIcon(icons[this.markers[i].icoName]);
        }
        for(var i in this.tooltips) {
            this.tooltips[i].close();
        }
    };

    google.maps.Map.prototype.getMarkers = function() {
        return this.markers
    };

    google.maps.Map.prototype.clearMarkers = function() {

        for(var i=0; i<this.markers.length; i++){
            this.markers[i].setMap(null);
        }
        this.markers.length = 0;
        this.markers = new Array();


        if(markerCluster) {
            markerCluster.clearMarkers();
        }

    };

    google.maps.Map.prototype.addMarker = function(place, isInfobox, addToBounds) {
        var self = this;

        var LatLng = new google.maps.LatLng(place.lat, place.lng);

        place.defaultIcon = 'normal';
        if(place.occupied) place.defaultIcon = 'occupied';
        if(place.soon) place.defaultIcon = 'soon';
        if(place.under) place.defaultIcon = 'under';
        if(place.booked) place.defaultIcon = 'occupied';


        var marker = new google.maps.Marker({
            position: LatLng,
            map: mapObj,
            icon: icons[place.defaultIcon]
        });
        marker.icoName = place.defaultIcon;

        if(typeof addToBounds !== "undefined" && addToBounds) {
            this.bounds.extend(LatLng)
        }

        if(isInfobox) {

            place.isOccupied = (place.occupied == true) ? ' show-occupied' : '';
            place.isSoon = (place.soon == true) ? ' show-coming-soon' : '';
            place.isUnder = (place.under == true) ? ' show-under' : '';
            place.isBooked = (place.booked == true) ? ' show-booked' : '';

            var html = prepareTmpl(place, markerTmpl);


            var offset = $("<div class='infoBox'>" + html + "</div>").getSize();

            marker.sizes = offset;

            var infoBoxOptions = {
                content: html,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(35, -1 * parseInt(offset.height / 2)),
                zIndex: null,
                closeBoxMargin: "0",
                closeBoxURL: js_vars.templateurl + "/assets/img/ico-close.png",
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false
            };

            var iBox = new InfoBox(infoBoxOptions);

            this.tooltips.push(iBox);

            // iBox.addListener("domready", function () {
            //
            //     $('.tab-title').click(function (e) {
            //
            //
            //         e.preventDefault();
            //         var parent = $(this).parent('.tab-wrap');
            //         if (parent.hasClass('active')) {
            //             parent.removeClass('active');
            //         } else {
            //             parent.parent('.content').find('.tab-wrap.active').removeClass('active');
            //             parent.addClass('active');
            //         }
            //     })
            // });


            google.maps.event.addListener(iBox, 'closeclick', (function (marker, id) {
                return function () {
                    marker.setIcon(icons[marker.icoName])
                };
            })(marker, this.markers.length));


            google.maps.event.addListener(marker, 'click', (function (marker, id) {
                return function () {

                    map_recenter(marker.getPosition(), -1 * parseInt(marker.sizes.width/2), 0);

                    self.closeTooltips();

                    marker.setIcon(icons['active'])
                    self.tooltips[id].open(mapObj, marker);

                };
            })(marker, this.markers.length));

            this.markers[this.markers.length] = marker;
        }
    };

    mapObj.mapTypes.set('map_style', styled_map);
    mapObj.setMapTypeId('map_style');


    if(typeof markers !== "undefined") {
        for(var i in markers) {
            var bounds = true;
            if(markers[i].thb == false) {
                markers[i].thb = "";
            }

            if(typeof markers[i] === "object") mapObj.addMarker(markers[i], true, bounds);
        }

        markerCluster = new MarkerClusterer(mapObj, mapObj.markers, {
            maxZoom: 19,
            gridSize: 19,
            styles: clusterStyle[0],
            imagePath: js_vars.templateurl + '/assets/img/m'
        });
    }

    if(typeof singleOffer !== "undefined") {
        mapObj.addMarker(singleOffer, false, true);
    }

    if($(mapEl).is(':visible')) {
        fitbounds();
    }

    // $.getJSON( "assets/places.json?v1", function( data ) {
    //     for(var i in data) {
    //         data[i].icoName = "place";
    //         map_data.places.push(data[i]);
    //         mapObj.addMarker(data[i]);
    //     }
    // });

    function map_recenter(latlng,offsetx,offsety) {
        var point1 = mapObj.getProjection().fromLatLngToPoint(
            (latlng instanceof google.maps.LatLng) ? latlng : mapObj.getCenter()
        );
        var point2 = new google.maps.Point(
            ( (typeof(offsetx) == 'number' ? offsetx : 0) / Math.pow(2, mapObj.getZoom()) ) || 0,
            ( (typeof(offsety) == 'number' ? offsety : 0) / Math.pow(2, mapObj.getZoom()) ) || 0
        );
        mapObj.setCenter(mapObj.getProjection().fromPointToLatLng(new google.maps.Point(
            point1.x - point2.x,
            point1.y + point2.y
        )));
    }
}

function addMarkers(markers) {

    mapObj.clearMarkers();
    mapObj.bounds = new google.maps.LatLngBounds();

    if(typeof markers !== "undefined" && markers.length > 0) {

        for(var i in markers) {
            var bounds = true;
            if(markers[i].thb == false) {
                markers[i].thb = "";
            }
            mapObj.addMarker(markers[i], true, bounds);
        }
    }

    markerCluster = new MarkerClusterer(mapObj, mapObj.markers, {
        maxZoom: 19,
        gridSize: 19,
        styles: clusterStyle[0],
        imagePath: js_vars.templateurl + '/assets/img/m'
    });

    if($(mapEl).is(':visible')) {
        fitbounds();
    }
}

function fitbounds() {
    // google.maps.event.addListenerOnce(mapObj, 'zoom_changed', function() {
    //     setTimeout(function () {
    //         mapObj.setZoom(Math.min(mapObj.getZoom(), 16));
    //     },20);
    // });

    if(mapObj.markers.length > 0) {
        mapObj.fitBounds(mapObj.bounds);
    }else if(typeof singleOffer === "undefined") {
        mapObj.setCenter(mapCenter);
        mapObj.setZoom(12);
    }else{
        //single offer
        mapObj.setZoom(16);
    }

    google.maps.event.trigger(mapEl, 'resize');
}