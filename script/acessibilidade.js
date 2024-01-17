// acessibilidade.js

document.addEventListener('DOMContentLoaded', function () {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');

    increaseFontButton.addEventListener('click', function () {
        changeFontSize(2);
    });

    decreaseFontButton.addEventListener('click', function () {
        changeFontSize(-2);
    });

    function changeFontSize(amount) {
        const changeableTextContainers = document.querySelectorAll('.changeable-text-container');

        changeableTextContainers.forEach(function (container) {
            const currentSize = window.getComputedStyle(container, null).getPropertyValue('font-size');
            const newSize = parseFloat(currentSize) + amount + 'px';
            container.style.fontSize = newSize;
        });
    }
});
