'use strict';

/**
 * @ngdoc function
 * @name materialsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the materialsApp
 */
angular.module('materialsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
