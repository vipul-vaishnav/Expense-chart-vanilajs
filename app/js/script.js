'use strict';

const parent = document.querySelector('.weeks');

const createBar = (data, max) => {
  const el = document.createElement('div');
  el.classList.add('week-day');
  el.innerHTML = `
      <div class="week-bar">
          <div class="week-bar-visible" style="height: ${data.amount}%; ${
    data.amount === max ? `background-color: #76b5bc` : ''
  }"></div>
          <div class="week-bar-number" style="bottom: calc(${
            data.amount
          }% + 1.5rem)">$${data.amount}</div>
      </div>
      <div class="week-name">${data.day}</div>
    `;
  parent.appendChild(el);
};

const getData = async () => {
  const res = await fetch('./../../data.json');
  const data = await res.json();

  let max = 0;
  data.forEach((item) => {
    if (item.amount > max) {
      max = item.amount;
    }
  });

  data.forEach((el) => {
    createBar(el, max);
  });
};

getData();
