Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
Webcam.attach("#webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("photo").innerHTML='<img id="photo_img" src="'+data_uri+'">'
    });
}
console.log('ml5 version :',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6FfYGqaX8/model.json',loded)
function loded(){
    console.log("the link has been linked");
}
function check(){
    img=document.getElementById("photo_img");
    classifier.classify(img,got_result);
}
function got_result(error,result){
  if(error){
    console.log(error);
  }
  else{
    console.log(result);
    document.getElementById("object").innerHTML=result[0].label;
    document.getElementById("acuracy").innerHTML=(result[0].confidence*100).toFixed(3)+"%"
  }
}