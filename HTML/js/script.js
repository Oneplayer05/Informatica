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
