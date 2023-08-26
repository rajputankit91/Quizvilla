import { QuizModel } from "./quizModel";

export class QuizView{
    constructor(){
        this.model = new QuizModel();
        this.index = 0;
        console.log(this.model.questions.length);
        this.question = this.model.getCurrentQuestion();
        this.render();
        this.allAnswer = [];
        this.nextQuestionBtn = document.getElementById('nextQuestionBtn');
        // console.log(this.question.options);

        this.selectedOption;
        this.renderBtn();
        // this.bindNextQuestionButton(this.nextQuestionBtn);

    }
    
    render(){
        let app = document.querySelector('#app');
        console.log(app);
        app.innerHTML = '';
        app.innerHTML = `
        <h1>Quiz</h1>
        <h3>${this.model.questions[this.index].question}</h3>
        ${this.model.questions[this.index].options.map(item =>{
            return `<label class='option'><input value = '${item}' name = 'input' type = 'radio'>${item}</input></label>`
        }).join('')}        
        `;

        
    }

    renderBtn(){
        let buttonDiv = document.getElementById('wrapper');
        buttonDiv.classList.add('buttons');
        console.log(buttonDiv);

        buttonDiv.innerHTML = `<button id = 'preQuestionBtn'>Previous Question</button>
                                <button id = 'nextQuestionBtn'>Next Question</button>
                                <button id = 'submitQuizBtn'>Submit Quiz</button>
                            `;
    }
    
    bindNextQuestionButton() {
        console.log(this.model);

        nextQuestionBtn.addEventListener('click', () =>{
            console.log('clicked');
            
            this.selectedOption = document.querySelector('input:checked');
            console.log(this.selectedOption);

            if(this.selectedOption){
                this.model.questions[this.index].selectedOption = 'true';
                this.answer = this.selectedOption.value;
                console.log(this.answer);

                this.allAnswer.push(this.answer);
                console.log(this.allAnswer);

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
                    console.log(this.index);
                } else {
                    console.log(this.index);
                }

            } else {
                alert('please select the option');
            }
        });
    }

    bindPreQuestionButton() {
        const previousBtn = document.querySelector('#preQuestionBtn')
        console.log(previousBtn);
        previousBtn.addEventListener('click',(selectedOption) =>{
            this.index--;
            this.render();
            let currentOptions = document.querySelectorAll('.option');
            for(let i = 0;i<currentOptions.length;i++){
                console.log(this.allAnswer);
                if(this.allAnswer.includes(currentOptions[i].innerText)){
                    console.log(currentOptions[i].innerText);

                    currentOptions[i].checked = true;
                    console.log(currentOptions[i]);
                } else {
                    console.log('not checked');
                }
            }
        })
    }

    // bindSubmitQuizButton
}