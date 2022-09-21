


function troca() {
    
    let corpo = document.querySelector('#cosmo')
    let contsol = document.querySelector('#sol')
    let contlua = document.querySelector('#lua')

    corpo.classList.toggle('trocado')
    contlua.classList.toggle('sel')
    contsol.classList.toggle('sel')
}

function horario()
{
    let data = new Date()

    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    document.querySelector("#hr").innerHTML = hora; 
    document.querySelector("#mn").innerHTML = min; 
    document.querySelector("#sg").innerHTML = seg; 
}

let play = setInterval(horario, 1000)