(function() {
    'use strict';

    angular
        .module('app.directives', [])
        .directive('quizItem', function() {
            return {
                restrict: 'E',
                scope: {
                    quizDetails: '=',
                    testFunc: '&'
                },
                templateUrl: 'app/templates/quizItem.html',
            };
        })
})();