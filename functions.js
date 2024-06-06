const heading = document.getElementById("status_display");

function updateStatus(){
    let req = new Request("https://vjfj5xlovg4riv6k4bpfgnzsmu0tbiuf.lambda-url.us-east-1.on.aws?action=status", {
    mode: "cors",
    method: "GET"
    });
    fetch(req)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }
    }).then((response) => {
        console.debug(response);
        let fill = "Shut Down";
        if(response.InstanceStatuses.length > 0)
        {
            let res = response.InstanceStatuses[0].InstanceState.Name;
            if(res == "pending") {
                fill = "Server is starting, be patient";
            } else {
                fill = res;
            }
        }
        heading.innerHTML = fill;
    });
}

function turnOn(){
    let req = new Request("https://vjfj5xlovg4riv6k4bpfgnzsmu0tbiuf.lambda-url.us-east-1.on.aws?action=start", {
        mode: "cors",
        method: "GET"
    });
    fetch(req)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }
    }).then((response) => {
        console.debug(response);
        if(response.StartingInstances.length > 0)
        {
            heading.innerHTML = response.StartingInstances[0].CurrentState.Name;
        } else {
            heading.innerHTML = 'Shut Down';
        }
    });
}

function turnOff(){
    let req = new Request("https://vjfj5xlovg4riv6k4bpfgnzsmu0tbiuf.lambda-url.us-east-1.on.aws?action=stop", {
        mode: "cors",
        method: "GET"
    });
    fetch(req)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }
    }).then((response) => {
        console.debug(response);
        heading.innerHTML = response.StoppingInstances[0].CurrentState.Name;
    });
}

function checkPlayerCount(){
        MinecraftAPI.getServerStatus('44.207.181.221', {
        port: 25565 // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('.player-count').innerHTML = 'Error loading status';
        }
    
        // you can change these to your own message!
        document.querySelector('.player-count').innerHTML = status.players.now;
        });
}

function sendCommand(command){
    command = command.replace("'", "\'");
    let req = new Request("https://vjfj5xlovg4riv6k4bpfgnzsmu0tbiuf.lambda-url.us-east-1.on.aws?action=command&command_data=".concat(command), {
        mode: "cors",
        method: "GET"
    });
    fetch(req)
    .then((response) => {
        console.log(response);
    })
}
