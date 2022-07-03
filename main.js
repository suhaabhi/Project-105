Webcam.set
({
    width: 350,
    height: 350,
    image_format: 'png',
    quality: 90
})

Webcam.attach ( '#camera' );
camera = document.getElementById ("camera");

function take_snapshot()
{
  Webcam.snap(function (data_uri) 
  {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+ data_uri+'"/>';
  })
}

console.log('ml5 version:' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_bl38SxF/model.json', modelLoaded)
 
function modelLoaded() 
{
  console.log('Model Loaded!');
}
    
function identify()
{
  img = document.getElementById('selfie_image');
  classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
  if(errror)
  {
    console.error(error);
  }

  else
  {
    console.log(results);
    document.getElementById("result_family_member_name").innerHTML = results[0].label;
    document.getElementById("result_family_maember_accuracy").innerHTML = results[0].confidence;
  }
}