(function() {
    'use strict';

    angular.module('app.controllers', [])

    .controller('HomeController', function HomeController($scope) {
        // To be populated with Module7Controller
    })

    .controller('IntroductionController', function IntroductionController($scope) {
        $scope.title = "Introduction";

        $scope.presenters = ['Cerino O. Ligutom III', 'Alexandros Pappas'];
        $scope.companyName = "Miller Development Solutions Inc.";
        $scope.agenda = "Demo for AngularJS";
    })

    .controller('Module1Controller', function Module1Controller($scope) {
        $scope.title = "Data Binding by using the $scope Service";

        $scope.qty = 3;
        $scope.cost = 3;
        $scope.pay = function() {
            alert('Thanks!');
        }
    })

    .controller('Module2Controller', function Module2Controller() {
        var vm = this;
        vm.title = "Data Binding by using 'Controller As' and 'vm' Variable";

        vm.qty = 4;
        vm.cost = 4;
        vm.pay = function() {
            alert('Thanks!');
        }
    })

    .controller('Module3Controller', function Module3Controller($scope) {
        $scope.title = "Controllers + Views + Interpolation";

        $scope.customSpice = 'wasabi';
        $scope.spice = 'very';

        $scope.spicy = function(spice) {
            $scope.spice = spice;
        };

        $scope.spicyList = ['nchongd', 'mexican', 'indian', 'chili', 'korean', 'wasabi'];
        $scope.customDropdownSpice = $scope.spicyList[0];

        $scope.spicy2 = function() {
            $scope.spice = $scope.customDropdownSpice
        }
    })

    .controller('Module4Controller', function Module4Controller($scope, users) {
        $scope.title = "Filters";

        $scope.userList = users.getUsers();

        $scope.searchUser = '';
    })

    .controller('Module5Controller', function Module5Controller($scope, quiz) {
        $scope.title = "Directives";

        $scope.quizItem = quiz.getFirstQuestion();
        console.log($scope.quizItem);

        $scope.consoleLogBindings = function() {
            console.log($scope.quizItem);
        }
    })

    .controller('Module6Controller', function Module6Controller($scope, quiz) {
        $scope.title = "Factory";

        $scope.quizItems = quiz.quizItems;        
        console.log(quiz.quizItems);

        $scope.consoleLogBindings = function() {
            console.log($scope.quizItems);
        }        

        $scope.Submit = function(){
            quiz.checkAnswers($scope.quizItems);
            console.log('Score: ',quiz.score);            
        }

    })

    .controller('Module7Controller', function Module7Controller($scope,quiz, QuizService, ScoreBoardService) {
        $scope.title1 = "Factory";

        $scope.quizItemsFactory = quiz.quizItems;        
        console.log(quiz.quizItems);

        $scope.FactorySubmit = function(){
            quiz.checkAnswers($scope.quizItemsFactory);
            console.log('Score: ',quiz.score);            
        }
        ///
        $scope.quizItemsService = QuizService.quizItems;
        $scope.title2 = "Service";
        $scope.ServiceSubmit    = function(){
            QuizService.checkAnswers($scope.quizItemsService);
            console.log('Score Service: ', QuizService.getScore());
            var person = prompt("Please enter your name", "Your Name");
            var score = {
                "Name": person,
                "Score": QuizService.getScore()
            };
            ScoreBoardService.addScore(score);            
        }
        ///
        $scope.scores = ScoreBoardService.getScores();
    });
})();