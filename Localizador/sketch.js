let myMap;
let canvas;
var Latitude, Longitude;
var piscar = 1; 
const mappa = new Mappa('Leaflet');

const options = {
  lat:  -16.737,
  lng: -43.8647,
  zoom: 12.6,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(500,700); 
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
  
}

function draw(){
  frameRate(3);
  clear();
  fill('#A9F5F2');
  getLocation();
  const atual = myMap.latLngToPixel(Latitude,Longitude);
  ellipse(atual.x,atual.y,20,20);
  if(piscar == 0){
  fill('#00FF00');piscar = 1;
                }else{
  fill('#FF0000'); piscar = 0; 
                }
  ellipse(atual.x,atual.y,15,15);

}


function getLocation() {
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

