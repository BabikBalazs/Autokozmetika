function sendMail() {
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById('subject').value,
        message: document.getElementById("message").value
    };
 
    console.log('Küldés előtt:', templateParams); // Hibakeresés
 
    emailjs.send('service_g0116pm', 'template_4snrveh', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            window.location.href = 'thank_you.html';
        }, function(error) {
            console.log('FAILED...', error); // Hiba részletei
            alert('Hiba történt: ' + error.text); // Felhasználói visszajelzés
            window.location.href = 'error.html';
        });
 }