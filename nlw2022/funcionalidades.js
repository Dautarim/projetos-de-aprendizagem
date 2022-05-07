
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