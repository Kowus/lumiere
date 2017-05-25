const mapStyle = [
	{
		"featureType": "administrative",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"lightness": 22
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [
			{
				// "color": "#333"
				"color": "#c9bc9a"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#2c542d"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"lightness": 5
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "all",
		"stylers": [
			{
				"lightness": 0
			}
		]
	}/*,
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#c5c6c6"
			}
		]
	}*/,
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e4d7c6"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#999895"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#424951"
			}
		]
	}
];

function initMap() {

	// Create the map.
	const map = new google.maps.Map(document.getElementsByClassName('map')[0], {
		zoom: 6,
		center: {lat: 52.632469, lng: -1.689423},
		styles: mapStyle,
		scrollwheel: false,
		navigationControl: true,
		mapTypeControl: false,
		scaleControl: false,
		draggable: true
	});

	// Load the stores GeoJSON onto the map.
	map.data.loadGeoJson('/stores');

	// Define the custom marker icons, using the store's "category".
	map.data.setStyle(feature => {
		return {
			icon: {
				url: `/images/map_logos/icon_${feature.getProperty('category')}.png`,
				scaledSize: new google.maps.Size(64, 64)
			}
		};
	});

	const apiKey = 'AIzaSyDXz7PQqhUsJAgxOg0lm_tZKIa6JQZXyxA';
	const infoWindow = new google.maps.InfoWindow();

	// Show the information for a store when its marker is clicked.
	map.data.addListener('click', event => {

		let category = event.feature.getProperty('category');
		let name = event.feature.getProperty('name');
		let description = event.feature.getProperty('description');
		let hours = event.feature.getProperty('hours');
		let phone = event.feature.getProperty('phone');
		let position = event.feature.getGeometry().get();
		let content = `<img style="float:left; width:200px; margin-top:30px" src="/images/map_logos/logo_${category}.png"><div style="margin-left:220px; margin-bottom:20px;"><h2>${name}</h2><p>${description}</p><p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p><p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p></div>`;

		infoWindow.setContent(content);
		infoWindow.setPosition(position);
		infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
		infoWindow.open(map);
	});

}
