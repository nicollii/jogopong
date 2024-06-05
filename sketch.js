//Variáveis da bolinha 
let xbola =200
let ybola =200
let diametro =30
let raio = diametro/2

//Variáveis da velocidade
let velocidadexbola = 6
let velocidadeybola = 6

//Variáveis da raquete
let xraquete = 5
let yraquete = 140
let lraquete = 10
let hraquete = 80
let xraqueteop = 430
let yraqueteop = 140
let velocidadeyop ;
let colidiu = false

//Variáveis do placar
let meuspontos = 0 
let pontosop = 0

function setup() {
  createCanvas(450, 350);
}

function draw() {
  background(0);
  criabolinha();
  movimentobolinha();
  colisaoborda();
  minharaquete();
  movimentaraquete();
colisaoraquete();
  criaraqueteop();
  movimentoraqueteop();
  colisaobolinharaquete();
  criaplacar();
  marcaponto()
  
}
function criabolinha(){circle(xbola, ybola, diametro)}
function movimentobolinha(){xbola += velocidadexbola
  ybola += velocidadeybola}
function colisaoborda(){if ( xbola + raio > width || xbola - raio < 0 )
    velocidadexbola *= -1
  if ( ybola > height || ybola < 0 )
    velocidadeybola *= -1}
function minharaquete(){rect(xraquete,yraquete,lraquete,hraquete)}
function movimentaraquete(){if (keyIsDown(UP_ARROW))
yraquete -= 10
if (keyIsDown(DOWN_ARROW))
yraquete += 10}
function colisaoraquete(){
if(xbola - raio < xraquete + lraquete
  && ybola - raio < yraquete + hraquete
  && ybola + raio > yraquete)
velocidadexbola *= -1}
   function criaraqueteop(){
    rect(xraqueteop , yraqueteop , lraquete , hraquete)
    }
function movimentoraqueteop (){
  velocidadeyop = ybola - yraqueteop - lraquete/2 - 60
  yraqueteop += velocidadeyop
  
}
   function colisaobolinharaquete(){
     colidiu = collideRectCircle(xraqueteop, yraqueteop, lraquete, hraquete, xbola, diametro)
  if (colidiu)
    xvelocidade *= -1
   }
function criaplacar(){
  fill (255)
  text (meuspontos, 100, 10)
  text (pontosop, 300, 10)
  
}
function marcaponto(){ 
if(xbola < 15)
  pontosop += 1
  if(xbola > 330 )
    meuspontos += 1
}
