// app.js
var routerApp = angular.module('movieSearch', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('./home');

    $stateProvider

        .state('home', {
          url: '/home',
          views:{
            'search':{
              controller: 'SearchController',
              templateUrl: 'views/search.html'
            },
            'movies':{
              controller: 'MovieController',
              templateUrl:'views/movies.html'

            }
          }
        })

}); // closes $routerApp.config()
