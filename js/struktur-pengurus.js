let btns = document.getElementsByClassName("btn-gallery");
let imgTop = document.getElementById("imgTop");

for (let i = 0; i < btns.length; i++) {
    let imgGallery = btns[i].children[0];
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("gallery-active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" gallery-active", "");
        }
        imgGallery.className += " gallery-active";
        imgTop.src = imgGallery.src;
        imgTop.style.transition = "0.5s";
    });
}
