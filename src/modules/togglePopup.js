const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';

            function movePopup() {
                const popupContent = document.querySelector('.popup-content');

                let pos = 0;
                let id = setInterval(frame, 5);
                popupContent.style.left = '0px';

                function frame() {
                    if ((pos >= (parseInt(document.documentElement.clientWidth) / 2) - (parseInt(popupContent.clientWidth) / 2)) || window.screen.width <= 768) {
                        clearInterval(id);
                    } else {
                        pos += 4;
                        popupContent.style.left = pos + 'px';
                    };
                };
            };

            movePopup();
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popup.style.display = 'none';
            };
        };

    });

};

export default togglePopup;