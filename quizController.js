import {QuizModel} from './quizModel';
import {QuizView} from './quizView';

export class Controller {
    constructor(){
        this.model = new QuizModel();
        this.view = new QuizView();
        this.renderQuestion();
        // this.view.renderBtn();
    }

    renderQuestion() {
        console.log(this.index);
        const question = this.model.getCurrentQuestion().question;
        console.log(question);
        // this.view.render();
        this.view.bindNextQuestionButton();
        this.view.bindPreQuestionButton();
    }
   
    
}