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

    .controller('Module5Controller', function Module5Controller($scope) {
        $scope.title = "";
    })

    .controller('Module6Controller', function Module6Controller($scope,quiz) {
        $scope.title = "";
        $scope.Submit = function(){

        }
        console.log(quiz.quizItems);
    })

    .controller('Module7Controller', function Module7Controller($scope,QuizService) {
        $scope.title = "";
        var quizService = QuizService;
        console.log(quizService);
    });
})();