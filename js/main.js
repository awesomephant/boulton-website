//===============
// ====CONFIG====
//===============

const delayBetweenOverlays = 10; // Seconds
const activateOverlayAfter = 10; // Seconds

function gri(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var overlayLoop;
var hidden, visibilityChange, container;
var inactiveTime = 0;
var inactive = false;
hidden = false;

function init() {
    const randomLinks = document.querySelectorAll('.randomLink')
    container = document.querySelector('.overlay')
    console.log(projects)
    for (let i = 0; i < projects.length; i++) {
        if (window.location.pathname === projects[i]){
            projects.splice(i, 1)
        }
    }
    for (let i = 0; i < randomLinks.length; i++) {
        let link = randomLinks[i];

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
    let randomImageTitle = document.querySelector('.randomImageTitle')
    if (randomImage) {
        randomImage.addEventListener('click', loadRandomImage)
        randomImageTitle.addEventListener('click', loadRandomImage)
    }

    window.setInterval(tick, 1000)
}

var overlayCounter = 1;
function addOverlay() {
    if (overlayCounter <= 18) {
        let url = `/assets/overlays/oliver-boulton-website-path-${overlayCounter}.png`
        let img = document.createElement('img')
        img.setAttribute('src', url)
        container.appendChild(img)
        overlayCounter++
    }
}

function loadRandomImage() {
    let url = `/assets/letter-like/OLIVER_BOULTON_LETTER_LIKE_${gri(1, 2)}.png`
    let el = document.querySelector('.randomImage img')
    el.setAttribute('src', url)
}

function handleVisibilityChange() {
    if (document[hidden]) {
        window.clearInterval(overlayLoop)
        overlayLoop = window.setInterval(addOverlay, delayBetweenOverlays * 1000)
        container.classList.add('active')
        container.classList.add('no-animation')
    } else {
        container.classList.remove('no-animation')
    }
}

function clearOverlay() {
    container.classList.remove('active')
    container.classList.remove('no-animation')
    window.setTimeout(function () {
        container.innerHTML = '';
        overlayCounter = 1;
    }, 1000)
}

function tick() {
    inactiveTime++;
    if (inactiveTime > activateOverlayAfter && inactive === false) {
        inactive = true;
        container.classList.add('active')
        overlayLoop = window.setInterval(addOverlay, delayBetweenOverlays * 1000)
    }
}

window.addEventListener('DOMContentLoaded', function () { init() })
var ticking = false;

function handleScroll() {
    clearOverlay()
    inactiveTime = 0;
    inactive = false;
    window.clearInterval(overlayLoop)
}
function handleMouseMove() {
    clearOverlay()
    inactiveTime = 0;
    inactive = false;
    window.clearInterval(overlayLoop)
}

window.addEventListener('mousemove', function (e) {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            handleMouseMove();
            ticking = false;
        });
        ticking = true;
    }
});
window.addEventListener('scroll', function (e) {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

window.addEventListener('load', function () {
    let firstImage = document.querySelector('.single-post--content picture');
    let copy = document.querySelector('.sticky');
    let container = document.querySelector('.single-post--content');
    if (firstImage && firstImage.getAttribute('data-align') != 'right') {
        if (window.matchMedia('(min-width: 40rem)').matches) {
            container.style.paddingTop = `${copy.offsetHeight + 50}px`;
            container.classList.remove('images-loading')
        }
    }
})