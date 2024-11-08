document.getElementById('customizationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way
  document.getElementById('orderConfirmation').style.display = 'block';
});
