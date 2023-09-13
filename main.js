Webcam.set
({
width: 350,
height: 350,
image_format: 'png',
quality: 90
});
camera =  document.getElementById("vPrevia");
Webcam.attach
(
'#vPrevia'
);

 function takeSnapShot()
{
Webcam.snap(function(data_uri)
{
document.getElementById("photo").innerHTML = '<img id = "FF" src = "'+data_uri+'">'
}
)
};

console.log('Conectado a ml5.js',ml5.version);

var comparacion = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/11AQYiTkj/model.json',modelLoaded);
 function modelLoaded()
 {
   console.log("modelo cargado"); 
 }

 function check()
 {
  img = document.getElementById('FF');
  comparacion.classify(img, gotResult);
 }

 function gotResult( error,result)
 {
  if (error)
  {
   console.error("Hay un error en la comparación");
  }
  else
  {
    console.log(result);
    document.getElementById("objeto").innerHTML = result[0].label;
    document.getElementById("presicion").innerHTML = result[0].confidence.toFixed(3);
  }
 }
 