const tempLoad = ()=>{
    let temp = document.getElementById('temp');
    temp.innerHTML = '&#xf2cb;'
setTimeout(()=>{
    temp.innerHTML = '&#xf2c9;';
    temp.style.color = "yellow";
},1000);
setTimeout(()=>{
    temp.innerHTML = '&#xf2c8;';
    temp.style.color = "yellow";
},2000);
setTimeout(()=>{
    temp.innerHTML = '&#xf2c7;';
    temp.style.color = "red";
   
},3000);
}

tempLoad();
setInterval(tempLoad,4000);