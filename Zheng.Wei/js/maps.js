

const makeMap = async(target, center={ lat: 37.786229, lng: -122.399287 }) => {
	await checkData(()=>window.google);

	let map_el = $(target);

	if(!map_el.data("map")) map_el.data({
			"map": new google.maps.Map(map_el[0], {
				center: center,
				zoom: 12,
				styles: mapStyles,
				disableDefaultUI: true
			}),
			"infoWindow": new google.maps.InfoWindow({content:""})
	});

	// map_el.data("map") is the same as the map variable in demos

	return map_el;
}



const makeMarkers = (map_el,map_locs) => {

	let map = map_el.data("map");
	let markers = map_el.data("markers");

	if(markers) markers.forEach(o=>o.setMap(null));

	markers = [];

	map_locs.forEach((o,i,a)=>{
		let m = new google.maps.Marker({
			position: o,
			map: map_el.data("map"),
			icon: {
				// expects location object to have .icon property
				url: o.icon,
				scaledSize: {
					width:40,
					height:40
				}
			}
		});
		markers.push(m);
	});

	map_el.data("markers",markers);

	setTimeout(()=>setMapBounds(map_el.data("map"),map_locs), 100);
}


const setMapBounds = (map,map_locs) => {
	if(map_locs.length==1) {
		map.setCenter(map_locs[0]);
		map.setZoom(14);
	} else if(map_locs.length==0) {
		if(window.location.protocol!=="https:") return;
		else {
			navigator.geolocation.getCurrentPosition(p=>{
				let pos = {
					lat:p.coords.latitude,
					lng:p.coords.longitude
				}
				map.setCenter(pos);
				map.setZoom(15);
			},(...args)=>{
				console.log("Error?",args);
			},{
				enableHighAccuracy:false,
				timeout:5000,
				maximumAge:0
			});
		}
	} else {
		let bounds = new google.maps.LatLngBounds(null);
		map_locs.forEach(o=>{
			bounds.extend(o)
		});
		map.fitBounds(bounds);
	}
}












const mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6195a0"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            },
            {
                "color": "#f5f5f2"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-3"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
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
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bae5ce"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fac9a9"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#787878"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#0a00ff"
            },
            {
                "saturation": "-77"
            },
            {
                "gamma": "0.57"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#43321e"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff6c00"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "0.75"
            },
            {
                "saturation": "-68"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#eaf6f8"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c7eced"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-49"
            },
            {
                "saturation": "-53"
            },
            {
                "gamma": "0.79"
            }
        ]
    }
];