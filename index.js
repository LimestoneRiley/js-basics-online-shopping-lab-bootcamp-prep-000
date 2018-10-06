var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var orgCartLen = cart.length;

  cart.push({itemName:item, itemPrice:Math.floor(Math.random() * 101)});

  if (cart.length > orgCartLen){
   return (item + " has been added to your cart.");
  }
}

function viewCart() {

  var cartString = "In your cart, ";
  var i = 0;

  do{
	console.log(i);
    switch (i <= cart.length){
		case i === 0 && i === cart.length:  //i = 0 and cart is empty
			 cartString = "Your shopping cart is empty.";
			 break;
		case i === 0 && cart.length === 1:  //i = 0 and cart has one item in it
			 cartString = cartString.concat(`you have ${cart[i].itemName} at $${cart[i].itemPrice}.`);
			 break;
		case i === 1 && i < cart.length:  //i is 1, cart has items in it
			 cartString = cartString.concat(`you have ${cart[i-1].itemName} at $${cart[i-1].itemPrice},`);
			 break;
		case i > 1 && i < cart.length:
			 cartString = cartString.concat(` ${cart[i-1].itemName} at $${cart[i-1].itemPrice},`);
			 break;
		case i > 1 && i === cart.length:
			 cartString = cartString.concat(` and ${cart[i-1].itemName} at $${cart[i-1].itemPrice}.`);
		} // ends switch
		i++;
	} while (i <= cart.length);
 
 return (cartString);

} //ends function viewCart


function total() {
  var i;
  var total = 0;
  
  for (i=0; i<cart.length; i++){
    total = total + cart[i].itemPrice;
  }
  return(total);
}

function removeFromCart(item) {
  // write your code here
  var i;
  
  for (i=0; i<cart.length; i++){
    if (cart[i].itemName === name) {cart.splice(i,1);}
       else if (i === cart.length) {return ("That item is not in your cart.");} // ends if else if
    } // ends if (cart[i].itemName = name)
  } // ends for
} // ends function

function placeOrder(cardNumber) {
  // write your code here
}
