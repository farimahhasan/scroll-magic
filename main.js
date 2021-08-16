
        window.addEventListener('scroll' ,() => {
        let headerHeight=document.querySelector('header').clientHeight ,
            yPosition=document.documentElement.scrollTop ,
            div=document.querySelector('div') ,
            nav=document.querySelector('nav') ;
        if(yPosition <= headerHeight){
           let effectFactor = yPosition / headerHeight;
           let rotation =  effectFactor * (Math.PI / 2 - Math.asin(
            (headerHeight - yPosition) / headerHeight ));
            div.style.transform=`rotateX(${rotation}rad)`
            nav.classList.remove('fixed');
        }else{
            nav.classList.add('fixed');
        }
        });

         