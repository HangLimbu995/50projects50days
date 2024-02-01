
document.addEventListener('DOMContentLoaded', () => {

    let boxes;

    window.addEventListener('scroll', checkBoxes)

    checkBoxes();

    function checkBoxes() {
        boxes = document.querySelectorAll('.box')

        const triggerBottom = window.innerHeight / 5 * 4

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add('show')
            } else {
                box.classList.remove('show')
            }
        })
    }

    const mainContainer = document.querySelector('.main')

    for (let i = 0; i < 14; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.innerHTML = '<h2>Content</h2>'
        mainContainer.appendChild(box)
    }

})