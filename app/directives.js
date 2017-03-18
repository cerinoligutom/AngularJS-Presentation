(function() {
    'use strict';

    angular
        .module('app.directives', [])
        .directive('quizItem', function() {
            return {
                restrict: 'E',
                scope: {
                    quizItem: '='
                },
                templateUrl: 'app/templates/quizItem.html',
                replace: true
            };
        })
})();