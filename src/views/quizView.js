import { QuizModel } from "../models/quizModel";

export class QuizView{
    constructor(){
        this.model = new QuizModel();
        this.index = 0;
        this.question = this.model.getCurrentQuestion();
        // this.render();
        this.allAnswer = [];
        this.nextQuestionBtn = document.getElementById('nextQuestionBtn');
        this.selectedOption;
        // this.renderBtn();
        this.right = 0;
        this.wrong = 0;
        this.total = this.model.quizzes.length;
        // console.log(this.total);
    }
    
    // render(){
    //     let currentQuestion = this.model.quizzes[this.index].questions[this.index].question;
    //     let currentOptions = this.model.quizzes[this.index].questions[this.index].options;
    //     // console.log(options);
    //     let app = document.querySelector('#app');
    //     // console.log(app);
    //     app.innerHTML = '';
    //     app.innerHTML = `
    //     <h1>Quiz</h1>
    //     <h3>${currentQuestion}</h3>
    //     ${currentOptions.map(item =>{
    //         return `<label class='option'><input value = '${item}' name = 'input' type = 'radio'><span>${item}</span></label>`
    //     }).join('')}
    //     `;
    // }

    // renderBtn(){
    //     let buttonDiv = document.getElementById('wrapper');
    //     buttonDiv.classList.add('buttons');

    //     buttonDiv.innerHTML = `
    //     <button class='button' id = 'preQuestionBtn'>Previous Question</button>
    //     <button class='button' id = 'nextQuestionBtn'>Next Question</button>
    //     <button class='button' id = 'submitQuizBtn'>Submit Quiz</button>
    //     `;
    // }

    // bindPreQuestionButton() {
    //     const previousBtn = document.querySelector('#preQuestionBtn')
    //     previousBtn.addEventListener('click',(selectedOption) =>{
    //         this.index--;
    //         this.render();
    //         selectedOption = document.getElementsByName('input');
    //         console.log(selectedOption);
    //         for(let i = 0;i<selectedOption.length;i++){
    //             if(this.allAnswer.includes(selectedOption[i].defaultValue)){
    //                 selectedOption[i].checked = true;
    //             } else {
    //                 console.log('not checked');
    //             }
    //         }
    //         if(this.index == 0){
    //             let previousButton = document.getElementById('preQuestionBtn');
    //             previousButton.style.display = 'none';
    //         }
    //         if(this.index == this.model.questions.length-2){
    //             let nextButton = document.getElementById('nextQuestionBtn');
    //             nextButton.style.display = 'inline-block';

    //             let submitButton = document.getElementById('submitQuizBtn');
    //             submitButton.style.display = 'none';
    //         }
    //     })
    // }
//     // bindSubmitQuizButton

//     bindSubmitBtn(){
//         submitQuizBtn.addEventListener('click',() =>{
//             let result = document.getElementById('body');
//             result.innerHTML = '';
//             if(this.right == this.total){
//                 let img = `<img src="https://t4.ftcdn.net/jpg/04/22/21/39/360_F_422213944_v3LI3VIVCr3lGCxkYojkw7P63kpMkgNW.jpg" alt="Girl in a jacket" width="200" height="200">`
//                 console.log(img);
//                 result.innerHTML = `${img}`;
//             } else if (this.right == this.total/2){

//             } else if (this.right == this.total/3){

//             } else {
                
//             }

//             result.innerHTML += `
//             <h3>Thank You for playing quiz!</h3>
//             <h2>${this.right} / ${this.total} are correct</h2>
//             <button class = 'playAgain'>Play again</button>
//             `;
//             result.classList.add('result');

//             let playagainBtn = document.querySelector('.playAgain');
//             playagainBtn.addEventListener('click',() =>{
//                 alert('Please refresh the page');
//             })           
//         })
//     }
}