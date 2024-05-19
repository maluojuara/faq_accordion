const buttonShowAnswer = document.querySelector('.icon-plus');

buttonShowAnswer.addEventListener('click', () => {
    changeButtonImg(buttonShowAnswer);
})



function changeButtonImg (buttonImg) {
   buttonImg.src = buttonImg.src.endsWith('icon-plus.svg') ? 'icon-minus.svg' : 'icon-plus.svg';
}