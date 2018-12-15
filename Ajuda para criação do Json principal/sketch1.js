var bairo;
var nome, lat, longi, percent; 
let bot;
function setup() {
  nome = createInput('nome');
  nome.position(10,10);
  lat = createInput('latitude');
  lat.position(10,30);
  longi = createInput('longitude');
  longi.position(10,50);
  percent = createInput('percentual');
  percent.position(10,70);
  bot = createButton('JSON load');
  bot.position(50,100);
  bot.mousePressed(convert);
  
  createCanvas(190,200);
}
function convert(){
  bairro = new Bairro(nome.value(), lat.value(), longi.value(), percent.value());
  var result = JSON.stringify(bairro);
  fill('#CEF6F5');
  textSize(30);
  text('Sucesso',30,170);
  parser(result);
}
function parser(obj){
 var writer = createWriter(bairro.nome+'.txt');
 writer.print(obj);writer.close();writer.clear();
}
function draw() {
}