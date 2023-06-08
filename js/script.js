// массив с объектами, содержащими вопросы (1 объект - 1 вопрос) {13:00}
const DATA = [
    {
        question: 'Сколько основных планет в Солнечной Системе?',
        answers: [
            {
                id: '1',
                value: '7',
                correct: false,
            },
            {
                id: '2',
                value: '8',
                correct: true,
            },
            {
                id: '3',
                value: '9',
                correct: false,
            }
        ]
    },
    {
        question: 'Кто первым дал правильное объяснение обращения планет вокруг Солнца?',
        answers: [
            {
                id: '4',
                value: 'Галилео Галилей',
                correct: false,
            },
            {
                id: '5',
                value: 'Исаак Ньютон',
                correct: true,
            },
            {
                id: '6',
                value: 'Николай Коперник',
                correct: false,
            }
        ]
    },
    {
        question: 'Солнце - это:',
        answers: [
            {
                id: '7',
                value: 'Планета',
                correct: false,
            },
            {
                id: '8',
                value: 'Звезда',
                correct: true,
            },
            {
                id: '9',
                value: 'Спутник',
                correct: false,
            }
        ]
    },
    {
        question: 'Сколько спутников у Марса?',
        answers: [
            {
                id: '10',
                value: '1',
                correct: false,
            },
            {
                id: '11',
                value: '2',
                correct: true,
            },
            {
                id: '12',
                value: '3',
                correct: false,
            }
        ]
    },
    {
        question: 'Какая планета имеет наибольшее количество спутников?',
        answers: [
            {
                id: '13',
                value: 'Юпитер',
                correct: false,
            },
            {
                id: '14',
                value: 'Сатурн',
                correct: true,
            },
            {
                id: '15',
                value: 'Венера',
                correct: false,
            }
        ]
    },
]

let localResults = {
    //cюда будем сохранять ответ пользователя

};

const quiz = document.querySelector('#quiz');
const questions = document.querySelector('#questions');
const indicator = document.querySelector('#indicator');
const results = document.querySelector('#results');
const btnNext = document.querySelector('#next');
const btnRestart = document.querySelector('#restart');

const renderQuestions = (index) => { //20:45
    renderIndicatior(index + 1);
    
    questions.dataset.currentStep = index; //34:50

    //функция отображения вопроса с ответами (вопросы будем брать из массива DATA по index-у)
    const renderAnswers = () => {
        //функция отображает ответы, относящиеся к конкретному вопросу
        return DATA[index].answers.map((answer) => `
                <li>
                    <label class="">
                        <input class="answer-input" type="radio" name=${index} value=${answer.id}}>
                        ${answer.value} 
                    </label>
                </li>
            `
        )
        .join('') //соединяем каждый li через '' (иначе по умлочанию будет ',')
    }
    //здесь выводим вопросы (по одному)
    questions.innerHTML = `
        <div class="quiz-questions__item">
            <div class="quiz-questions__item--question"> ${DATA[index].question} </div>
            <ul class="quiz-questions__item--answers"> ${renderAnswers()}  </ul>
        </div>
    `;//24:45 оптимизация этого кода
}

const renderResults = () => { //39:35
    let content = ''; 

    const getAnswers = (questionIndex) => { //41:40
        return DATA[questionIndex].answers.map((answer) => {
            return `<li> ${answer.value} </li>`
        })      //43:05 УПРОЩЕНИЕ (избавляемся от return)
        .join('');
    };

    DATA.forEach((question, index) => { //39:50
        content += `
        <div class="quiz-results__item">
            <div class="quiz-results__item--question"> ${question.question} </div>
            <ul class="quiz-results__item--answers"> ${getAnswers(index)} </ul>
        </div>
        `;
    });
    results.innerHTML = content;
}

const renderIndicatior = (currentStep) => { 
    //currentStep - фун., кот. мы выводим в renderQuestions с index + 1, т.к. index нач. с нуля
    indicator.innerHTML = `${currentStep}/${DATA.length}`
}

//добавляем слушатели, которые будут реагировать на определённые события (16:45)
quiz.addEventListener('change', (event) => {
//логика ответа
    if (event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;  //31:30
        btnNext.disabled = false;
    }

});

renderQuestions(0);

quiz.addEventListener('click', (event) => {
//логика кнопок (вперёд и сначала)
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        
        if (DATA.length === nextQuestionIndex) {
            //переход к результатам
            questions.classList.add('question--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('indicator--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            renderResults();
        } else {
            // переход к следующему вопросу
            renderQuestions(nextQuestionIndex); //отображаем следующий вопрос
        }

        btnNext.disabled = true; //при переходе к следующему вопросу, кнопка должна быть выключена
    }

    if (event.target.classList.contains('btn-restart')) {
        localResults = {}; //cбрасываем всё, что человек отвечал ранее
        results.innerHTML = ''; //очищаем результаты при рестарте
        questions.classList.remove('question--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('indicator--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0); //переходим к рендору первого вопроса
    }
});

