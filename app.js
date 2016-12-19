angular.module("quizApp",['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state("home",{
        templateurl:"./components/home/homeView.html",
        controller: 'homeCtrl',
        url: '/home'
      })
      .state("quiz",{
        templateurl:"./components/quiz/views/questionDetailView.html",
        controller: 'quizCtrl',
        url: '/quiz'
      })
      .state("results",{
        templateurl:"./components/results/resultsView.html",
        controller: 'resultsCtrl',
        url: '/results'
      })

})
