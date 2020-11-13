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

        };

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

        };

        updateClock();
    };
    // countTimer('08 november 2020');
    setInterval(countTimer, 1000, '17 november 2020');

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
        // function getListContent() {
        const getListContent = () => {

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

    //input, регулярные выражения, делегирование

    const inputReg = () => {

        const classBlock = document.querySelector('.calc-block');

        classBlock.addEventListener('click', (event) => {
            let target = event.target;

            target.addEventListener('input', () => {

                target.value = target.value.replace(/\D/g, '');

            });

        });

    };
    inputReg();

    //наша команда - dataset

    const classRow = () => {
        const commandPhoto = document.querySelectorAll('.command__photo');
        // console.log(commandPhoto);
        commandPhoto.forEach((img) => {
            let src = img.getAttribute('src');
            img.addEventListener('mouseenter', (e) => {

                e.target.src = e.target.dataset.img;

            });
            img.addEventListener('mouseleave', (e) => {

                e.target.src = src;
            });

        });

    };
    classRow();

    //калькулятор
    const calc = (price) => {
        const classBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'), //тип помещения
            calcSquare = document.querySelector('.calc-square'), //площадь
            calcСount = document.querySelector('.calc-count'), //количество помещений
            calcDay = document.querySelector('.calc-day'), //срок исполнения
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value, // selected тип объекта
                squareValue = +calcSquare.value; //площадь

            if (calcСount.value > 1) {
                countValue += (calcСount.value - 1) / 10;
            };

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            };

            // console.log(!!typeValue);
            // console.log(!!squareValue);
            if (typeValue && squareValue) {
                total = Math.round(price * typeValue * squareValue * countValue * dayValue);
            };

            totalValue.textContent = total;

        };

        classBlock.addEventListener('change', (event) => {
            const target = event.target;

            // if (target.matches('.calc-type') || target.matches('.calc-square') ||
            //     target.matches('.calc-count') || target.matches('.calc-day')) {
            //     console.log(1);
            // }; //первый способ

            // if (target === calcType || target === calcSquare || target === calcСount || target === calcDay) {
            //     console.log(1);
            // }; //второй способ

            if (target.matches('select') || target.matches('input')) {
                //console.log(1);
                countSum(); //функция считает итоговую цену
            }; //третий способ

        });

    };
    calc(100);

    //send-ajax-form
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
        const form = document.getElementById('form1');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';
        //statusMessage.textContent = 'Тут будет сообщение!'

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            //получение данных с формы в обработчике событий
            const formData = new FormData(form);
            let body = {};
            // for (let val of formData.entries()) {
            //     // console.log(val);
            //     body[val[0]] = val[1];
            // };
            formData.forEach((val, key) => {
                body[key] = val;
            });
            //console.log(body);
            //передача данных при вызове функции
            postData(body,
                () => {
                    statusMessage.textContent = successMessage;
                },
                (error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        });


        //запрос на сервер в отдельной функции postData()
        //outputData -callback функция - данные, которые вернулись, обрабатываются
        const postData = (body, outputData, errorData) => {

            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                // statusMessage.textContent = loadMessage;

                if (request.readyState !== 4) {
                    return;
                };

                if (request.status === 200) {
                    outputData();
                    // statusMessage.textContent = successMessage;
                } else {
                    errorData(request.status);
                    // statusMessage.textContent = errorMessage;
                    // console.error(request.status);
                };

            });

            request.open('POST', './server.php');
            //request.setRequestHeader('Content-Type', 'multipart/form-data');
            request.setRequestHeader('Content-Type', 'application/json');

            //request.send(formData);
            request.send(JSON.stringify(body));

        };

    };
    sendForm();

});