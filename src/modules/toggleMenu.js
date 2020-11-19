const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

    const handlerMenu = () => {

        menu.classList.toggle('active-menu');
    };
    //делегирование
    menu.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName === 'A') {
            handlerMenu(event);
        };
    });

    btnMenu.addEventListener('click', handlerMenu);

};

export default toggleMenu;