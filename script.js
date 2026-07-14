const isMobileScreen = window.innerWidth < 768;

// Navbar
if (isMobileScreen)
{
    fetch('html/mobile_navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-placeholder").innerHTML = data;

    })
}
else
{
    fetch('html/navbar.html')
    .then(response => response.text())
    .then (data => {
        document.getElementById("nav-placeholder").innerHTML = data;

        let links = document.querySelectorAll(".link"); 

        for (link of links)
        {
            link.addEventListener("click", underline_link);
        }
    });

    function underline_link(event)
    {
    let links = document.querySelectorAll(".link"); 

    for (link of links)
    {
        link.classList.remove("clicked")
    }
    event.preventDefault();
    this.classList.add("clicked");
}
}




// Photo on a mobile device
if (isMobileScreen)
{
    fetch('html/mobile_photo_of_mine.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("my_photo_mobile_placeholder").innerHTML = data;
    })
    
}