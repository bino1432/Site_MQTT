fetchApi();

function updateInterface(data) {

    const TempAtl = document.getElementById("tempAtl")
    const TempDef = document.getElementById("tempDef")
    
    TempAtl.innerText = data.TempAtl
    TempDef.innerText = data.TempDef

    console.log(data)
}

async function fetchApi() {
    return await fetch('https://api-mqtt-seven.vercel.app/temp')
        .then(response => response.json())
        .then(data => {
            updateInterface(data)
        })
}