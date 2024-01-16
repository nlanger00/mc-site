const heading = document.getElementById("status_display");

function updateStatus(){
    let req = new Request("https://rzi1g0kdv4.execute-api.us-east-1.amazonaws.com/CORS/start-modded-minecraft?action=status", {
    mode: "cors"
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

function turnOn(){
    let req = new Request("https://vjfj5xlovg4riv6k4bpfgnzsmu0tbiuf.lambda-url.us-east-1.on.aws?action=start", {
        mode: 'no-cors'
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
    let req = new Request("https://vjfj5xlovg4riv6k4bpfgnzsmu0tbiuf.lambda-url.us-east-1.on.aws?action=stop", {
        mode: 'no-cors'
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