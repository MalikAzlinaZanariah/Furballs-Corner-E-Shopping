var removeCartItemsButtons = document.getElementsByClassName('btn-remove')
console.log(removeCartItemsButtons)
for(var i=0; i < removeCartItemsButtons.length; i++){
  var button = removeCartItemsButtons[i]
  button.addEventListener('click', function(){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
  })

}

function updateCartTotal(){
  var cartItemContainer = document.getElementById(cart-page.small-container)
  var cartRows =  cartItemContainer.getElementByClassName('cart-info')
  var total= 0
  for (var i = 0; i < cartRows.length; i++){
    var cartRow = carRows[i]
    var priceElement = cartRow.getElementByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementByClassName('cart-quantity-input')[0]
    var price = parseFloat( priceElement.innerText.replace('P', ''))
    var quantity = quantityElement.value
    
    total= total + (price * quantity)

  }
  document.getElementByClassName('cart-total-price')[0].innerText = 'P' + total
}

