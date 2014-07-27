(function(){
	"use strict";

	angular.module('app', ['ui.router', 'ui.scrollfix', 'duScroll', 'ngAnimate', 'angularSlideables']);

	angular.module('app')
		.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise("/");

			$stateProvider.state('home', {
				url: '/',
				controller: ['$scope', function($scope){
					$scope.page = 'page-home';
				}]
			});
		}]);
}());