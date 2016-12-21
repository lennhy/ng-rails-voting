(function() {
    'use strict'

    angular
        .module('votingApp', ['ui.router', 'templates'])
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
