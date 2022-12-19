const subButton = document.getElementById('submit-button');

subButton.addEventListener('mouseover', (event) => {
    subButton.classList.add('shadow-pop-bl');
});
subButton.addEventListener('mouseout', (event) => {
    subButton.classList.remove('shadow-pop-bl');
})

const inputBox = document.getElementsByClassName('input-box');
const textBox = document.getElementById('textBox');

inputBox.addEventListener('click', (event) => {
    console.log("activated");
    inputBox.classList.add('shadow-pop-bl');
})

textBox.addEventListener('click', (event) => {
    textBox.classList.add('shadow-pop-bl');
});