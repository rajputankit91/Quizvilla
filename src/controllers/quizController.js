import {QuizModel} from '../models/quizModel';
import {QuizView} from '../views/quizView';
import {HomeView} from '../views/quizHomeView';

export class Controller {
    constructor(){
        this.model = new QuizModel();
        this.view = new QuizView();
        this.renderQuestion();
        this.homeView = new HomeView();
        console.log(this.homeView);
    }

    renderQuestion() {
        // const question = this.model.getCurrentQuestion().question;

        this.homeView.bindNextQuestionButton();
        this.view.bindPreQuestionButton();
        // this.view.bindSubmitBtn();ss
    }
}