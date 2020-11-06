/*Remove Items from cart*/
const removeCartItemButtons = document.getElementsByClassName('btn-danger');// This refences the remove button.
// This is a for-loop to iterate through all the button with class 'btn-danger'
for(let i =0; i<removeCartItemButtons.length; i++ ){
//the current button is assigned to a button variable
 let button = removeCartItemButtons[i]; 
 //this is an event listener that listens to a click event and execute the function
 button.addEventListener('click',function(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
 })
}