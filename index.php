<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Document</title>
</head>
<body>


    <div class="">
        Главы:
        <a href="">Вселенная - общая инфа</a>
        <a href="pages/sunSystem/sunSystem.php">Солнечная система - общая инфа</a> (Солнце, 8 планет), про Землю исп. 2 главу книги
        <a href="">Звёзды и Созвездия</a>
    </div>

    <div class="container">

    <?php require_once 'layout/header.php';?>
    
        <p>Очень трудно одним махом изобрести теорию, описывающую всю Вселенную. Сегодня ученые описывают Вселенную в терминах двух основных частных теорий —
            общей теории относительности и квантовой механики. Это величайшие достижения разума первой
            половины двадцатого столетия. Общая теория относительности описывает действие гравитации и
            крупномасштабную структуру Вселенной, то есть структуру на масштабах от нескольких сотен
            до 10^24 метров — размера наблюдаемой Вселенной. Квантовая механика, напротив, имеет
            дело с предельно малыми масштабами, порядка миллионной доли от миллионной доли сантиметра.
            Увы, но известно, что эти две теории несовместимы друг с другом: вместе они не могут
            быть правильны. Одной из главных задач сегодняшней физики является поиск новой теории — 
            квантовой теории гравитации, которая включит в себя обе
            нынешние теории. Пока еще мы не располагаем такой теорией, и, быть может, нам предстоит ещё
            долгий путь к ней...</p>

    </div>

    <div class="quiz" id="quiz">
        <div class="quiz-questions" id="questions">
        <!-- cюда будут вставлятся вопросы из JS -->
        </div>
        <div class="quiz-indicator" id="indicator"> <!-- колич. отвеч. вопросов / общее колич. вопросов -->
            1/10
        </div> 
        <div class="quiz-results" id="results">
            <div class="quiz-results__item">
                <div class="quiz-results__item--question">
                    Вопрос 1
                </div>
                <ul class="quiz-results__item--answers">
                    <li>
                        Ответ 1
                    </li>
                    <li>
                        Ответ 2
                    </li>
                </ul>
            </div>
        </div>
        <div class="quiz-controls"> <!-- кнопки -->
            <button class="btn-next" id="next" disabled>Следующий вопрос</button>
            <button class="btn-restart" id="restart">Начать сначала</button>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>