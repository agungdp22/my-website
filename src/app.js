var agungApp = angular.module('agungApp', ['ngRoute', 'ngAnimate']);

agungApp.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'template/home.html'
    })
    .when('/profil', {
        controller: 'profilController',
        templateUrl: 'template/profil.html'
    })
    .otherwise({
        redirectTo: '/'
    });

});

agungApp.controller('homeController', function($scope) {
    $scope.pageClass = 'page-home';
});

agungApp.controller('profilController', function($scope) {
    $scope.pageClass = 'page-profil';
});