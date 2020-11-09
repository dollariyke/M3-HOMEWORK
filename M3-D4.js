// check if the document is still loading
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentloaded', ready)
}else{
    ready();
}

 /*Remove Items from cart*/
// This references the remove button.
function ready(){
   // This is a for-loop to iterate through all the button with class 'btn-danger'
   //the current button is assigned to a button variable
  //this is an event listener that listens to a click event and execute the function
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');
        for(let i = 0; i<removeCartItemButtons.length; i++ ){
        let button = removeCartItemButtons[i]; 
        button.addEventListener('click',removeCartItem)
    }

    //Grab the quantity input when the value changes
    //Use a for-loop to iterate through all the button with class 'cart-quantity-input'
   //Assign the current button to an input variable
  //Use an event listener that listens to a change event and execute the function
    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(let i = 0; i < quantityInputs; i++){
      let input = quantityInputs[i];
      input.addEventListener('change', quantityChanged)
    }
    /* The code below will ard an item to a cart */
    let addToCartButtons = document.getElementsByClassName('shop-item-button')
    for(let i =0 ; i< addToCartButtons.length; i++){
      let button = addToCartButtons[i]
      button.addEventListener('click',addToCartClicked)   
     }

}

// Create the removeCartItem Function
 function removeCartItem(event)
        {   
        /* This function takes an event object as a parameter in which we can explore its target property.The target property helps us identify the particular button clicked and assigned to a variable called 'buttonClicked'*/
        /*The line of code below will target the immediate parent to the ancestors and apply the remove method to remove the element that was clicked.*/
        /*The updateCartTotal() will be called to update the total when an item is removed from the cart */
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
        }


  // Create the quantityChanged Function
  function quantityChanged(event) {
    //grab the target input value
   //check if the input is a number or it is not negative and set the input.value to 1
  //Call the updateCartTotal function
    let input = event.target
    if (isNaN(input.value) || input.value<=0){
      input.value = 1
    }
    updateCartTotal();
  }

  //create the addToCartclicked() function

  function addToCartClicked(event){
     let button = event.target
  }

//update cart total
function updateCartTotal() {
    //target the first cart item container
    //target the cart-rows of the cart item container
    //iterate through it.
    // declare a varable to hold the total price.
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.document.getElementsByClassName('cart-row')
    let total = 0;
    for(let i = 0; i<cartRows.length; i++ ){
        //Target just one of the curent cartRows
        let cartRow = cartRows[i];
        //Target the price of first cart-row
        let priceElement = cartRow.document.getElementsByClassName('cart-price')[0]
        //Target the quantity of first cart-row
        let quantityElement = cartRow.document.getElementsByClassName('cart-quantity-input')[0]
        //Extract the main information from the element. As what is returned is usually the html element. And also remove the dollar string.
        let price  = priceElement.innerText.replace("$", '')
        //Extract the quantity information from the element by targeting the value since it is an input element.
        let quantity = quantityElement.value;
        // The code below augments or accumulate the total of the product os quantity and price.
        total += (price * quantity);
    }
      // round the total cost to two decimal place simply by calling the Math.round() and multiplying by 100 and also dividing by 100
      total = Math.round(total *100)/100;
    //update the total cost in the html file dynamically by targetting the first cart-total-price class and add the dollar sign. 
    document.getElementsByClassName('cart-total-price')[0] = '$' + total;
}


/*
<div class='cart-item cart-column'>
  <img class="cart-item-image" src=""  width="80" height="80">
  <span class="cart-item-title"></span>
</div>
<span class="cart-price cart-column"></span>
<div class="cart-quantity cart-column">
  <input type="number" class="cart-quantity-input" value="1">
  <button class="btn btn-danger" type='button'>Remove</button>
</div>
*/

/*
            <div class="col-md-3">
              <div class="card image-fluid">
                <img
                  src="https://via.placeholder.com/150"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Price:</p>
                  <button class="btn btn-primary btn-addToCart" type="button">
                    ADD TO CART
                  </button>
                  <span class="btn btn-primary btn-skip" type="button">
                    SKIP
                  </span>
                </div>
              </div>
            </div>
*/


function generateCards() {
  fetch(" https://striveschool-api.herokuapp.com/books", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((body) => {
      
      let newRow= document.getElementById("myrow");
      for (let i = 0; i < body.length; i++) {
        
        newRow.innerHTML += `<div class="col-md-3">
        <div class="card image-fluid">
          <img
            src="${body[i].img}"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">C${body[i].title}</h5>
            <p class="card-text">${body[i].price}</p>
            <button class="btn btn-primary btn-addToCart" type="button">
              ADD TO CART
            </button>
            <span class="btn btn-primary btn-skip" type="button">
              SKIP
            </span>
          </div>
        </div>
      </div>`;
      }
    });
}
 
window.onload = function(){
  generateCards();
}

