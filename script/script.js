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

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'), //тег меню
            clsBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        btnMenu.addEventListener('click', () => {
            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            } else {
                menu.style.transform = `translate(-100%)`;
            };
            console.log(menu.style.transform); //false

        });
        clsBtn.addEventListener('click', () => {
            menu.style.transform = `translate(-100%)`; //закрытие меню
        });
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', () => {
                menu.style.transform = `translate(-100%)`;
            });
        }
    }
    toggleMenu();



});