function myfun(){

let x=document.getElementsByClassName('menu');
for(var i=0;i<x.length;i++){
if(x[i].style.display==="none"){

    x[i].style.display='block';
}

else{
    x[i].style.display='none';
}

}
}



function over(params) {
     
    let y=document.getElementById('logout');
    console.log(y)
    if(y.style.display==="none"){
        y.style.display="block";
    }

    else{
        y.style.display="none";
    }
}