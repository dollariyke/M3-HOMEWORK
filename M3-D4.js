/*Remove Items from cart*/
const removeCartItemButtons = document.getElementsByClassName('btn-danger');// This refences the remove button.
// This is a for-loop to iterate through all the button with class 'btn-danger'
    for(let i = 0; i<removeCartItemButtons.length; i++ ){
//the current button is assigned to a button variable
    let button = removeCartItemButtons[i]; 
 //this is an event listener that listens to a click event and execute the function
    button.addEventListener('click',function(event){
    /* this event listener has an event object as a parameter in which we can explore its target property.The target property helps us identify the particular button clicked and assigned to a variable called 'buttonClicked'*/
    let buttonClicked = event.target;
    //The line of code below will target the immediate parent to the ancestors and apply the remove method to remove the element was clicked.
    buttonClicked.parentElement.parentElement.remove();
 })
}
//update cart total

function updateCartTotal() {
    // target the first cart item container
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    //target the cart-rows of the cart item conatiner
    let cartRows = cartItemContainer.document.getElementsByClassName('cart-row')
    //iterate through it.
    for(let i = 0; i<cartRows.length; i++ ){
        //Target just one of the curent cartRows
        let cartRow = cartRows[i];
        // Target the price of same cart-row
        let priceElement = cartRow.document.getElementsByClassName('cart-price')[0]
        //Target the quantity of same cart-row
        let quantityElement = cartRow.document.getElementsByClassName('cart-quantity-input')[0]
        //Extract the main infromation from the element. As what is returned is usually the html element.
        let price  = priceElement.innerText

    }
}

