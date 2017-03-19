(function() {
    'use strict';

    angular.module('app.services', [])

    .factory('quiz', function Factory1() {

        var _quizItems = [

            {
                question: "AngularJS application expressions are pure JavaScript expressions.",
                choices: ["true", "false"],
                correctAnswer: 0,
                userAnswer: null
            },
            {
                question: "Which of the following is true about ng-controller directive?",
                choices: ["ng-controller directive tells AngularJS what controller to use with this view.", "AngularJS application mainly relies on controllers to control the flow of data in the application.", "A controller is a JavaScript object containing attributes/properties and functions.", "All of the above."],
                correctAnswer: 3,
                userAnswer: null
            },
            {
                question: " Each controller accepts $scope as a parameter which refers to the application/module that controller is to control.",
                choices: ["true", "false"],
                correctAnswer: 0,
                userAnswer: null
            }
        ];

        var score = 0;

        var service = {
            quizItems: _quizItems,
            checkAnswers: _checkAnswers,
            getFirstQuestion: _getFirstQuestion,
            score: score
        };

        return service;

        ////////////////
        function _checkAnswers(answers) {
            answers.forEach(countCorrect);
        }

        function countCorrect(item, index) {
            if (item.useranswer == _quizItems[index].correctAnswer) {
                score += 1;
            }
        };

        function _getFirstQuestion() {
            return _quizItems[1];
        }
    })

    .factory('users', function users() {
        var userList = [{
                "balance": "$3,689.68",
                "age": 30,
                "name": "Rivers Bernard",
                "gender": "male",
                "company": "COMBOT"
            },
            {
                "balance": "$2,813.27",
                "age": 36,
                "name": "Bettye Fields",
                "gender": "female",
                "company": "TERSANKI"
            },
            {
                "balance": "$3,274.75",
                "age": 37,
                "name": "Esther Rollins",
                "gender": "female",
                "company": "ZENTIX"
            },
            {
                "balance": "$2,948.31",
                "age": 30,
                "name": "Nichols Callahan",
                "gender": "male",
                "company": "NORALEX"
            },
            {
                "balance": "$3,482.16",
                "age": 39,
                "name": "Sally Donovan",
                "gender": "female",
                "company": "MANGELICA"
            },
            {
                "balance": "$1,272.53",
                "age": 40,
                "name": "Suarez Young",
                "gender": "male",
                "company": "OTHERSIDE"
            },
            {
                "balance": "$2,917.32",
                "age": 37,
                "name": "Pugh Norman",
                "gender": "male",
                "company": "COLAIRE"
            },
            {
                "balance": "$3,688.03",
                "age": 35,
                "name": "Michael Hammond",
                "gender": "female",
                "company": "MOLTONIC"
            },
            {
                "balance": "$1,151.20",
                "age": 23,
                "name": "Nikki Mckay",
                "gender": "female",
                "company": "OCTOCORE"
            },
            {
                "balance": "$1,453.11",
                "age": 25,
                "name": "Shelley Church",
                "gender": "female",
                "company": "FIREWAX"
            }
        ];

        function _getUsers() {
            return userList;
        }

        var service = {
            getUsers: _getUsers
        };

        return service;
    })

    .service('QuizService', function Service1() {       

        this.quizItems = [

            {
                question: "AngularJS application expressions are pure JavaScript expressions.",
                choices: ["true", "false"],
                correctAnswer: 0,
                userAnswer: null
            },
            {
                question: "Which of the following is true about ng-controller directive?",
                choices: ["ng-controller directive tells AngularJS what controller to use with this view.", "AngularJS application mainly relies on controllers to control the flow of data in the application.", "A controller is a JavaScript object containing attributes/properties and functions.", "All of the above."],
                correctAnswer: 3,
                userAnswer: null
            },
            {
                question: " Each controller accepts $scope as a parameter which refers to the application/module that controller is to control.",
                choices: ["true", "false"],
                correctAnswer: 0,
                userAnswer: null
            }
        ];
        
        this.getScore = getScore;
        this.checkAnswers = checkAnswers;

        ////////////////        
        var score = 0;

        function checkAnswers(answers) {
            answers.forEach(countCorrect);
        }

        function countCorrect(item, index) {            
            if (item.userAnswer == item.correctAnswer) {
                score += 1;
            }
        }

        function getScore(){
            return score;
        }
    })

    .service('ScoreBoardService', function Service2() {
        this.addScore = addScore;        
        this.getScores = function(){return scores;};
        var scores = [{
                "Name": "Papito Cologne",
                "Score":2
            },
            { 
                "Name": "Adlkajsd Bshdasd",
                "Score":1
            },
            { 
                "Name": "Cpoiujlk Dlkjh",
                "Score":4
            },
            { 
                "Name": "Ejtrtef Fgdihv",
                "Score":999
            },
            { 
                "Name": "Glasdun Helvtt",
                "Score":12371263
            }
            ];

        ////////////////

        function addScore(score) {
            scores.push(score);
        }
    });
})();