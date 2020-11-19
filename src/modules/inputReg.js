const inputReg = () => {

    const classBlock = document.querySelector('.calc-block');

    classBlock.addEventListener('click', (event) => {
        let target = event.target;

        target.addEventListener('input', () => {

            target.value = target.value.replace(/\D/g, '');

        });

    });

};

export default inputReg;