var agungApp = angular.module('agungApp', ['ngRoute']);

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