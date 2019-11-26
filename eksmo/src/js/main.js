require('nodelist-foreach-polyfill');
window.addEventListener('DOMContentLoaded', function() {

  'use strict';

  let quizLeftFrame = document.querySelectorAll('.quiz-left__frame'),
      quizLeftCheck = document.querySelectorAll('.quiz-left__check'),
      quizLeftOk = document.querySelectorAll('.quiz-left__ok');

  let quizRightFrame = document.querySelectorAll('.quiz-right__frame'),
      quizRightCheck = document.querySelectorAll('.quiz-right__check'),
      quizRightOk = document.querySelectorAll('.quiz-right__ok');
  

  quizLeftFrame.forEach(function callback(currentValue, i) {

    quizLeftFrame[i].addEventListener('click', function(event) {
      let target = event.target;
      if (target && target.classList.contains('quiz-left__check')) {
        quizLeftFrame[i].style.borderColor ='#50d66c';
        quizLeftCheck[i].style.outlineColor ='#50d66c';
        quizLeftOk[i].style.display = 'block';
        quizLeftOk[i].classList.add('quiz_active');
      } else if (target && target.classList.contains('quiz_active')) {
        quizLeftOk[i].style.display = 'none';
        quizLeftFrame[i].style.borderColor ='#f3f3f3';
        quizLeftCheck[i].style.outlineColor ='#eeeeee';
      }
    });

  });

  quizRightFrame.forEach(function callback(currentValue, i) {

    quizRightFrame[i].addEventListener('click', function(event) {
      let target = event.target;
      if (target && target.classList.contains('quiz-right__check')) {
        quizRightFrame[i].style.borderColor ='#e13636';
        quizRightCheck[i].style.outlineColor ='#e13636';
        quizRightOk[i].style.display = 'block';
        quizRightOk[i].classList.add('quiz_active');
      } else if (target && target.classList.contains('quiz_active')) {
        quizRightOk[i].style.display = 'none';
        quizRightFrame[i].style.borderColor ='#f3f3f3';
        quizRightCheck[i].style.outlineColor ='#eeeeee';
      }
    });

  });

//---------------------------------------------------------------------------

  let quizInput = document.querySelectorAll('.quiz-input__test'),
      quizInputOk = document.querySelectorAll('.quiz-input__image'),
      quizInputText = document.querySelectorAll('.quiz-input__text');

  quizInput.forEach(function callback(currentValue, i) {

    quizInput[i].addEventListener('click', function(event) {
      let target = event.target;
      if (target && target.classList.contains('quiz-input__check')) {
        quizInput[i].style.backgroundColor = '#50d66c';
        quizInputText[i].style.color = '#ffffff';
        quizInputOk[i].style.display = 'block';
        quizInputOk[i].classList.add('quiz_active');
      } else if (target && target.classList.contains('quiz_active')) {
        quizInputOk[i].style.display = 'none';
        quizInput[i].style.backgroundColor = '#fcfcfc';
        quizInputText[i].style.color = '#9c9c9c';
      }
    });

  });

});