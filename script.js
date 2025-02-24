if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('Service Worker registered', reg))
    .catch(err => console.error('Service Worker registration failed', err));
}

const form = document.getElementById('goldForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const gramsOfGold = parseFloat(document.getElementById('gramsOfGold').value);
  const priceOfGold = parseFloat(document.getElementById('priceOfGold').value);
  const additionalPrice = parseFloat(document.getElementById('additionalPrice').value);
  
  // حساب السعر
  const price = (gramsOfGold * 999.9 / 750) * (priceOfGold + additionalPrice);
  
  // عرض النتيجة
  document.getElementById('resultGoldAmount').textContent = gramsOfGold.toFixed(2);
  document.getElementById('resultPrice').textContent = price.toFixed(2);
  document.getElementById('result').classList.remove('hidden');
});
