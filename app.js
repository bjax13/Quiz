angular.module("quizApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("home", {
                templateUrl: "components/home/homeView.html",
                controller: 'homeCtrl',
                url: '/home'
            })
            .state("quiz", {
                templateUrl: "./components/quiz/views/questionDetailView.html",
                controller: 'quizCtrl',
                url: '/quiz'
            })
            .state("results", {
                templateUrl: "./components/results/resultsView.html",
                controller: 'resultsCtrl',
                url: '/results'
            })
        $urlRouterProvider
            .otherwise('/home')

    })
