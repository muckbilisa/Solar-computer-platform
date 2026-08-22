function register(event){
  event.preventDefault();
  const name=document.getElementById('name').value.trim();
  document.getElementById('message').textContent=`Welcome, ${name}! Your free registration form has been submitted.`;
  event.target.reset();
}
function buy(product){
  alert(product + " selected. Payment and checkout can be connected here when the payment system is ready.");
}
