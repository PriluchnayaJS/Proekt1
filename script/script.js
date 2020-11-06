window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            // if (hours < 10) {
            //     hours = '0' + hours;
            // };
            // if (minutes < 10) {
            //     minutes = '0' + minutes;
            // };
            // if (seconds < 10) {
            //     seconds = '0' + seconds;
            // };

            hours < 10 ? hours = '0' + hours : hours;
            minutes < 10 ? minutes = '0' + minutes : minutes;
            seconds < 10 ? seconds = '0' + seconds : seconds;

            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };

        }

        function updateClock() {

            let timer = getTimeRemaining();


            // timerHours.textContent = timer.hours;
            // timerMinutes.textContent = timer.minutes;
            // timerSeconds.textContent = timer.seconds;

            // if (timer.timeRemaining > 0) {
            //     timerHours.textContent = timer.hours;
            //     timerMinutes.textContent = timer.minutes;
            //     timerSeconds.textContent = timer.seconds;
            //     //setTimeout(updateClock, 1000);

            // } else {
            //     timerHours.textContent = '00';
            //     timerMinutes.textContent = '00';
            //     timerSeconds.textContent = '00';

            // };

            timer.timeRemaining > 0 ?
                (timerHours.textContent = timer.hours, timerMinutes.textContent = timer.minutes, timerSeconds.textContent = timer.seconds)
                //setTimeout(updateClock, 1000);
                :
                (timerHours.textContent = '00', timerMinutes.textContent = '00', timerSeconds.textContent = '00');

        }

        updateClock();
    }
    // countTimer('08 november 2020');
    setInterval(countTimer, 1000, '08 november 2020');

    //работа с меню
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'), //кнопка меню
            menu = document.querySelector('menu'); //тег меню - окно меню
        // clsBtn = document.querySelector('.close-btn'),
        // menuItems = menu.querySelectorAll('ul>li'); //пункты меню

        //повторяющиеся команды работы с меню
        const handlerMenu = () => {
            // if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
            //     menu.style.transform = `translate(0)`;
            // } else {
            //     menu.style.transform = `translate(-100%)`;
            // };
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

        /* clsBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));*/


        // for (let i = 0; i < menuItems.length; i++) {
        //     menuItems[i].addEventListener('click', handlerMenu);
        // };
        // menuItems.forEach((elem) => {
        //     elem.addEventListener('click', handlerMenu);
        // });


    };
    toggleMenu();

    //popup окно
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');
        //popupClose = document.querySelector('.popup-close'); не нужна

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

        // popupClose.addEventListener('click', () => {
        //     popup.style.display = 'none';
        // });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                //console.log(target);
                if (!target) {
                    popup.style.display = 'none';
                };
            };

        });

    };

    togglePopup();

    //табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                };
            };
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            // console.log(target);

            target = target.closest('.service-header-tab'); //поднимается выше до родителя и ищет элемент
            // console.log(target);

            if (target) {
                //console.log(target);
                tab.forEach((item, i) => {
                    if (item === target) {
                        // console.log(tabContent[i]);
                        toggleTabContent(i);
                    };
                });

            };

        });

    };

    tabs();

    //слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            //btn = document.querySelectorAll('.portfolio-btn'),
            //dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content'),
            ulDots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval; //для откл автоматического переключения слайдов при работе с мышью
        //добавление слайда
        //формирование dot от количества slide
        function getListContent() {

            let dot = [];

            for (let i = 0; i <= slide.length - 1; i++) {
                let li = document.createElement('li');
                li.classList.add('dot');
                dot.push(li);
                dot[0].classList.add('dot-active');
            };

            return dot;
        };

        ulDots.append(...getListContent());

        const dot = document.querySelectorAll('.dot'); //определение переменной dot после создания dot

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        //удаление слайда
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            // slide[currentSlide].classList.remove('portfolio-item-active');
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            //slide[currentSlide].classList.add('portfolio-item-active');
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);

        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        //работа по кнопкам
        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                //console.log(1);
                return;
            };

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    };
                });
            };

            //прокрутка по стрелкам
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            };

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            };

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            };
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            };
        });

        startSlide(1500);
    };
    slider();
});