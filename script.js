// Navbar

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

