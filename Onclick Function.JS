const button = document.querySelector('[data-button]'),
            alert = document.querySelector('[data-alert]');
        button.addEventListener('click', () => {
            alert.style.display = 'block'
        })