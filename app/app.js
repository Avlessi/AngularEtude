"use strict";

var myModule = angular
  .module('myApp', [
    'ngResource',
     'ngRoute',
    'ngSanitize',
    'ui.bootstrap'
  ]);


myModule.controller('myCtrl', function($scope) {
	$scope.pupil = {"name":"Julien"};
    $scope.people = [
      { firstName: 'Misko', lastName: 'Hevery', company: 'Google' }
    ];
});


var questionsService = myModule.service('questionsService', function(){
   
});

myModule.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/questions.html',
        controller: 'QuestionsCtrl',
        resolve: {
          questions: function(questionsService) {
            return questionsService.resolveQuestions();
          }
        }
      })
      .when('/questions/:questionId', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl',
        resolve: {
          question: function(questionsService) {
            return questionsService.resolveCurrentQuestion();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
