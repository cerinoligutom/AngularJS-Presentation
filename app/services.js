(function() {
    'use strict';

    angular.module('app.services', [])

    .factory('Factory1', function Factory1(dependency1) {
        var service = {
            exposedFn: exposedFn
        };

        return service;

        ////////////////
        function exposedFn() {}
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

    .service('Service1', function Service1(dependency1) {
        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() {}
    })

    .service('Service2', function Service1(dependency1) {
        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() {}
    });
})();