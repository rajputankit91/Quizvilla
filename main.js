import './style.css'
import{HomeView} from './src/views/quizHomeView';
import {QuizModel} from './src/models/quizModel';
import {Controller} from './src/controllers/quizController';
// const controller = new Controller();

class Main{
    constructor(){
        this.homeview = new HomeView();
        this.quizModel = new QuizModel();
        this.createQuizBtn();
        this.renderButtonDiv();
    }

    createQuizBtn(){
        let createQuestionBtn = document.getElementById('createQuestionBtn');
        createQuestionBtn.addEventListener('click',() =>{
            this.addQuestion();            
        });
    }

    addQuestion(){
        let quesobj = {
            id : '',    
            name : '',
            question :[
                {
                    'question' : '',
                    'id' : '',
                    'options' : ['','','',''],
                    'correctAnswer' : 0
                }
            ],
        }
        this.renderQuestionForm(quesobj);
        console.log(this.quizModel.quizzes);
        // this.renderButtonDiv();
    }

    renderQuestionForm(quesData){
        let listQuiz = document.querySelector('.quizDiv');
            listQuiz.style.display = 'none';
            const questionForm =
            `<div class = 'ques-form' style = 'border:solid;'>
                <div class = 'question-name'>
                    <div><label>Name</label> <input type="text" value='' placeholder="please enter a Quiz name" /></div>
                </div>
        
                <div class = 'question-input'>
                    <div><label>Question</label> <input type="text" value='' placeholder="please enter a question" /></div> 
                </div>
        
                <div class="options">
                    ${quesData.question[0].options.map(function(item,index){
                        return `<div><label>Option ${index+1}</label><input type='text' value='' placeholder='Enter an option' /></div>`
                    }).join('')}
                </div>
            </div>`
        let div = document.querySelector('.questionDiv');
        div.style.display = 'block';
        document.querySelector('#formContainer').innerHTML += questionForm; 
    }

    renderButtonDiv(){
        document.querySelector('.questionDiv').innerHTML = `<div class = 'buttonDiv'><button class = 'exitQuiz'>Exit Quiz</button><button class = 'saveQuiz'>Save Quiz</button></div>`
        this.exitQuestionForm();
        this.saveQuiz();
    }

    saveQuiz(){
        let saveQuizBtn = document.querySelector('.saveQuiz');
        saveQuizBtn.addEventListener('click',() =>{
            this.exit();
            let quizData = this.quizModel.quizzes;
            console.log(quizData);
            // 
            const questionElements = document.querySelectorAll('.ques-form');
            console.log(questionElements);
            const data = Array.from(questionElements).map(function(item,index){
                var quesObj = {
                    id:index
                };
                quesObj.id = '';

                quesObj.name = item.querySelector('.question-name input').value;
                quesObj.question =  item.querySelector('.question-input input').value;

                const optionsElements = item.querySelectorAll('.options input');
                quesObj.options = Array.from(optionsElements).map(function(optionEle){
                    return optionEle.value;
                });
                return quesObj;
            });   
            console.log(data);
            quizData.push(data);
            console.log(quizData);
        })
    }

    exitQuestionForm(){
        let exitQuizBtn = document.querySelector('.exitQuiz');
        exitQuizBtn.addEventListener('click',() =>{
            this.exit();
        })
    }

    exit(){
        let formContainer = document.querySelector('.ques-form');
        console.log(formContainer);
        formContainer.parentNode.removeChild(formContainer);

        let quizList = document.querySelector('.quizDiv');
        quizList.style.display = 'block';
        document.querySelector('.questionDiv').style.display = 'none';
    }
}

const main = new Main();

// const homeview = new HomeView();

// console.log(quizModel.quizzes);
// const quizModel = new QuizModel();

// let createQuizBtn = document.getElementById('createQuizBtn');``
// createQuizBtn.addEventListener('click',createQuizdata);

// let creaeQuestionBtn = document.getElementById('createQuestionBtn');
// creaeQuestionBtn.addEventListener('click',addQuestion)

// let saveQuizBtn = document.getElementById('createQuizBtn');
// saveQuizBtn.addEventListener('click',saveQuiz);

// function saveQuiz(){
//     document.querySelector('.quizDiv').style.display = 'block';
//     document.querySelector('#formContainer').style.display = 'none';
//     homeview.renderQuizlist();
//     console.log('clicked');
// }
// =====================================================
// function addQuestion(){
//     let quesobj = {
//         id : '',    
//         name : '',
//         question :[
//             {
//                 'question' : '',
//                 'id' : '',
//                 'options' : ['','','',''],
//                 'correctAnswer' : 0
//             }
//         ],
//     }
//     renderQuestionForm(quesobj);
//     let formContainer = document.querySelector('#formContainer');
//     // formContainer.style.display = 'inline-block';
//     let saveQuizDiv = document.querySelector('.questionDiv');
//     console.log(saveQuizDiv);
//     saveQuizDiv.style.display = 'block';
//     console.log(quizModel.quizzes);
//     quizModel.quizzes.push(quesobj);
// }
// ....................................................................
// ...................................................................
// function renderQuestionForm(quesData){
//     let listQuiz = document.querySelector('.quizDiv');
//     listQuiz.style.display = 'none';
//     console.log(listQuiz);
//     const questionForm =
//     `<div class = 'ques-form' style = 'border:solid;'>
//         <div class = 'question-name'>
//         <div><label>Name</label> <input type="text" value='' placeholder="please enter a Quiz name" /></div>
//         </div>

//         <div class = 'question-input'>
//             <div><label>Question</label> <input type="text" value='' placeholder="please enter a question" /></div>
            
//         </div>

//         <div class="options">
//             ${quesData.question[0].options.map(function(item,index){
//                 return `<div><label>Option ${index+1}</label><input type='text' value='' placeholder='Enter an option' /></div>`
//             }).join('')}
//         </div>
//     </div>`
//     document.querySelector('#formContainer').innerHTML += questionForm;
// }

// function createQuizdata(){
    // const questionElements = document.querySelectorAll('.ques-form');
    // const data = Array.from(questionElements).map(function(item,index){
    //     var quesObj = {
    //         id:index
    //     };

    //     quesObj.id = '';

    //     quesObj.name = item.querySelector('.question-name input').value;
    //     quesObj.question =  item.querySelector('.question-input input').value;

    //     const optionsElements = item.querySelectorAll('.options input');
    //     quesObj.options = Array.from(optionsElements).map(function(optionEle){
    //         return optionEle.value;
    //     })

    //     return quesObj;
    // });   
    // console.log(data);
// }