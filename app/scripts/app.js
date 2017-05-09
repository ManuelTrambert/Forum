'use strict';

/**
 * @ngdoc overview
 * @name forumApp
 * @description
 * # forumApp
 *
 * Main module of the application.
 */
var app = angular
  .module('forumApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/accueil.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/NomsCouleur', {
        templateUrl: 'views/Accueil/NomsCouleur.html',
        controller: 'NomsCouleurCtrl',
        controllerAs: 'NomsCouleur'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
