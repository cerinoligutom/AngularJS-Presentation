(function() {
    'use strict';

    angular
        .module('app.directives', [])
        .directive('directive1', function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'somewhere.html',
                replace: true,
                link: function(scope, element) {
                    //
                }
            };
        })
        .directive('directive2', function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'somewhere.html',
                replace: true,
                link: function(scope, element) {
                    //
                }
            };
        })
})();