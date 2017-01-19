function callbackGestureMap(gesture) {
	if (gesture.palm && gesture.elapsedTimeWithSameGesture > 0.5)
		bringBackMainMenu();
}

function initMap() {
	var mapDiv = document.getElementById('map');

	var map = new google.maps.Map(mapDiv, {
		center: {lat: 40.39669000000001, lng: -3.6946626999999808}, zoom: 15
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.39669000000001, lng: -3.6946626999999808},
		map: map,
		icon: '../img/home.png'
	});
}
