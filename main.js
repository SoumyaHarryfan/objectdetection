objects = [];
status = "";
function preload(){
    video = createVideo("video.mp4");
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();
}
function start(){
    // objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    status=true;
    console.log("model loaded");
    video.loop();
    video.speed(1);
    video.volume(0);
}