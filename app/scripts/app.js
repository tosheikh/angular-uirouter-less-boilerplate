'use strict';

/**
 * @ngdoc overview
 * @name angularbpApp
 * @description
 * # angularbpApp
 *
 * Main module of the application.
 */
angular
  .module('angularbpApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
  	$urlRouterProvider.otherwise("home");
  	$stateProvider
        .state('about',{
            url:"/about",
            templateUrl:"views/about.html"
        })
        .state('home',{
            url:"/home",
            templateUrl:"views/main.html",
            controller:"MainCtrl"
        });;
        
  });
