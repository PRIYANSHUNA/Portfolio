const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("nav");

    if(window.scrollY > 50){
        header.style.background = "#0f172a";
    }else{
        header.style.background = "transparent";
    }
});