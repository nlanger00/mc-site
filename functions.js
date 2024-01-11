const heading = document.getElementById("status_display");

function updateStatus(){
    heading.textContent = "Status Updated";
}

function turnOn(){
    let res = new Request("https://vjfj5xlovg4riv6k4bpfgnzsmu0tbiuf.lambda-url.us-east-1.on.aws?action=start");
    log(res.json());
}

function turnOff(){

}