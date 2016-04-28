angular.module('app.factories', [])
    .factory('Challenges', function($firebaseArray){
        var challengesRef = new Firebase('https://destrua-me.firebaseio.com/challenges');
        return $firebaseArray(challengesRef);
    })