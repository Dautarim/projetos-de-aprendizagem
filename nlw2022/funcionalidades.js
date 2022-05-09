
function onScroll()
{
    if(scrollY == 0)
    {
        des.classList.remove('ativo')
    }
    else
    {
        des.classList.add('ativo')
    }

}

function abremenu()
{
    bodyid.classList.add('mainmenu')
}

function fechamenu()
{
    bodyid.classList.remove('mainmenu')
}

ScrollReveal(
    {
        origin: 'top',
        distance:'30px',
        duration: 700,
    }
).reveal(`#inicio,
#inicio button,
#inicio img, 
#inicio .metas, 
#services, 
#services header, 
#services .cards,`);

