import {Controller} from '../controllers/quizController';
import {QuizView} from '../views/quizView';
import {QuizModel} from '../models/quizModel'

export class HomeView {
    constructor() {
        this.quizModel = new QuizModel();
        this.render();
        this.quizView = new QuizView();
        // this.controller = new Controller();
        this.renderQuizlist();
        this.index = 0;
        this.renderBtn();
        this.allAnswer = [];
        this.right = 0;
        this.wrong = 0;
    }
    
    renderQuizlist(){
        this.quizModel.quizzes.forEach(quiz =>{
            document.querySelector('.quizDiv').innerHTML += `<li class = 'quizList'>${quiz.name}<button type = 'submit' class = 'startQuizbtn' id = '${quiz.id}'>Start Quiz</button></li></br>`;
        })
        let startQuizbtn = document.querySelectorAll('.startQuizbtn')
        console.log(startQuizbtn);

        startQuizbtn.forEach((item) =>{
            console.log(item);
            item.addEventListener('click',(event) =>{
                let welcomDiv = document.querySelector('.welcomeDiv');
                welcomDiv.style.display = 'none';

                let container = document.querySelector('#container');
                container.style.display = 'block';

                let quizId;
                this.quizModel.quizzes.forEach((item) =>{
                    quizId = item.id;
                    if(event.target.id === quizId ){
                        console.log(item);
                        this.renderQuestions(item);
                        this.bindNextQuestionButton(item);
                        this.bindPreQuestionButton(item);
                        console.log(app);
                    }
                })
            })
        })
    }

    renderQuestions(item){
        let currentQuestion = item.questions[this.index].question;
        console.log(currentQuestion);
        let currentOptions = item.questions[this.index].options;
        let app = document.querySelector('#app');
        app.innerHTML = '';
        app.innerHTML = `
            <h1>Quiz</h1>
            <h3>${currentQuestion}</h3>
            ${currentOptions.map(item =>{
                return `<label class='option'><input value = '${item}' name = 'input' type = 'radio'><span>${item}</span></label>`
            }).join('')}
        `;
    }

    renderBtn(){
        let buttonDiv = document.getElementById('wrapper');
        buttonDiv.classList.add('buttons');

        buttonDiv.innerHTML = `
        <button class='button' id = 'preQuestionBtn'>Previous Question</button>
        <button class='button' id = 'nextQuestionBtn'>Next Question</button>
        <button class='button' id = 'submitQuizBtn'>Submit Quiz</button>
        `;
    }

    bindNextQuestionButton(item) {
        console.log(item.questions);
        nextQuestionBtn.addEventListener('click', () =>{
            console.log('clicked');          
            this.selectedOption = document.querySelector('input:checked');

            if(this.selectedOption){
                item.questions[this.index].selectedOption = 'true';
                this.answer = this.selectedOption.value;

                this.allAnswer.push(this.answer);

                if(this.answer == item.questions[this.index].options[item.questions[this.index].ans]){
                    this.right++;
                } else {
                    this.wrong++;
                }

                this.index++;
                console.log(item.questions.length);
                
                if(this.index < item.questions.length ){
                    this.selectedOption.checked = false;
                    this.renderQuestions(item);
                } else {
                }

                if(this.index == item.questions.length){
                    let appDiv = document.getElementById('app');
                    appDiv.innerHTML = '';
                    appDiv.classList.add('confirmAppDiv');
                    let confermationDiv = document.createElement('div');
                    confermationDiv.classList.add('confirm');
                    confermationDiv.innerHTML = 'Do you want to submit the Quizz ?';

                    appDiv.append(confermationDiv);
                    let submitButton = document.getElementById('submitQuizBtn');
                    submitButton.style.display = 'inline-block';

                    let nextButton = document.getElementById('nextQuestionBtn');
                    nextButton.style.display = 'none';
                    console.log(submitButton,'================submit==============');
                }
                if(this.index > 0){
                    let previousButton = document.getElementById('preQuestionBtn');
                    previousButton.style.display = 'inline-block';
                }

            } else {
                alert('please select the option');
            }
        });
    }

    bindPreQuestionButton(item) {
        console.log('clicked');
        const previousBtn = document.querySelector('#preQuestionBtn')
        previousBtn.addEventListener('click',(selectedOption) =>{
            this.index--;
            this.renderQuestions(item);
            selectedOption = document.getElementsByName('input');
            console.log(selectedOption);
            for(let i = 0;i<selectedOption.length;i++){
                if(this.allAnswer.includes(selectedOption[i].defaultValue)){
                    selectedOption[i].checked = true;
                } else {
                    console.log('not checked');
                }
            }
            if(this.index == 0){
                let previousButton = document.getElementById('preQuestionBtn');
                previousButton.style.display = 'none';
            }
            if(this.index == item.questions.length-2){
                let nextButton = document.getElementById('nextQuestionBtn');
                nextButton.style.display = 'inline-block';

                let submitButton = document.getElementById('submitQuizBtn');
                submitButton.style.display = 'none';
            }
        })
    }


    render() {
        document.querySelector('#body').innerHTML += `
        <div class = 'welcomeDiv'>
            <div class = 'header'>
                <div>quiz<strong>maker</strong></div>
                <svg viewBox = '0 0 100 80' width = '30' style = 'fill:white' height = '35'>
                    <rect width = '100' height = '17'></rect>
                    <rect y = '30' width = '100' height = '17'></rect>
                    <rect y = '60' width = '100' height = '17'></rect>
                </svg>
            </div>
            <div class = 'subHeader'>
                <h2>Create an awesome quiz in minutes</h2>
                <p>Quiz Maker is the easiest way to make quizzes FREE</p>
                <button id="createQuestionBtn">Create Question</button>
            </div>

            <ul class = 'quizDiv'>
                
            </ul>

            <div id = 'formContainer'></div>
            <div class = questionDiv>
                <button id="createQuizBtn">Save Quiz</button>
            </div>
            </div>
            `;
        }

    bindStartQuizButton() {
        const startQuizBtn = document.getElementById('startQuizBtn');
        startQuizBtn.addEventListener('click', () => {
            let welcomDiv = document.querySelector('.welcomeDiv');
            welcomDiv.style.display = 'none';
            let container = document.querySelector('#container');
            container.style.display = 'inline-block';
        });
    }
}