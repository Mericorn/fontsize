noseX=0;
noseY=0;
difference = 0;
rightWrist_x = 0;
leftWrist_x = 0;
function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw() {
background('#969A97');
textSize(18);
fill('#F90093');
stroke('#F90093');
text("Maya", 200, 300);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX + " noseY = "+ noseY);
        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;
       difference = floor(leftWrist_x - rightWrist_x);

        console.log("leftWristX =" + leftWrist_x + " rightWristX = "+ rightWrist_x + " difference = "+ difference);
        textSize(difference);
        
   }
}
