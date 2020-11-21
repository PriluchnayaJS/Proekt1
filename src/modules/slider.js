const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
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

    //ulDots.append(...getListContent());
    ulDots.appendChild(...getListContent());

    const dot = document.querySelectorAll('.dot'); //определение переменной dot после создания dot

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    //удаление слайда
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

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

export default slider;