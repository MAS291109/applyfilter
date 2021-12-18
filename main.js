function preload(){

}

function setup(){
    canvas = createCanvas(600, 370);
    canvas.position(80, 270);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 600, 370);
    tint(tint_color);
}

function take_snapshot(){
    save('tint_img.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}