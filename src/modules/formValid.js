const formValid = () => {

    const phones = document.querySelectorAll('.form-phone');

    phones.forEach((e) => {
        e.addEventListener('input', () => {
            e.setAttribute('pattern', '[+][0-9]{11}');
            if (!e.value) {
                e.setAttribute('placeholder', '+7XXXXXXXXXX');
            } else {
                e.setAttribute('placeholder', 'Номер телефона');
            };
        });

    });

    const names = document.querySelectorAll('.form-name');
    //console.log(names);

    names.forEach((e) => {
        e.addEventListener('input', () => {

            e.setAttribute('pattern', '^[А-Яа-яЁё ]+$');
            if (!e.value) {
                e.setAttribute('placeholder', 'Ваше имя (RU/space)');
            } else {
                e.setAttribute('placeholder', 'Ваше имя');
            };
        });

    });

    const emailes = document.querySelectorAll('.form-email');
    console.log(emailes);

    emailes.forEach((e) => {
        e.addEventListener('input', () => {

            e.setAttribute('pattern', '[a-zA-Z]+@[a-zA-Z_]+?[.]+[a-zA-Z]{2,6}');
            if (!e.value) {
                e.setAttribute('placeholder', 'E-mail (пример: email@mail.ru)');
            } else {
                e.setAttribute('placeholder', 'E-mail');
            };
        });

    });


    const messForm2 = document.querySelector('.mess');

    messForm2.addEventListener('input', () => {
        messForm2.setAttribute('pattern', '^[А-Яа-яЁё -.?!)(,:;]+$');
        if (!messForm2.value) {
            messForm2.setAttribute('placeholder', 'Ваше сообщение (кириллица, пробелы, знаки препинания)');
        } else {
            messForm2.setAttribute('placeholder', 'Ваше сообщение');
        };
    });

    const form2Name = document.getElementById('form2-name');

    form2Name.addEventListener('input', () => {
        form2Name.setAttribute('pattern', '^[А-Яа-яЁё ]+$');
        if (!form2Name.value) {
            form2Name.setAttribute('placeholder', 'Ваше имя (RU/space)');
        } else {
            form2Name.setAttribute('placeholder', 'Ваше имя');
        };
    });

};

export default formValid;