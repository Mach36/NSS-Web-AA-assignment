const display = document.querySelector('#count-display');
const plus = document.querySelector('.add');
const minus = document.querySelector('.lower');

display.innerHTML = '__';

let num = 0;

function update(){
    display.innerHTML = num;
};

plus.addEventListener('click', (e) =>{
    num++;
    update();
});
minus.addEventListener('click', (e) =>{
    num--;
    update();
});

// type reset() in console to get 0 in count-display
function reset(){
    display.innerHTML = '__';
};
