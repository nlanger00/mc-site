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
        if(response.InstanceStatuses.length > 0)
        {
            heading.innerHTML = response.InstanceStatuses[0].InstanceState.Name;
        } else {
            heading.innerHTML = 'Shut Down';
        }
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