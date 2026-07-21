const isMobileScreen = window.innerWidth <= 1024;
let path = window.location.pathname;

// Navbar
if (isMobileScreen)
{
    
    fetch("other_html/mobile_navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-placeholder").innerHTML = data;

    })
}
else
{
    fetch("other_html/navbar.html")
    .then(response => response.text())
    .then (data => {
        document.getElementById("nav-placeholder").innerHTML = data;

        // Navbar underlining 
        if (path === "/" || path === "/index.html") {
            document.getElementById("index_link").classList.add("active");
        }
        else if (path === "/about.html") {
            document.getElementById("about_link").classList.add("active");
        }
        else if (path === "/projects.html") {
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


