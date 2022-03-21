let tempo = 8000,
    imgnow = 0,
    everyimg = document.querySelectorAll("#slides img"),
    maximg = everyimg.length;

    function proximo(){

        everyimg[imgnow].classList.remove("sel")

        imgnow ++
        if(imgnow >= maximg )
        {
            imgnow = 0   
        }
        everyimg[imgnow].classList.add("sel")
       
       
    }

    function anterior(){

        if(imgnow == 0)
        {
            imgnow = maximg
        }
        else
        {
            imgnow--
        }

        everyimg[imgnow].classList.add("sel")
        everyimg[imgnow + 1].classList.remove("sel")
    }
    

    function start(){
        setInterval( () => {
           //aqui a imagem é trocada a cada "tempo" segundo
            proximo()
        }, tempo)
    }

    window.addEventListener("load", start)