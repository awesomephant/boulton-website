function gri(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {
    const randomLinks = document.querySelectorAll('.randomLink')
    for (let i = 0; i < randomLinks.length; i++) {
        let link = randomLinks[i];
        console.log(link)
        console.log(projects)
        link.setAttribute('href', projects[gri(0, projects.length - 2)])
    }
}

window.addEventListener('DOMContentLoaded', function () {
    init()
})