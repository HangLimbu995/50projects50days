document.addEventListener('DOMContentLoaded', () => {

    var panels = document.querySelectorAll('.panel')

    console.log('pannel are', panels)

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            console.log('pannel is', panel)
            removeActive();
            panel.classList.add('active')
        })
    })
    function removeActive() {
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
    }


})
