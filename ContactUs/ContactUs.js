function sendMail(){
    let parms = {
        firstName : document.getElementById("firstName").value,
        lastName : document.getElementById("lastName").value,
        subject : document.getElementById("subject").value,
        email : document.getElementById("email").value,
        organisation : document.getElementById("organisation").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_ccww054", "template_vx5lba8", parms)
    .then(function(response) {
        alert("✅ Message sent successfully!");
        // Optional: Reset the form after success
        document.getElementById("contact-form").reset(); // Make sure your <form> has id="contact-form"
    })
    .catch(function(error) {
        alert("❌ Failed to send message. Please try again.\nError: " + error.text);
    });
}