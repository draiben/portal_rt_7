function changeBg() {
    let navbar = document.getElementById("navbar");
    let scrollValue = window.scrollY;
    let navLink = document.querySelectorAll(".nav-link");

    if (scrollValue < 100) {
        navbar.classList.remove("navbar-background");
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
        document.getElementById("img-logo").src = "../assets/images/PORTAL_RT_7.png";
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove("scroll");
        }
    } else {
        navbar.classList.add("navbar-background");
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
        document.getElementById("img-logo").src = "../assets/images/PORTAL_RT_7_blue.png";
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.add("scroll");
        }
    }
}

window.addEventListener("scroll", changeBg);
