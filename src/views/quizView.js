import { QuizModel } from "../models/quizModel";

export class QuizView{
    constructor(){
        this.model = new QuizModel();
        this.index = 0;
        this.question = this.model.getCurrentQuestion();
        this.render();
        this.allAnswer = [];
        this.nextQuestionBtn = document.getElementById('nextQuestionBtn');
        this.selectedOption;
        this.renderBtn();
        this.right = 0;
        this.wrong = 0;
        this.total = this.model.questions.length;
    }
    
    render(){
        let app = document.querySelector('#app');
        console.log(app);
        app.innerHTML = '';
        app.innerHTML = `
        <h1>Quiz</h1>
        <h3>${this.model.questions[this.index].question}</h3>
        ${this.model.questions[this.index].options.map(item =>{
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
    
    bindNextQuestionButton() {
        nextQuestionBtn.addEventListener('click', () =>{            
            this.selectedOption = document.querySelector('input:checked');

            if(this.selectedOption){
                this.model.questions[this.index].selectedOption = 'true';
                this.answer = this.selectedOption.value;

                this.allAnswer.push(this.answer);

                if(this.answer == this.model.questions[this.index].options[this.model.questions[this.index].ans]){
                    this.right++;
                } else {
                    this.wrong++;
                }

                this.index++;
                console.log(this.index);
                
                if(this.index < this.model.questions.length ){
                    this.selectedOption.checked = false;
                    console.log(this.model.questions.length);
                    this.render();
                } else {
                }

                if(this.index == this.model.questions.length){
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

    bindPreQuestionButton() {
        const previousBtn = document.querySelector('#preQuestionBtn')
        previousBtn.addEventListener('click',(selectedOption) =>{
            this.index--;
            this.render();
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
            if(this.index == this.model.questions.length-2){
                let nextButton = document.getElementById('nextQuestionBtn');
                nextButton.style.display = 'inline-block';

                let submitButton = document.getElementById('submitQuizBtn');
                submitButton.style.display = 'none';
            }
        })
    }
    // bindSubmitQuizButton

    bindSubmitBtn(){
        submitQuizBtn.addEventListener('click',() =>{
            let result = document.getElementById('body');
            result.innerHTML = '';
            if(this.right == this.total){
                let img = `<img src="https://t4.ftcdn.net/jpg/04/22/21/39/360_F_422213944_v3LI3VIVCr3lGCxkYojkw7P63kpMkgNW.jpg" alt="Girl in a jacket" width="200" height="200">`
                console.log(img);
                result.innerHTML = `${img}`;
            } else if (this.right == this.total/2){

            } else if (this.right == this.total/3){

            } else {
                
            }

            result.innerHTML += `
            <h3>Thank You for playing quiz!</h3>
            <h2>${this.right} / ${this.total} are correct</h2>
            <button class = 'playAgain'>Play again</button>
            `;
            result.classList.add('result');

            let playagainBtn = document.querySelector('.playAgain');
            playagainBtn.addEventListener('click',() =>{
                alert('Please refresh the page');
            })           
        })
    }
}