 // get all variables 
 const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
 const form = document.getElementById("form");
 const Name = document.getElementById("name");
 const Email = document.getElementById("email");
 const Msg = document.getElementById("message");
 const btn = document.getElementById("sub-btn");
 const buy_btn = document.querySelectorAll("#buy-product") ; 
 // addCart function 
addToCartButtons.forEach(button => {
  button.addEventListener("click", function() {
    alert("Product added to cart!");
  });
});
// redirect to contact function 
form.addEventListener("submit",  (e) =>{
  e.preventDefault() ; 
  if(Email.value !== '' && Name.value !== '' && Msg.value !== ''){
    window.location = "./Contact/Contact.html" ;
    Email.value = '' ; 
    Name.value = '' ; 
    Msg.value  = '' ; 
  }
}) 
// buy product 
 buy_btn.forEach((item) =>{
   item.addEventListener('click' , () =>{
   window.location= "./BuyForm/buyProduct.html" ; 
   })
 })