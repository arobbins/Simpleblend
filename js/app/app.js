(function(){
	"use strict";

	angular.module('app', ['ui.bootstrap', 'ui.router', 'ui.scrollfix', 'duScroll']);

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