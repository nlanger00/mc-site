const heading = document.getElementById("status_display");

function updateStatus(){
    heading.textContent = "Status Updated";
}

function turnOn(){
    let myheaders = new Header();
    myheaders.append("Access-Control-Allow-Origin", "*");

    let req = new Request("https://vjfj5xlovg4riv6k4bpfgnzsmu0tbiuf.lambda-url.us-east-1.on.aws?action=start", {
        method: "GET",
        headers: myheaders
    });
    fetch(req)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }
    }).then((response) => {
        console.debug(response);
    });
}

function turnOff(){

}