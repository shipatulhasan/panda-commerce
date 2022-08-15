// My script
// buy now click event

const alert  = document.getElementById('toast')
const closeCart = document.getElementById('cart')
// cart close
const closeItem = document.querySelector('.close-me').addEventListener('click',function(){
    closeCart.style.display = 'none'
        
})
alert.style.display = 'none'
const buyButton = document.getElementsByClassName('buyProduct')
const cartUl = document.getElementById('cartItems')

for(const btn of buyButton){
    btn.addEventListener('click',function(event){
        if(alert.style.display==='none'){
            alert.style.display = 'block'
            
        }
        const btnDiv = event.target.parentNode
        const info = btnDiv.previousElementSibling
        const getProductName = info.querySelector('.card-title')
        const productName = getProductName.innerText
        const getProductPrice = info.querySelector('.price')
        const productPrice = getProductPrice.innerText
        const cartLi = document.createElement('li')
        cartLi.className = 'cart-item'
        const cartHeading = document.createElement('h6')
        cartHeading.innerText = productName
        const cartPrice = document.createElement('h6')
        const closeBtn = document.createElement('i')
        closeBtn.className = "fa-solid fa-trash-can"
        closeBtn.setAttribute('onclick','myFunction(event)')
        cartPrice.innerText = productPrice
        cartLi.appendChild(cartHeading)
        cartLi.appendChild(cartPrice)
        cartLi.appendChild(closeBtn)
        cartUl.appendChild(cartLi)
    })
}
// product remove form cart
function myFunction(event){
    const closeItem = event.target.parentNode
    
    closeItem.remove()
    // const ul = close.parentNode
    // console.log(closeItem)
}

// cart open
function cart(){
    closeCart.style.display = 'block'

}

// toast close
document.getElementById('close').addEventListener('click',function(){
    alert.style.display = 'none'
})