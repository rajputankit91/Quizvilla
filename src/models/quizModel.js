export class QuizModel {
    constructor(){
        this.quizzes= [
            {
                id : 'cssQuiz',
                name :'CSS Quiz',
                questions:[
                    {
                        'question': 'Q1 : The CSS property used to control the element’s font-size is ?',
                        'id': 'ques1',
                        'options':[
                            'font-size',
                            'text-size',
                            'text-style',
                            'None',
                        ],
                        'ans': 1,
                    },
                    {
                        'question': 'Q2 : The HTML attribute used to define the internal stylesheet is ?',
                        'id': 'ques2',
                        'options':[
                            'style',
                            'styles',
                            '<link>',
                            '<script>',
                        ],
                        'ans': 1,
                    },
                    {
                        'question': 'Q3 : Which of the following is the correct syntax to display the hyperlinks without any underline ?',
                        'id': 'ques3',
                        'options':[
                            'a {decoration : no-underline;}',
                            'a {text-decoration : underline;}',
                            'a {text-decoration : none;}',
                            'None',
                        ],
                        'ans': 3,
                    }
                ],
            },
            {
                id : 'htmlQuiz',
                name :'HTML Quiz',
                questions:[
                    {
                        'question': 'Q1 : What do you understand by HTML?',
                        'id': 'ques1',
                        'options':[
                            'HTML describes the structure of a webpage',
                            'HTML is the standard markup language mainly used to create web pages',
                            'HTML consists of a set of elements that helps the browser how to view the content',
                            'All of the above',
                        ],
                        'ans': 1,
                    },
                    {
                        'question': 'Q2 : Who is the father of HTML?',
                        'id': 'ques2',
                        'options':[
                            'Rasmus Lerdorf',
                            'Tim Berners-Lee',
                            'Brendan Eich',
                            'Sergey Brin',
                        ],
                        'ans': 1,
                    },
                    {
                        'question': 'Q3 :  There are ___ levels of heading in HTML?',
                        'id': 'ques3',
                        'options':[
                            'Three',
                            'Four',
                            'Five',
                            'Six',
                        ],
                        'ans': 4,
                    },
                ],
            },
        ]
        this.currentQuestionIndex = 0;
    }

    getCurrentQuestion() {
        return this.quizzes[this.currentQuestionIndex].questions;
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }
}

const quizzes = [
    {
        id:1,
        name:'html Quiz',
        questions:[
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
    },
    {},
    {},
]