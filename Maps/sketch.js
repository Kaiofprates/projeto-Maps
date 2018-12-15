let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

const options = {
  lat:  -16.737,
  lng: -43.8647,
  zoom: 12.6,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(640,800); 
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
}

function draw(){
  clear();
  fill(0,2,255,40);
  const vila_atlantida = myMap.latLngToPixel(-16.700976,-43.880922);
  ellipse(vila_atlantida.x,vila_atlantida.y,50,50);
}