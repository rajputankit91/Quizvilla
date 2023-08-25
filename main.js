import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import {quizData1} from './data.js'

(function(){
  let index = 0;
  let total = quizData1.length;
  let right = 0;
  let wrong =0;
  let wrapper = document.getElementById('wrapper');
  let selectedOption;
  let AllAnswer = [];

  function createStartQuiz(){
    let app = document.querySelector('#app');

    let quizHeading = document.createElement('h2');
    quizHeading.id = 'quizheading';
    quizHeading.innerHTML = 'QUIZ';
  
    let startQuiz = document.createElement('button');
    startQuiz.innerHTML = 'Start Quiz';
    startQuiz.id = 'start';
    startQuiz.addEventListener('click',createQuestions);
    app.append(quizHeading,startQuiz);
  }

  // createStartQuiz();  
  function createQuizContainer(){
    const container = document.createElement('div');
    container.id = 'container';
    createQuestions(container);

    // create button div
    const btnDiv = document.createElement('div');
    btnDiv.id = 'btndiv';

    // create pre btn
    let preBtn = document.createElement('button');
    preBtn.id = 'previous';
    preBtn.innerHTML = 'Pre Ques'
    preBtn.addEventListener('click',previousQuestion);

    // create next btn
    let nextBtn = document.createElement('button');
    nextBtn.className = 'next';
    nextBtn.innerHTML = 'Next Ques';

    nextBtn.addEventListener('click', () =>{
      nextQuestion(container);
    });

    // create submitBtn
    let submitBtn = document.createElement('button');
    submitBtn.id = 'submit';
    submitBtn.type = 'submit';
    submitBtn.innerHTML = 'Submit';  
    submitBtn.addEventListener('click',displayResult);
    btnDiv.append(preBtn,nextBtn,submitBtn);
    wrapper.append(container,btnDiv);
  };
  
  createQuizContainer();

  // previous ques
  function previousQuestion(selectedOption){
    index--;
    createQuestions(container);
    selectedOption = document.getElementsByName('quiz');
    console.log(selectedOption);
    for(let i = 0;i<selectedOption.length;i++){
      console.log(AllAnswer);
      if(AllAnswer.includes(selectedOption[i].defaultValue)){
        selectedOption[i].checked = true;
      } else {
        console.log('not checked');
      }
    }
  }

  // 
  function nextQuestion(container){
    selectedOption = document.querySelector('input:checked');
    console.log(selectedOption);
    console.log(quizData1[index]);
    if(selectedOption){
      quizData1[index].selectedOption = 'true';
      console.log(quizData1[index]);
      const answer = selectedOption.value;
      AllAnswer.push(answer);
      console.log(AllAnswer);
      if(answer == quizData1[index].options[quizData1[index].ans]){
        right++;
      } else {
        wrong++;
      }
      index++;
      selectedOption.checked = false;
      if(index < quizData1.length ){
        let preBtn = document.getElementById('previous');
        preBtn.style.display = 'inline-block';
        createQuestions(container);
      } else {
        console.log(index);
        let submitBtn = document.getElementById('submit');
        submitBtn.style.display = 'inline-block';
      }

    } else {
      alert('please select the option');
    }
  }

  function createQuestions(container){
    let app = document.querySelector('#app');
    app.innerHTML = '';

    let data = quizData1[index];
    // console.log(data);

    let innerDiv = document.createElement('div');
    innerDiv.id = 'innerdiv';
    innerDiv.innerHTML = data.question;
  
    let optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    const allOptions = [...data.options];
    
    allOptions.forEach(item =>{
      const option = document.createElement('label');
      option.className = 'option';
      
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = item;
      radio.className = 'radio';
      
      const optionText = document.createTextNode(item);
      
      option.append(radio,optionText);
      optionsDiv.append(option);
      // console.log(optionsDiv);
    })
    container.innerHTML = '';
    container.append(innerDiv,optionsDiv);
  }

  function displayResult(){
    let result = document.getElementById('body');
    result.innerHTML = `
    <h3>Thank You for playing quiz!</h3>
    <h2>${right} / ${total} are correct</h2>
    `;
    result.classList.add('result');    
  }

})();