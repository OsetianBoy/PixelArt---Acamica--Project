var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var $paleta = $("#paleta");
//var grillaPixeles = document.getElementById("grilla-pixeles");
var $grillaPixeles = $("#grilla-pixeles");
var $indicador = $("#indicador-de-color");
  
//Paleta de colores
for (var i = 0; i<nombreColores.length; i++){
  var paletaColor = document.createElement('div');
  paletaColor.style.backgroundColor = nombreColores[i];
  $paleta.append($(paletaColor));
}
//Grilla de pixeles
for (var i = 0; i<=1750; i++){
  var grillaPixelesLi = document.createElement('div');
  grillaPixelesLi.textContent;
  $grillaPixeles.append(grillaPixelesLi);
}

//indicador de color
$paleta.click(function(e){
  $('#indicador-de-color').css("background-color", e.target.style.backgroundColor);
});

//Pintar
var $pintarGrilla = function(e){
  $(e.target).css("background-color", $indicador.css("background-color"));
}
$grillaPixeles.click($pintarGrilla);



// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $indicador.css("background-color",colorActual);
  })
);

// Arrastrar el color
var $mousePresionado;
var $pixelGrilla = $grillaPixeles.children();

$pixelGrilla.mouseup(function(){
  $mousePresionado = false;
});

$pixelGrilla.mousedown(function(){
  $mousePresionado = true;
});

$pixelGrilla.mouseover(function(e){
  $mousePresionado ? e.target.click($pintarGrilla): null;
});

//Boton Borrar
var $borrar = $("#borrar");
$borrar.click(function(){
  $pixelGrilla.animate({"background-color": ""}, 1500 )
});

//Cargar imagen
$("#batman").click(function(){
  cargarSuperheroe(batman);
});

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
});

$("#flash").click(function(){
  cargarSuperheroe(flash);
});

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
});

//Guardar imagen;
$("#guardar").click(guardarPixelArt);