'use strict';

angular.module('shoppingListUiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {
  // $routeProvider
  // .when('/', {
  //   templateUrl: 'views/main.html',
  //   controller: 'MainCtrl'
  // })
  // .otherwise({
  //   redirectTo: '/'
  // });

  // $urlRouterProvider.otherwise('/index');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  });
});
