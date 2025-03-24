

let addmorebutton=document.querySelector('.addmoreBtn');

addmorebutton.addEventListener('click',(e)=>{
    
    let addmoresection=document.querySelector('.addmoresection');
    addmorebutton.style.display='none'
   let loader= document.querySelector('.loading');
   loader.classList.add('loading_display');
    setTimeout(() => {
        addmoresection.classList.add('display');
        loader.remove();
        addmorebutton.remove();
    }, 4000);

});

