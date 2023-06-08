function calculate() {
    var totalAmount = document.getElementById("totalAmount").value;
    var perDay = totalAmount / 30;
    var perHour = perDay / 24;
    var perMinute = perHour / 60;
  
    document.getElementById("perDay").textContent = "How much of ur day's value : " + perDay.toFixed(2);
    document.getElementById("perHour").textContent = "How much of ur hour's value: " + perHour.toFixed(2);
    document.getElementById("perMinute").textContent = "Per Minute Value: " + perMinute.toFixed(2);
  }
  
  