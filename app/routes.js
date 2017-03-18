(function() {
    'use strict';

    angular.module('app.routes', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                abstract: true,
                url: '/home',
                templateUrl: 'app/templates/home.html',
                controller: 'HomeController'
            })
            .state(('home.introduction'), {
                url: '/introduction',
                templateUrl: 'app/templates/introduction.html',
                controller: 'IntroductionController'
            })
            .state('home.module1', {
                url: '/module1',
                templateUrl: 'app/templates/module1.html',
                controller: 'Module1Controller'
            })
            .state('home.module2', {
                url: '/module2',
                templateUrl: 'app/templates/module2.html',
                controller: 'Module2Controller',
                controllerAs: 'vm'
            })

        $urlRouterProvider.otherwise('/home/introduction');
    });
})();