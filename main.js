import './style.css'
import{HomeView} from './src/views/quizHomeView';

const homeview = new HomeView();

let createQuizBtn = document.getElementById('createQuizBtn');
createQuizBtn.addEventListener('click',createQuizdata);

let creaeQuestionBtn = document.getElementById('creaeQuestionBtn');
creaeQuestionBtn.addEventListener('click',addQuestion)

function addQuestion(){
    let quesobj = {
        question : '',
        options : ['','','',''],
        correctAnswer : 0
    }
    renderQuestionForm(quesobj)
}

function renderQuestionForm(quesData){
    const questionForm = `<div class = 'ques-form' style = 'border:solid;'>
        <div class = 'question-input'>
            <div><label>Question</label></div>
            <input type="text" value='' placeholder="please enter a question" />
        </div>

        <div class="options">
            ${quesData.options.map(function(item,index){
                return `<div><label>Option ${index+1}</label></div><input type='text' value='' placeholder='Enter an option' />`
            }).join('')}
        </div>
    </div>`
    document.querySelector('#formContainer').innerHTML += questionForm;
}

function createQuizdata(){
    const questionElements = document.querySelectorAll('.ques-form');
    const data = Array.from(questionElements).map(function(item,index){
        var quesObj = {
            id:index
        };
        quesObj.question =  item.querySelector('.question-input input').value;

        const optionsElements = item.querySelectorAll('.options input');
        quesObj.options = Array.from(optionsElements).map(function(optionEle){
            return optionEle.value;
        })

        return quesObj;
    });   
    console.log(data);
}
// addQuestion();