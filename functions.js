const heading = document.getElementById("status_display");

function updateStatus(){
    heading.textContent = "Status Updated";
}

function turnOn(){
    let res = fetch("https://vjfj5xlovg4riv6k4bpfgnzsmu0tbiuf.lambda-url.us-east-1.on.aws?action=start");
    log(res);
}

function turnOff(){

}