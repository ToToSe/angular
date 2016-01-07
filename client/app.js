var app = 
angular
  .module('app', ['ngRoute'])
  .config(function($routeProvider) {
      $routeProvider
            .when('/todos', {
              templateUrl: 'views/todos.html',
              controller: 'todoCtrl'
            })
  });
