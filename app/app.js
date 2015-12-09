"use strict";

angular
  .module('myApp', [
    'ngResource',
     'ngRoute',
    'ngSanitize',
    'ui.bootstrap'
  ])
  .controller('myCtrl', function($scope) {
    $scope.people = [
      { firstName: 'Misko', lastName: 'Hevery', company: 'Google' }
    ];
  });


