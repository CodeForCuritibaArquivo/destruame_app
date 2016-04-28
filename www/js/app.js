angular.module('app', [
    'ionic',
    'firebase',
    'app.controllers',
    'app.factories',
  ])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
        cordova.plugins.Keyboard.disableScroll(true)

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault()
      }
    })
  })
  .run(function($rootScope, $state) {
    $rootScope.goto = function(view) {
      try {
        $state.go('app.' + view)
      } catch (e) {
        throw e
      }
    }
  })
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.suggest', {
        url: '/suggest',
        views: {
          'menuContent': {
            templateUrl: 'templates/suggest.html',
            controller: 'SuggestCtrl'
          }
        }
      })
      .state('app.challenges', {
        url: '/challenges',
        views: {
          'menuContent': {
            templateUrl: 'templates/challenges.html',
            controller: 'ChallengesCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/challenges')
  })