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

        if (typeValue && squareValue) {
            total = Math.round(price * typeValue * squareValue * countValue * dayValue);
        };

        totalValue.textContent = total;

    };

    classBlock.addEventListener('change', (event) => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {

            countSum(); //функция считает итоговую цену
        };

    });

};

export default calc;