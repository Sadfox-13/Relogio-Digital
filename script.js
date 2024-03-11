const horas=document.getElementById('Horas')
const minutos=document.getElementById('Minutos')
const segundos=document.getElementById('Segundos')

const tempo=setInterval(function time(){
    let dateToday =new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let sg = dateToday.getSeconds();

    if(hr<10) hr = '0' + hr;
    if(mn<10) mn = '0' + mn;
    if(sg<10) sg = '0' + sg;

    horas.innerText=hr;
    minutos.textContent=mn;
    segundos.innerText=sg;
})