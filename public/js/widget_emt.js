function callbackGestureEmt(gesture) {
	if (gesture.palm && gesture.elapsedTimeWithSameGesture > 0.5)
		bringBackMainMenu();
	else if (gesture.slideUp)
		smoothScrollBy(window.innerHeight, 750);
	else if (gesture.slideDown)
		smoothScrollBy(window.innerHeight * -1, 750);
}


$(document).ready(function() {
        $.getJSON("emt",function(data){
          var bus="<table class='EMTabla' border='1'>";
          bus+="<tr><th>Linea</th><th>Bus Id</th><th>Tiempo de Espera</th><th>Distancia</th></tr>";
          $.each(data,function(key, emt_item){
            //alert(parseInt(emt_item.busDistance));
            var espera='';
            var tiempo=emt_item.busTimeLeft;
            if (tiempo === 999999){
                espera="+20'";
            }else if (tiempo === 0){ 
                espera="En parada";
            }else{
                tiempo=Math.round(tiempo/60);
                espera=parseInt(tiempo);
            }
            bus+="<tr><td>"+emt_item.lineId+"</td><td>"+emt_item.busId+"</td><td>"+espera+"</td><td>"+emt_item.busDistance+"</td></tr>"
          });
        bus+="</table>";
        $("#emt").append(bus);
        });
});
