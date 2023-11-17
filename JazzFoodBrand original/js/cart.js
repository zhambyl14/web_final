var isPlaying = false;
var audio = new Audio('sounds/music.mp3');
var animationElement = document.querySelector(".plate .black");

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    animationElement.style.animationPlayState = "paused";
  } else {
    audio.play();
    animationElement.style.animationPlayState = "running";
  }
  isPlaying = !isPlaying;
}

var playmusicElement = document.querySelector(".playmusic");
playmusicElement.addEventListener("click", togglePlay);


class CartItem {
  constructor(productID, product, quantity = 1) {
    this.productID = productID;
    this.product = product;
    this.quantity = quantity;
  }
}

const cartItems = [];

document.getElementById("addtocart1").addEventListener("click", function() {
  const productID = 1;
  const product = {
    name: document.getElementById("name1").textContent.trim(),
    price: parseInt(document.getElementById("price1").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500); 
  
});
 
// card 1

document.getElementById("addtocart2").addEventListener("click", function() {
  const productID = 2;
  const product = {
    name: document.getElementById("name2").textContent.trim(),
    price: parseInt(document.getElementById("price2").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 2

document.getElementById("addtocart3").addEventListener("click", function() {
  const productID = 3;
  const product = {
    name: document.getElementById("name3").textContent.trim(),
    price: parseInt(document.getElementById("price3").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();
  
  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 3

document.getElementById("addtocart4").addEventListener("click", function() {
  const productID = 4;
  const product = {
    name: document.getElementById("name4").textContent.trim(),
    price: parseInt(document.getElementById("price4").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 4

document.getElementById("addtocart5").addEventListener("click", function() {
  const productID = 5;
  const product = {
    name: document.getElementById("name5").textContent.trim(),
    price: parseInt(document.getElementById("price5").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 5

document.getElementById("addtocart6").addEventListener("click", function() {
  const productID = 6;
  const product = {
    name: document.getElementById("name6").textContent.trim(),
    price: parseInt(document.getElementById("price6").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 6

document.getElementById("addtocart7").addEventListener("click", function() {
  const productID = 7;
  const product = {
    name: document.getElementById("name7").textContent.trim(),
    price: parseInt(document.getElementById("price7").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 7

document.getElementById("addtocart8").addEventListener("click", function() {
  const productID = 8;
  const product = {
    name: document.getElementById("name8").textContent.trim(),
    price: parseInt(document.getElementById("price8").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 8

document.getElementById("addtocart9").addEventListener("click", function() {
  const productID = 9;
  const product = {
    name: document.getElementById("name9").textContent.trim(),
    price: parseInt(document.getElementById("price9").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 9

document.getElementById("addtocart10").addEventListener("click", function() {
  const productID = 10;
  const product = {
    name: document.getElementById("name10").textContent.trim(),
    price: parseInt(document.getElementById("price10").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 10

document.getElementById("addtocart11").addEventListener("click", function() {
  const productID = 2;
  const product = {
    name: document.getElementById("name11").textContent.trim(),
    price: parseInt(document.getElementById("price11").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 11

document.getElementById("addtocart12").addEventListener("click", function() {
  const productID = 12;
  const product = {
    name: document.getElementById("name12").textContent.trim(),
    price: parseInt(document.getElementById("price12").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 12

document.getElementById("addtocart13").addEventListener("click", function() {
  const productID = 13;
  const product = {
    name: document.getElementById("name13").textContent.trim(),
    price: parseInt(document.getElementById("price13").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 13

document.getElementById("addtocart14").addEventListener("click", function() {
  const productID = 14;
  const product = {
    name: document.getElementById("name14").textContent.trim(),
    price: parseInt(document.getElementById("price14").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 14

document.getElementById("addtocart15").addEventListener("click", function() {
  const productID = 15;
  const product = {
    name: document.getElementById("name15").textContent.trim(),
    price: parseInt(document.getElementById("price15").textContent.trim()),
  };

  const cartItem = new CartItem(productID, product);
  cartItems.push(cartItem);

  updateCart();

  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('cart-animation');
  setTimeout(() => {
    cartIcon.classList.remove('cart-animation');
  }, 500);
});
// card 15


function updateCart() {
  const cartContainer = document.getElementById("offcanvasbody");
  cartContainer.innerHTML = "";

  for (const cartItem of cartItems) {
    const product = cartItem.product;
    const productHTML = `
      <div class="cart-item"><br>
        <img src="img/menu/${cartItem.productID}.jpg" alt="${product.name}" class="card-menu">
        <div class="card-body h-100">
          <h5 class="card-title">${product.name}</h5>
          <h3 class="card-price">Price: $${product.price * cartItem.quantity}</h3>
          <div class="container">
            <button class="btn btn-primary" onclick="decreaseQuantity(${cartItem.productID})">-</button>
            <p class="card-text">Quantity: ${cartItem.quantity}</p>
            <button class="btn btn-primary" onclick="increaseQuantity(${cartItem.productID})">+</button>
            <button class="btn btn-primary" onclick="removeCartItem(${cartItem.productID})">Remove</button>
          </div>
        </div>
      </div>
    `;
    cartContainer.innerHTML += productHTML;
  }

  const totalPrice = cartItems.reduce((acc, cartItem) => acc + cartItem.product.price * cartItem.quantity, 0);

  const cartFooter = `<div class="cart-footer">
  <br><br>
    <h3 class="card-price">Total: $${totalPrice}</h3>
    <button class="btn btn-primary" onclick="buyAllItems()">BUY ALL</button>
    <button class="btn btn-primary" onclick="removeAllItems()">CLEAN ALL</button>
  </div>`;

  cartContainer.innerHTML += cartFooter;
}

function decreaseQuantity(productID) {
  for (const cartItem of cartItems) {
    if (cartItem.productID === productID) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      }
    }
  }
  updateCart();
}

function increaseQuantity(productID) {
  for (const cartItem of cartItems) {
    if (cartItem.productID === productID) {
      cartItem.quantity++;
    }
  }
  updateCart();
}

function removeCartItem(productID) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].productID === productID) {
      cartItems.splice(i, 1);
      break;
    }
  }
  updateCart();
}

function buyAllItems() {
  let receiptString = "Your Receipt \n";
  receiptString += "\n";
  receiptString += "\n";
  receiptString += "                ORDER \n";
  receiptString += "------------------------------\n";
  receiptString += "Name:                 Price:\n";
  receiptString += "------------------------------\n";

  for (const cartItem of cartItems) {
    receiptString += `${cartItem.product.name}        $${cartItem.product.price * cartItem.quantity}\n`;
    receiptString += "------------------------------\n";
  }

  const totalPrice = cartItems.reduce((acc, cartItem) => acc + cartItem.product.price * cartItem.quantity, 0);

  receiptString += "\n";receiptString += "------------------------------\n";
  receiptString += `Total:                        $${totalPrice}\n`;
  receiptString += "------------------------------\n";

  alert(receiptString);
}


function removeAllItems() {
  cartItems.splice(0, cartItems.length);
  updateCart();
}


