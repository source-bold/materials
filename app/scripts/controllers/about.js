'use strict';

/**
 * @ngdoc function
 * @name materialsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the materialsApp
 */
angular.module('materialsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
