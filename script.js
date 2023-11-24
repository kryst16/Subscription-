document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
  

    const subscriptionResult = document.getElementById("subscriptionResult");
    subscriptionResult.textContent = `Thank you, ${fullName}! You're subscribed to Shoppay's newsletter.`;
    subscriptionResult.style.color = "green";
  
   
    document.getElementById("subscriptionForm").reset();
  });
  
  //  auto-slide the carousel every 3 seconds
$('.carousel').carousel({
    interval: 3000
  });
  