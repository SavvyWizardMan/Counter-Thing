const buttonAdd = document.querySelector('.add');
const buttonMinus = document.querySelector('.minus');
const spanText = document.querySelector('.text');
let num = Number(spanText.textContent);

buttonAdd.addEventListener('click', () => {
    num += 1;
    spanText.textContent = num;
});

buttonMinus.addEventListener('click', () => {
    num -= 1;
    spanText.textContent = num;
});