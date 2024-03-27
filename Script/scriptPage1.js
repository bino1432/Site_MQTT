const btn = document.getElementById("btn");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
    post();
});

btn.addEventListener("click", fetchApi());

function updateInterface(data) {
    const lampada = document.getElementById("lampada");
    if (data.led1 === "0") {
        lampada.className = "off"
    } else {
        lampada.className = "on"
    }
    lampada.textContent = data.led1;
    console.log(data)
}

async function fetchApi() {
    return await fetch('https://api-mqtt-seven.vercel.app/info')
        .then(response => response.json())
        .then(data => {
            updateInterface(data)
        })
}

// function post() {
//     fetch('https://api-mqtt-seven.vercel.app/info', {
//         method: 'POST',
//         body: JSON.stringify({
//             led1: "1"
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
// }
function post() {
    fetch('https://api-mqtt-seven.vercel.app/info', {
        method: 'POST',
        body: JSON.stringify({led1: '1'})  
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}