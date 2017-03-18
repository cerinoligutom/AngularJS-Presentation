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
            .state('home.module3', {
                url: '/module3',
                templateUrl: 'app/templates/module3.html',
                controller: 'Module3Controller',
            })
            .state('home.module4', {
                url: '/module4',
                templateUrl: 'app/templates/module4.html',
                controller: 'Module4Controller',
            })
            .state('home.module5', {
                url: '/module5',
                templateUrl: 'app/templates/module5.html',
                controller: 'Module5Controller',
            })
            .state('home.module6', {
                url: '/module6',
                templateUrl: 'app/templates/module6.html',
                controller: 'Module6Controller',
            })
            .state('home.module7', {
                url: '/module7',
                templateUrl: 'app/templates/module7.html',
                controller: 'Module7Controller',
            })

        $urlRouterProvider.otherwise('/home/introduction');
    });
})();