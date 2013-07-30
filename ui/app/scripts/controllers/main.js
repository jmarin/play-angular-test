'use strict';

angular.module('uiApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('/template').success(function(data) {
      //console.log(data);
      $scope.template = data;
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    //console.log(MyService.data);

  });
