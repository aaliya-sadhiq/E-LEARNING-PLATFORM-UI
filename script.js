let progress = 0;

function updateProgress(){

if(progress < 100){
progress += 25;
document.getElementById("progress").style.width = progress + "%";
}

}