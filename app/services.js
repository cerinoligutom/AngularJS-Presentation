(function() {
    'use strict';

    angular.module('app.services', [])

    .factory('quiz', function Factory1() {

        var _quizItems = [
            
            {
                question: "AngularJS application expressions are pure JavaScript expressions.",
                choices: ["true", "false"],
                answer: 0
            },
            {
                question: "Which of the following is true about ng-controller directive?",
                choices: ["ng-controller directive tells AngularJS what controller to use with this view."
                        , "AngularJS application mainly relies on controllers to control the flow of data in the application."
                        , "A controller is a JavaScript object containing attributes/properties and functions."
                        , "All of the above."],
                answer: 3
            },
            {
                question: " Each controller accepts $scope as a parameter which refers to the application/module that controller is to control.",
                choices: ["true", "false"],
                answer: 0
            }
        ];

        var score = 0;

        var service = {
            quizItems : _quizItems,
            checkAnswers: _checkAnswers
        };

        return service;

        ////////////////
        function _checkAnswers(answers) {
            
            answers.forEach(countCorrect);

        };
        var countCorrect = function(item, index){
            if(item == _quizItems[index].answer)
            {
                score += 1;
            }
        };
    })

    .factory('Factory2', function Factory2() {
        var service = {
            exposedFn: exposedFn
        };

        return service;

        ////////////////
        function exposedFn() {}
    })

    .service('Service1', function Service1() {
        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() {}
    })

    .service('Service2', function Service2(dependency1) {
        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() {}
    });
})();