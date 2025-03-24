let menu=document.getElementById('menu');

let sidebar=document.querySelector('.sidebar');

let cross=document.getElementById('cross');


menu.addEventListener('click',()=>{
    sidebar.style.right='0%';
    
});

cross.addEventListener('click',()=>{
    sidebar.style.right='-100%';
});



let addCart=document.querySelectorAll('.addCart')
addCart.forEach(button =>{
    button.addEventListener('click',(e)=>{
        let productItem= e.target.closest('.card')
        addCard(productItem);
    });
});

const addCard=(productItem)=>{
     let productImg=productItem.querySelector('img').src;
     let productName=productItem.querySelector('.product-name').innerHTML;
     let productPrice=productItem.querySelector('.price').children[0].textContent;
     let cardProductItem=document.querySelectorAll('.productTitle');

     for(let item of cardProductItem){
        if(item.innerHTML.trim()===productName.trim()){
            alert('Already Exist')
            return;
        }
     }
     let div=document.createElement('div')
     div.classList.add('cartDiv');
     div.innerHTML=`
                <div class="image">
                    <img src=${productImg} alt="" style="height: 100%; width: 100%;">
                </div>
                <div class="list">
                    <div class="productTitle">${productName}</div>
                    <div class="productPrice">${productPrice}</div>

                    <div class="btnDiv">
                        <button class="decrease"> - </button>
                        <button class="count"> 1 </button>
                        <button class="increase"> + </button>
                    </div>
                </div>
                <div class="delete">
                    <i class='bx bx-trash' ></i>
                </div>
     `

     let cart=document.querySelector('.card-box').appendChild(div);
     document.querySelectorAll('.bx-trash').forEach(deleteBtn =>{
        deleteBtn.addEventListener('click',(e)=>{
            e.target.closest('.cartDiv').remove();
            updatePrice()
        })
     });

     cart.querySelector('.btnDiv').addEventListener('click',(eve)=>{
        const numberBox= cart.querySelector('.count');
        let quantity= numberBox.textContent;
        console.log(eve.target.className,)
        if(eve.target.className === 'decrease' && quantity>1){
            quantity--;
        }else if(eve.target.className ==='increase'){
            quantity++;
        }
        numberBox.textContent = quantity;
        updatePrice()
     })
     updatePrice()


document.querySelector('.buybtn').addEventListener('click', () => {
    sidebar.style.right='-100%';


    let toast_body = document.querySelector('.toast_body');

    let cart_items = document.querySelectorAll('.cartDiv');
    toast_body.classList.add('activeDisplay');
    setTimeout(() => {
        toast_body.classList.remove('activeDisplay');
    }, 3000);

    cart_items.forEach(value=>{
        value.remove();
        document.querySelector('.badge').innerHTML=0;
    }) 
})
}

function updatePrice(){
    let totalPrice=document.querySelector('.total');
    let item_count=document.querySelectorAll('.cartDiv');
    let total=0;
    item_count.forEach(card =>{
        let priceElement=card.querySelector('.productPrice').textContent.replace('$','');
        let productCount= card.querySelector('.count').innerHTML;

        total+=productCount*priceElement;
        console.log(productCount,priceElement)
    });
    if (total < 1) {
        totalPrice.style.color = 'red';
    } else {
        totalPrice.style.color = 'green';
    }
    totalPrice.textContent=`Total: $ ${total}`;
}

let counter = 0;
function badgeUpdate(params) {

    let badge = document.querySelector('.badge');
    let notificattin = document.querySelector('.notificattin');
    counter += params;
    badge.textContent = counter;
    if (counter > 0) {
        notificattin.style.visibility = 'visible';
    } else {
        notificattin.style.visibility = 'hidden';
    }
}