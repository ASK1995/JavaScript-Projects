const priceInput = document.querySelector('[name = price]');
const quantityInput = document.querySelector('[name = quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');

function calculatePieCost(){
	const price = priceInput.value;
	const quantity = quantityInput.value;
	const cost = price*quantity;
	total.innerText = '$' + cost.toFixed(2);
}

function updateQuantityLabel(){
	const quantity = quantityInput.value;
	quantityLabel.innerText = quantity;
}
calculatePieCost();


priceInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', updateQuantityLabel);
