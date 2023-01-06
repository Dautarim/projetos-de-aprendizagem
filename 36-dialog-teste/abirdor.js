
const botabrir = document.querySelector("button")
const modal = document.querySelector("dialog")
const botfechar = document.querySelector("dialog > button")


var nomeset = document.querySelector("#nome").value
var linkset = document.querySelector("#link").value

document.querySelector(".imagtext").innerHTML = `  <img src="${linkset}" alt="">
<h2>${nomeset}</h2>`

botabrir.onclick = () => modal.showModal()

botfechar.onclick = () => modal.close()

function submti()
{
    document.querySelector(".imagtext").innerHTML = `  <img src="${linkset}" alt="">
    <h2>${nomeset}</h2>`
}