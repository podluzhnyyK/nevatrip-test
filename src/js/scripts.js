/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const list = document.querySelectorAll('.offer-info__time');
const span = document.createElement('span');

span.className = 'offer-info__time-title offer-info__time-item--more';
span.innerHTML = 'eщё...';

for (const elem of list) {
    if (elem.children.length > 4) {
        elem.insertBefore(span, elem.children[3]);
    }
}

document.querySelector('.offer-info__time-item--more').onclick = function() {
    document.querySelector('.offer-info__time-item--more')
        .parentNode.classList.add('more-active');
    const node = document.querySelector('.offer-info__time-item--more');
    node.parentNode.removeChild(node);
};
