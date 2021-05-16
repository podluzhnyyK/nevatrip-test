/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const list = document.querySelectorAll('.offer-info__time');
const li = document.createElement('li');
const span = document.createElement('span');

li.className = 'offer-info__time-item offer-info__time-item--more';
span.className = 'offer-info__time-title';
span.innerHTML = 'eщё...';
li.append(span);

for (const elem of list) {
    if (elem.children.length > 4) {
        elem.insertBefore(li, elem.children[3]);
    }
}

document.querySelector('.offer-info__time-item--more').onclick = function() {
    document.querySelector('.offer-info__time-item--more')
        .parentNode.classList.toggle('more-active');
};
