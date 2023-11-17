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




function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${day}-${month}-${year}`;
}

document.getElementById("indivbuy").addEventListener("click", function() {
  var x = document.getElementById("indivticket").textContent;
  var date = getCurrentDate();
  document.getElementById("result").textContent = `Individual Ticket Price: ${x}`;
  document.getElementById("date").textContent = `Date: ${date}`;
});

document.getElementById("groupbuy").addEventListener("click", function() {
  var y = document.getElementById("groupticket").textContent;
  var date = getCurrentDate();
  document.getElementById("result").textContent = `Group Ticket Price: ${y}`;
  document.getElementById("date").textContent = `Date: ${date}`;
});




function purchaseGroupTickets() {
  var date = getCurrentDate();
  var quantity = parseInt(document.getElementById('groupTicketQuantity').value);

  var priceElement = document.getElementById("groupticket");
  var price = priceElement.textContent;
  var totalPrice = parseFloat(price) * quantity;

  document.getElementById("result").textContent = `Group Ticket Price: ${price} per ticket`;
  document.getElementById("date").textContent = `Date: ${date}`;
  document.getElementById("quantity").textContent = `Quantity: ${quantity}`;
  document.getElementById("totalPrice").textContent = `Total Price: $${totalPrice}`;
}

document.getElementById("groupbuy").addEventListener("click", function() {
  document.getElementById("groupTicketQuantityContainer").style.display = "block";
});

document.getElementById("groupPurchaseButton").addEventListener("click", function() {
  purchaseGroupTickets();
  document.getElementById("groupTicketQuantityContainer").style.display = "none";
});

document.getElementById("purchase").addEventListener("click", function() {
});


const musicians = document.querySelectorAll('.musician-image');

musicians.forEach((musician) => {
  musician.addEventListener('mouseenter', () => {
    musician.style.transform = 'scale(1.1)';
  });

  musician.addEventListener('mouseleave', () => {
    musician.style.transform = 'scale(1)';
  });
});


var myButton = document.getElementById('myButton');

// Add a click event listener to the button
myButton.addEventListener('click', function() {
  // Specify the URL you want to navigate to
  window.location.href = 'https://getbootstrap.com/docs/5.3/forms/layout/?gridRadios=option1';
});