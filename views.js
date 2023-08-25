class HeadingView {
    constructor(controller) {
        this.controller = controller;
        this.heading = document.getElementById("heading");
        this.heading.innerText = controller.modelHeading;
        this.heading.addEventListener("click", controller);
    }
}
export { HeadingView };

// 
class RenderQuestion{
    constructor(data){
        this.data = data;
        this.questionDiv = document.createElement('div');
        this.questionDiv.id = 'questionDiv';

        this.buttonDiv = document.createElement('div');
        this.buttonDiv.id = 'buttondiv';

        this.wrapper = document.getElementById('wrapper');
        this.app = document.querySelector('#app');
        this.index = 0;
        this.allOptions = [...this.data[this.index].options];

        this.questionDiv.append(this.wrapper,this.app);
        document.body.append(this.questionDiv,this.buttonDiv);
    }

    init(){
        this.createQuestions(this.data);
        this.createOptions();
        this.createPreviousBtn();
        this.createNextBtn();
        this.createSubmitBtn()
    }
    
    createQuestions(data){
        this.app.innerHTML = `<div>${data[this.index].question}</div>`
    }

    createOptions(data){
        this.allOptions.forEach(item =>{
            this.option = document.createElement('label');
            this.option.className = 'option';
        
            this.radio = document.createElement('input');
            this.radio.type = 'radio';
            this.radio.name = 'quiz';
            this.radio.value = item;
            this.radio.className = 'radio';
            this.optionText = document.createTextNode(item);
            this.option.append(this.radio,this.optionText);
            console.log(this.option);

            this.wrapper.append(this.option);
        })
    }

    createPreviousBtn(){
        this.previousBtn = document.createElement('button');
        this.previousBtn.innerHTML = 'previous';
        this.previousBtn.id = 'previousbtn';
        this.buttonDiv.append(this.previousBtn);
    }

    createNextBtn(){
        this.nextbtn = document.createElement('button');
        this.nextbtn.innerHTML = 'next';
        this.nextbtn.id = 'nextbtn';
        this.buttonDiv.append(this.nextbtn);
    }

    createSubmitBtn(){
        this.submitBtn = document.createElement('button');
        this.submitBtn.innerHTML = 'submit';
        this.submitBtn.id = 'submitbtn';
        this.buttonDiv.append(this.submitBtn);
    }
}

const renderQuiz = new RenderQuestion(quizData1)
renderQuiz.init();

export {renderQuiz};