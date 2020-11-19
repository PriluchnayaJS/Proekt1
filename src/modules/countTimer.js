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

        timer.timeRemaining > 0 ?
            (timerHours.textContent = timer.hours, timerMinutes.textContent = timer.minutes, timerSeconds.textContent = timer.seconds)
            //setTimeout(updateClock, 1000);
            :
            (timerHours.textContent = '00', timerMinutes.textContent = '00', timerSeconds.textContent = '00');

    };

    updateClock();
};

export default countTimer;