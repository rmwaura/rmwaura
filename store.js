if (document.readyState == 'loading') {
    document.addEventListener('documentLoaded', ready)
  }  else {
        ready()
    }
    
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i< removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonclicked  = event.target
        buttonclicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function removeCartItem(event) {
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innertext
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innertext
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].imageSrc
    console.log(title, price, imageSrc)
    addItemToCart(item, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartItems.append(cartRow)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i< cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        console.log(priceElement, quantityElement)
        var price = priceElement.innertext
        console.log(price * quantity)
    }
}