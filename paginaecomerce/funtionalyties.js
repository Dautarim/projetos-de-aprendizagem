

const menuopc = document.querySelector("aside")
const btnabre = document.querySelector('#menu-boton')
const btnfecha = document.querySelector('#btnmenu')
const trocatema = document.querySelector('.gerenciador-de-tema')


/*===============abre menu==========*/
btnabre.addEventListener('click', () => {
    menuopc.style.display='block'
})

/*===============abre menu==========*/
btnfecha.addEventListener('click', () => {
    menuopc.style.display='none'
    
})

/*============Muda Tema===========*/
trocatema.addEventListener('click',() => {
    document.body.classList.toggle('variaveis-tema-escuro')

    trocatema.querySelector('span:nth-child(1)').classList.toggle('ativo')
    trocatema.querySelector('span:nth-child(2)').classList.toggle('ativo')
})