var vec=new Array();
var n=0;
var imagenes= new Array(4);
    imagenes[0]='"img/1.jpg"'; 
    imagenes[1]='"img/2.jpg"'; 
    imagenes[2]='"img/3.jpg"'; 
    imagenes[3]='"img/4.jpg"';

function jugar()
{

    var num=Math.round(Math.random()*3);
    return imagenes[num];
}

