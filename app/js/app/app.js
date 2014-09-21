(function(){
	"use strict";

	angular.module('app', [
	               'ui.router',
	               'ui.scrollfix',
	               'duScroll',
	               'ngAnimate',
	               'angularSlideables',
	               'angular-carousel',
	               'afkl.lazyImage',
	               'ngSanitize'
	]);

	angular.module('app')
		.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise("/");

			$stateProvider.state('home', {
				url: '/',
				controller: ['$scope', function($scope){
					$scope.page = 'page-home';

					// Activating AppScroll plugin to prevent website dragging on iDevices.
					var scroller = new AppScroll({
						toolbar: toolbarElement,
						scroller: contentElement
					});
					scroller.on();

				}]
			});
		}]);

}());