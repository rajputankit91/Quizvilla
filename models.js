class QuizModel{
    constructor(){
        this.quizData = [
            {
                'question': 'Q1 : Which of the following keywords is used to define a variable in Javascript?',
                'id': 'ques1',
                'options':[
                    'var',
                    'let',
                    'Both A and B',
                    'None of the above',
                ],
                'ans': 1,
                'required':'true',
            },
            {
                'question': 'Q2 : Which of the following methods is used to access HTML elements using Javascript?',
                'id': 'ques2',
                'options':[
                    'getElementbyId()',
                    'getElementByClassName()',
                    'Both A and B',
                    'None of the above',
                ],
                'ans': 1,
                'required':'true',
            },
            {
                'question': 'Q3 : Upon encountering empty statements, what does the Javascript Interpreter do?',
                'id': 'ques3',
                'options':[
                    'Throws an error',
                    'Ignores the statemens',
                    'Gives a warning',
                    'None of the above',
                ],
                'ans': 2,
                'required':'true',
            },
            {
                'question': 'Q4 : Which of the following methods can be used to display data in some form using Javascript?',
                'id': 'ques4',
                'options':[
                    'document.write()',
                    'console.log()',
                    'window.alert()',
                    'All of the above',
                ],
                'ans': 3,
                'required':'true',
            }
        ]
    }
}

export {QuizModel};