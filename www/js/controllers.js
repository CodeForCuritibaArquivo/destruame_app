angular.module('app.controllers', ['app.factories'])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })
  .controller('ChallengesCtrl', function($scope, Challenges) {
    // Factory Challenges
    $scope.challenges = Challenges
  })
  .controller('SuggestCtrl', function($scope, Challenges, $state) {

    $scope.suggest = {
      name: '',
      description: ''
    };

    // Salva formulário
    $scope.save = function() {

      if ($scope.suggest.name.length <= 0 || $scope.suggest.description.length <= 0) {
        return alert('Nome e Descrição são obrigatórios.')
      }

      Challenges.$add({
          name: $scope.suggest.name,
          description : $scope.suggest.description,
        })
        .then(
          function(ref) {
            $state.go('app.challenges')
          },
          function(err) {
            throw err
          }
        )
    }
  });