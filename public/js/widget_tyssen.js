function callbackGestureCinema(gesture) {
	if (gesture.palm && gesture.elapsedTimeWithSameGesture > 0.5)
		bringBackMainMenu();
	else if (gesture.slideUp)
		smoothScrollBy(window.innerHeight, 750);
	else if (gesture.slideDown)
		smoothScrollBy(window.innerHeight * -1, 750);
}

$(document).ready(function() {
	$.getJSON("Tyssen", function(data) {
                var idxPicture = 0;
		var Cuadros = "<table>";
		$.each(data, function(key, tisen) {
			var img = "<img src='" + tisen.imagen + "'/>";
			var title = "<div class='CuadroHeader'><span class='title'>" + tisen.nombre + "</span></div>";
			var fecha = "<div class='Fecha'><br>"+ tisen.fecha + "<br></div>";
			Cuadros += "<tr><td><div class='dibu'><div class='thumbnail'>" + img + "</div><div class='meta'>" + title + fecha +"</div></div></td></tr>";
			idxPicture = idxPicture + 1;
		});
		Cuadros += "</table>";
		$("#Tyssen").append(Cuadros);
	});
});

