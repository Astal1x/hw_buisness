document.addEventListener("DOMContentLoaded", function() {
    const cakeSelect = document.getElementById("cake");
    const serviceCheckboxes = document.querySelectorAll(".add-service");
    const totalAmountElement = document.getElementById("total-amount");
    const bookingForm = document.getElementById("booking-form");

    function calculateTotal() {
      let total = parseInt(cakeSelect.value);       
      serviceCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          total += parseInt(checkbox.value);
        }
      });

      totalAmountElement.textContent = total.toLocaleString();
    }
    cakeSelect.addEventListener("change", calculateTotal);  
    serviceCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", calculateTotal);
    });
    bookingForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Ваша заявка на бронирование отправлена!");
    });
    calculateTotal();
  });
  