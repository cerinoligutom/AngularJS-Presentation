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

    .factory('Factory2', function Factory1(dependency1) {
        var service = {
            exposedFn: exposedFn
        };

        return service;

        ////////////////
        function exposedFn() {}
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


(function() {
    'use strict';

    angular
        .module('app.services', [])

})();