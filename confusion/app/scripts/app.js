'use strict';

angular.module('confusionApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('one', {
                url: '/one',
                template: '<h1>One</h1>'
            })
            .state('two', {
                url: '/two',
                template: '<h1>two</h1>'
            })
            .state('three', {
                url: '/three',
                template: '<h1>three</h1>'
            })
            .state('four', {
                url: '/four',
                template: '<h1>four</h1>'
            })
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        template: '<h1>Home</h1>'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })
            .state('app.aboutus', {
                url: 'aboutus',
                views: {
                    'content@': {
                        templateUrl: 'views/aboutus.html'
                    }
                }
            })
            .state('app.contactus', {
                url: 'contactus',
                views: {
                    'content@': {
                        templateUrl: 'views/contactus.html',
                        controller: 'ContactController'
                    }
                }
            })
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl: 'views/menu.html',
                        controller: 'MenuController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }]);

// angular.module('confusionApp', ['uirouter'])
//     .config(function($stateProvider, $urlRouterProvider) {
//         $stateProvider
//             // route for the home page
//             .state('app', {
//                 url: '/',
//                 views: {
//                     'header': {
//                         templateUrl: 'views/header.html'
//                     },
//                     'content': {
//                         template: '<h1>To be Completed</h1>',
//                         controller: 'IndexController'
//                     },
//                     'footer': {
//                         templateUrl: 'views/footer.html'
//                     }
//                 }
//             })
//             // route for the aboutus page
//             .state('app.aboutus', {
//                 url: 'aboutus',
//                 views: {
//                     'content@': {
//                         template: '<h1>To be Completed</h1>'
//                     }
//                 }
//             })
//             // route for the contactus page
//             .state('app.contactus', {
//                 url: 'contactus',
//                 views: {
//                     'content@': {
//                         templateUrl: 'views/contactus.html',
//                         controller: 'ContactController'
//                     }
//                 }
//             })
//             // route for the menu page
//             .state('app.menu', {
//                 url: 'menu',
//                 views: {
//                     'content@': {
//                         templateUrl: 'views/menu.html',
//                         controller: 'MenuController'
//                     }
//                 }
//             })
//             // route for the dishdetail page
//             .state('app.dishdetails', {
//                 url: 'menu/:id',
//                 views: {
//                     'content@': {
//                         templateUrl: 'views/dishdetail.html',
//                         controller: 'DishDetailController'
//                     }
//                 }
//             });
//         $urlRouterProvider.otherwise('/');
//     });