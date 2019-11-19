function gri(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hidden, visibilityChange;
hidden = false;

function init() {
    const randomLinks = document.querySelectorAll('.randomLink')
    for (let i = 0; i < randomLinks.length; i++) {
        let link = randomLinks[i];
        console.log(link)
        console.log(projects)
        link.setAttribute('href', projects[gri(0, projects.length - 2)])
    }


    // Set the name of the hidden property and the change event for visibility
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    if (typeof document.addEventListener === "undefined" || hidden === undefined) {
        console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
    } else {
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }

    let randomImage = document.querySelector('.randomImage')
    randomImage.addEventListener('click', loadRandomImage)

}

var overlayCounter = 0;
function addOverlay(){
    if (overlayCounter < 15){
        let url = `/assets/overlays/layer_Glyph_${gri(1,12)}.png`
        let img = document.createElement('img')
        img.setAttribute('src', url)
        img.setAttribute('style', `position: absolute; left: ${gri(-5, 80)}vw; top: ${gri(-5,80)}vh; width: 40vw; height: auto`)
        const container = document.querySelector('.overlay');
        container.appendChild(img)
        overlayCounter++
    }
}

function loadRandomImage(){
    let url = `/assets/letter-like/OLIVER_BOULTON_LETTER_LIKE_${gri(2,19)}.jpg`
    let el = document.querySelector('.randomImage img')
    el.setAttribute('src', url)   
}

var overlayLoop;

function handleVisibilityChange() {
    if (document[hidden]) {
        overlayLoop = window.setInterval(addOverlay, 500)
    } else {
        window.clearInterval(overlayLoop)
    }
}

window.addEventListener('DOMContentLoaded', function () {
    init()
})