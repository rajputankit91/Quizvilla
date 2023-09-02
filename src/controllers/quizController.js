import {QuizModel} from '../models/quizModel';
import {QuizView} from '../views/quizView';

export class Controller {
    constructor(){
        this.model = new QuizModel();
        this.view = new QuizView();
        // this.renderQuestion();
    }

    renderQuestion() {
        console.log(this.index);
        const question = this.model.getCurrentQuestion().question;
        console.log(question);
        this.view.bindNextQuestionButton();
        this.view.bindPreQuestionButton();
        this.view.bindSubmitBtn();
    }
}