const sendForm = () => {

    const form = document.querySelectorAll('form');

    form.forEach((elem) => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        elem.addEventListener('submit', (event) => {
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

            event.preventDefault();
            elem.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            //получение данных с формы в обработчике событий
            const formData = new FormData(elem);

            //передача данных при вызове функции
            postData(formData)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    };
                    console.log(response);
                    elem.reset();
                    statusMessage.textContent = successMessage;
                    setTimeout(() => statusMessage.remove(), 3000);
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    setTimeout(() => statusMessage.remove(), 3000);

                    console.error(error);
                });
        });


    });

    //запрос на сервер в отдельной функции postData()
    //outputData -callback функция - данные, которые вернулись, обрабатываются
    const postData = (formData) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData,
            credentials: 'include',
            cache: 'default'

        });

    };

};

export default sendForm;