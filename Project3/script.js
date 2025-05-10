document.addEventListener("DOMContentLoaded" , () => {
    console.log("something nice");
    
    const ProductItem = [
        {id: 24 , name: "product2" , price : 235.999 },
        {id: 25 , name: "product3" , price : 245.896 },
        {id: 26 , name: "product4" , price : 345.05 },
        {id: 23 , name: "product1" , price : 2345.435 },
    ]

    const cart = []


    const productList = document.getElementById("product-list")
    const cartItem = document.getElementById("cart-item")
    const emptyCart = document.getElementById("empty-cart")
    const cartTotal = document.getElementById("cart-total")
    const totalPriceDisplay = document.getElementById("total-price")
    const checkoutBtn = document.getElementById("checkout-button")

    ProductItem.forEach((product) => {
       let productDiv = document.createElement('div')
       productDiv.classList.add("product-card")
       productDiv.innerHTML = `
       <span> ${product.name} -- ${product.price.toFixed(2)} </span>
       <button data-id="${product.id}" > Add to Cart </button>
       `
       productList.appendChild(productDiv)
    })

    productList.addEventListener("click" , (event) => {
        if (event.target.tagName === "BUTTON") {
            let productId = parseInt(event.target.getAttribute("data-id"))
           let product = ProductItem.find(p => p.id === productId)
           addtocart(product)
        }
    })
    
    function addtocart(product){
        cart.push(product)
        RenderCart()
        
    }
    function RenderCart (){
        cartItem.innerHTML = ""
        let totalPrice = 0
        
        if (cart.length != 0) {

            emptyCart.classList.add('hidden')
            cartTotal.classList.remove('hidden')
            cart.forEach((item , index) => {
                totalPrice += item.price
                const cartItems = document.createElement('div')
                cartItems.innerHTML = `${item.name} ${item.price.toFixed(2)}`
                cartItem.appendChild(cartItems)
                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
            })
        } else {
            emptyCart.classList.remove('hidden')
            cartTotal.classList.add('hidden')
            totalPriceDisplay.textContent = `Rs 0.00`
            
        }
    }

    checkoutBtn.addEventListener("click" , () => {
        cart.length = 0
        RenderCart()
        alert("checkout Successfully ")
    })
})