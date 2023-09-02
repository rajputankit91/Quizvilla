import {Controller} from '../controllers/quizController';

import {QuizView} from '../views/quizView';
export class HomeView {
    constructor() {
        this.render();
        this.quizView = new QuizView();
        console.log('=========');
        console.log(this.quizView);
        this.controller = new Controller();
        console.log('===========',this.controller);
    }

    render() {
        document.querySelector('#body').innerHTML += `
        <div class = 'welcomeDiv'>
            <h1>Welcome to the Quiz App</h1>
            <button id="startQuizBtn">Start Quiz</button>
        </div>
        `;
        this.bindStartQuizButton();
    }

    bindStartQuizButton() {
        const startQuizBtn = document.getElementById('startQuizBtn');
        console.log(startQuizBtn);
        startQuizBtn.addEventListener('click', () => {
            let welcomDiv = document.querySelector('.welcomeDiv');
            console.log(welcomDiv);
            welcomDiv.style.display = 'none';
            console.log(body);
            console.log('clicked');
            let container = document.querySelector('#container');
            container.style.display = 'inline-block';

            this.controller.renderQuestion();
        });
    }
}