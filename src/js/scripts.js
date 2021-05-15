/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const btns = document.getElementsByClassName('offer-info__time-item--more');
const par = document.getElementsByClassName('offer-info__time');
btns.onclick = function() {
    par.classList.add('more-active');
    console.log('4');
};

