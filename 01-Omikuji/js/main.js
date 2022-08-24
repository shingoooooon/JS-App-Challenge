const btn = document.querySelector('#btn');
const omikujiArray = ['大吉','中吉','末吉','小吉','凶','大凶'];

function omikuji() {
  const result = omikujiArray[Math.floor(Math.random()*omikujiArray.length)];
  btn.textContent = result;
}

btn.addEventListener('click', omikuji);
