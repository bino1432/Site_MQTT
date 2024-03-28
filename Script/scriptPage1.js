fetchApi();

function updateInterface(data) {

    const led1 = document.getElementById("led1");
    const led2 = document.getElementById("led2");
    const led3 = document.getElementById("led3");

    if (data.led1 === "1") {
        led1.className = "on"
    } else {
        led1.className = "off"
    }

    if (data.led2 === "1") {
        led2.className = "on"
    } else {
        led2.className = "off"
    }

    if (data.led3 === "1") {
        led3.className = "on"
    } else {
        led3.className = "off"
    }

    led1.textContent = data.led1;
    led2.textContent = data.led2;
    led3.textContent = data.led3;

    console.log(data)
}

async function fetchApi() {
    return await fetch('https://api-mqtt-seven.vercel.app/info')
        .then(response => response.json())
        .then(data => {
            updateInterface(data)
        })
}

function post() {
    fetch('https://api-mqtt-seven.vercel.app/info', {
        method: 'POST',
        body: JSON.stringify({
            led1: "1"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}