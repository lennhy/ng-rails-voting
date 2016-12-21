(function() {
    'use strict'

    angular
        .module('votingApp', ['ui.router', 'templates'])
        .config([
            "$httpProvider", function($httpProvider) {
                $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
            }
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                .state('items', {
                    url: '/items',
                    templateUrl: 'items/index.html',
                    controller: 'ItemsController as vm'
                })

            $urlRouterProvider.otherwise('/')
        })
}())
