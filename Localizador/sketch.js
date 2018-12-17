let myMap;
let canvas; // normalmente a tela é estatica, como aqui o mapa tem zoom, é criada essa variavel global para permitir movimentação. 
var Latitude, Longitude; // essas variaveis vem do navegador. 
var piscar = 1;
const mappa = new Mappa('Leaflet'); // esse é um objeto Mappa que vem do framework que esta importado no html. 

const options = {
    lat: -16.737, // definem a localização de montes claros
    lng: -43.8647,
    zoom: 12.6,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
    canvas = createCanvas(500, 700); // tamanho do mapa
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);

}

function draw() {
    frameRate(3); // define a constância com que a tela é atualizada, efetivamente controla a velocidad o trem piscando. ;)
    clear();
    fill('#A9F5F2'); // define a cor da borda da elipse
    getLocation(); // chama a função que da valores a latitude e longitude
    const atual = myMap.latLngToPixel(Latitude, Longitude); // posiciona o mapa pro foco da localização
    ellipse(atual.x, atual.y, 20, 20); // desenha a primeira elipse que como tem altura e largura iguais.. é um círculo ;)
    if (piscar == 0) { // a misera do pisca-pisca
        fill('#00FF00');
        piscar = 1;
    } else {
        fill('#FF0000');
        piscar = 0;
    }
    ellipse(atual.x, atual.y, 15, 15); // o circulo interno ao outro
    // uma coisa importante. Os dois primeiros parametros da elipse (e da maioria dos objetos no p5) são as posições x e y na tela.
    //como a elipse esta sempre recebendo latitude e longitude ela acompanha o posicionamento do mapa. 
}


function getLocation() {
    // esse if pede a localização
    if (navigator.geolocation) {
        //console.log('foi');
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log('deu ruim');
    }
}

function showPosition(position) {
    this.Latitude = position.coords.latitude;
    this.Longitude = position.coords.longitude;
}