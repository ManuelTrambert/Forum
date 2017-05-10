'use strict';

/**
 * @ngdoc function
 * @name forumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forumApp
 */
angular.module('forumApp')
  .controller('MainCtrl', function ($scope, $mdDialog, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.myContenu = 'item_contenu';
    $scope.myTitle = 'titre_article';
    $scope.myItemDeco = 'item_deco';
    $scope.template = [
      {name: 'noms', url: 'views/Accueil/NomsCouleur.html'},
      {name: 'anatomie', url: '/views/Accueil/Anatomie.html'},
      {name: 'anatomieEx', url: '/views/Accueil/AnatomieEx.html'},
      {name: 'entrainement', url: '/views/Accueil/Entrainement.html'},
      {name: 'equipement', url: '/views/Accueil/Equipement.html'},
      {name: 'reproduction', url: '/views/Accueil/ReproductionAlliance.html'},
      {name: 'soins', url: '/views/Accueil/Soins.html'},
      {name: 'capacite', url: '/views/Accueil/Capacite.html'}
    ];

    $scope.showAdvanced = function (id, ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: $scope.template[id].url,
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        targetEvent: ev,
        fullscreen: true
      });
    };

    function DialogController ($scope, $mdDialog) {
      $scope.fromWhere = true;
      $scope.myClass = 'caseOpen';
      $scope.myContenu = 'item_contenu_block';
      $scope.myTitle = 'titre_article_popup';
      $scope.myItemDeco = 'item_deco_popup';

      $scope.answer = function () {
        $mdDialog.hide();
      };
    }
  });
