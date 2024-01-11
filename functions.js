const heading = document.getElementById("status_display");

function updateStatus(){
    heading.textContent = "Status Updated";
}

function turnOn(){
    let req = new Request("https://rzi1g0kdv4.execute-api.us-east-1.amazonaws.com/CORS/start-modded-minecraft?action=start");
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