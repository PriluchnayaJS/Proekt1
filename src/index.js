'use strict';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import inputReg from './modules/inputReg';
import classRow from './modules/classRow';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import formValid from './modules/formValid';

//Timer
setInterval(countTimer, 0, '24 november 2020');
//работа с меню
toggleMenu();
//popup окно
togglePopup();
//табы
tabs();
//слайдер
slider();
//input, регулярные выражения, делегирование
inputReg();
//наша команда - dataset
classRow();
//калькулятор
calc(100);
//sends-ajax-forms-fetch
sendForm();
//validator phone, name, message
formValid();