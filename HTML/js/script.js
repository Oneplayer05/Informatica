
function getPartialElements() {
    var z, i, elmnt, elmnts;
    elmnts = [];
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        elmnts.push(elmnt);
    }
    return elmnts;
};

function createPartialElements(elementsList) {
    elementsList.forEach(element => {
        var file = element.getAttribute("partial-html");
        if (file) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {element.innerHTML = this.responseText;}
                    if (this.status == 404) {element.innerHTML = "Page not found.";}
                    element.removeAttribute("partial-html");
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
        }
    });
};

window.onload = function() {
    createPartialElements(getPartialElements());
}

function toggleSearch() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('active');
}
const video = document.querySelector("video");
const muteIcon = document.querySelector(".fa-volume-mute");
const muteButtom = muteIcon.parentNode;
muteButtom.addEventListener("click", () => {
    if (video.muted == true){
    video.muted = false;
    muteIcon.classList.remove("fa-volume-mute");
    muteIcon.classList.add("fa-volume-up");}
    else {
    video.muted = true;
    muteIcon.classList.remove("fa-volume-up");
    muteIcon.classList.add("fa-volume-mute");}
 });
 const images = document.querySelectorAll(".primodiv");
 images.forEach ((image) => {
    image.addEventListener("mouseenter",() => {
    image.style.transform = "scale(1.05)"
 });
 image.addEventListener("mouseleave",() => {
    image.style.transform = "scale(1)"
 })});
 const button = document.createElement("button");
 document.body.appendChild(button);
 button.innerHTML = ' <i class="fas fa-chevron-up"></i>';
 button.style.position = "fixed";
 button.style.bottom = "20px";
 button.style.right = "20px";
 button.style.display = "none";

 button.addEventListener("click",() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
 });
 window.addEventListener("scroll",() => {
    if(window.scrollY > 500){
        button.style.display = "block";
    }
    else{
        button.style.display = "none";
    }
 });