function sendMail(contactForm) {
    emailjs.send("service_n01cao9", "Project Request", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value, 
        "project_request": contactForm.projectsummary.value}, "rxmuvW43EMDAUwZJK")
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error) {
            console.log("Email not sent", error);
        }
    );
    return false;
}