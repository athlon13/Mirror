#mirror

Fork of Magic mirror of Shinao. Custom for Spain, with infomation of EMT of Madrid, RSS feed Meneame and 
Prado & Tyssen museum. 

Showing time and temperature in background with the possibility of adding any widget to the menu. The camera
is behind the two-way mirror to get the best possible look. The screen and camera are managed by a raspberry pi. 
The motion is managed by a server running in python3 with OpenCV, the server web is in NodeJS.
 ***********************************************
Fork del proyecto Magic Mirror de Shinao, customizado para España, se muestra informacion del tiempo y la
temperatura, junto con la prevision para 5 dias de fondo, asi como informacion de la EMT de Madrid y los 
museos Prado y Tyssen, junto con el agregador de noticias Meneame.net, cuenta con posibilidades de añadir widgets
a el menu.
La camara(webcam en este caso) y el monitor estan controlados por un a raspberry. El movimiento, esta 
controlado por un servidor escrito en python3 con OpenCv, y el servidor web en NodeJs.
************************************************
Capacities

    Recognition of gestures : palm, thumbs up/down, slide up/down/right/left

    Widgets :
        Photo : take a photo and upload it to Dropbox
        Map : display local Google Map
        Cinema : movie time of local theater
        DoodleJump : play the game (hard with the latency)
        News : show international news
*************************************************
Caracteristicas

    Reconocimiento de gestos : palma, thumbs arriba/abajo, deslizamiento arriba/abajo/derecha/izquierda

    Widgets :
        Photo : Toma una foto y la subre a Dropbox
        Map : display local Google Map
        Cinema : Cartelera en el cine mas cercano
        DoodleJump : Juego (jodido con latencia)
        News : Muestra multiples noticias internacionales

***********************************************
Dependencies

    Software :
        OpenCV 3.x
        Python 3.x
        NodeJS
    Hardware :
        Two Way Mirror
        Raspberry pi
        Camera (I'm using any webcam but the NoIR or pi camera should do)
        Monitor (Preferably that cover the whole surface of your two way mirror)
************************************************
Dependencias

    Software :
        OpenCV 3.x
        Python 3.x
        NodeJS
    Hardware :
        Two Way Mirror
        Raspberry pi
        Camera (Se ha usado una webcam, pero la camara de la raspberry debe de funcionar)
        Monitor (preferiblemente con la pantalla cubierta por el two way mirror)
************************************************
Building

    Web server :
        npm install
        node server.js
        go to http://localhost:3000
    Motion server :
        Install OpenCV 3.x
        pip install numpy
        pip install tornado
        pip3 install tornado
        python3 test.py for debug infos or python main.py for silent process
        config.py for the tracking settings
            To use the Pi Camera set piCamera to true and install the package picamera pip install "picamera[array]"
*************************************************
Poniendolo en marcha

    Web server :
        npm install
        node server.js
        abrir en el navegador, la siguiente direccion:  http://localhost:3000
    Motion server :
        Install OpenCV 3.x 
        pip install numpy
        pip install tornado 
        pip3 install tornado
        python3 test.py para debug o python3 main.py para un proceso silencioso
        config.py para ajustar el tracking de la camara
            Para usar la Pi Camera ajustar piCamera a true yinstalar el paquete picamera pip install "picamera[array]"
************************************************
Into widgets.js, put your IdClient and Passkey for EMT,and in config.js, the id & appid for openweathermap.org 
and dropboxKey for photo
The idClient and Passkey can get from http://opendata.emtmadrid.es/Servicios-web
Openweather Api: http://openweathermap.org/api
Dropbox Key:https://www.dropbox.com/developers/support section "Where can I find my app key and secret?"
************************************************
Dentro del fichero widgets.js, en apartado EMT, debe de incluirse el Idclient y el passkey, y en config.js, el 
id y appid de openweathermap.org junto con la llave de Dropbox.
Api de la EMT: http://opendata.emtmadrid.es/Servicios-web
Api de openweather: http://openweathermap.org/api
Key Dropbox: https://www.dropbox.com/developers/support apartado "Where can I find my app key and secret?"

*************************************************
Notes
For more information go https://github.com/Shinao/SmartMirror
*************************************************
Notas
Para mas informacion ir a https://github.com/Shinao/SmartMirror




