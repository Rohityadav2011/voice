

var SpeechRecognition= window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start()
{
document.getElementById("textbox").innerHTML="";
Recognition.start();
}

Recognition.onresult = function(event)
{
console.log(event);

var content = event.results[0] [0].transcript;

document.getElementById("textbox").innerHTML=content;
console.log(content);
if(content=="take my selfie"){
console.log("taking selfie");
speak()
}
}

function speak(){
var syth = window.speechSynthesis;
speak_data = document.getElementById("textbox").value;
var utterThis = new speechSynthesis(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
take_snapshot()
save()
},5000)
}

Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
})
camera = document.getElementById("camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
})
}

function save(){
link=document.getElementById("link")
Image=document.getElementById("selfie_image").src
link.href=Image
link.click()
}