const isMobileScreen = window.innerWidth <= 1024;
let path = window.location.pathname;

// Navbar
if (isMobileScreen)
{
    let heading_text = "";

    fetch("other_html/mobile_navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-placeholder").innerHTML = data;

        if (path.endsWith("/") || path.endsWith("/index.html")) {
            heading_text = "Maxim.";
        }

        else if (path.endsWith("/about.html")) {
            heading_text = "About.";
        }

        else if (path.endsWith("/projects.html")) {
            heading_text = "Projects.";
        }

        // Certificates
        else {
            heading_text = "Certificates."
        }

        document.querySelector(".navbar-brand").text = heading_text;

    })
}
else
{
    fetch("other_html/navbar.html")
    .then(response => response.text())
    .then (data => {
        document.getElementById("nav-placeholder").innerHTML = data;

        // Navbar underlining 
        if (path.endsWith("/") || path.endsWith("/index.html")) {
            document.getElementById("index_link").classList.add("active");
        }
        else if (path.endsWith("/about.html")) {
            document.getElementById("about_link").classList.add("active");
        }
        else if (path.endsWith("/projects.html")) {
            document.getElementById("projects_link").classList.add("active");
        }
        // Certificates
        else {
            document.getElementById("certificates_link").classList.add("active");
        }
    });

}


// Photo on a mobile device
if (isMobileScreen)
{
    fetch('other_html/mobile_photo_of_mine.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("my_photo_mobile_placeholder").innerHTML = data;
    })
    
}

// Text (about.html)
if (path.endsWith("about.html")){
    if (isMobileScreen) {
    fetch('other_html/text_about_mobile.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("text_placeholder").innerHTML = data;
    })
}
else {
    fetch('other_html/text_about.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("text_placeholder").innerHTML = data;
    })
}
}
