(function(){

	angular.module('app')
		.directive('about', function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: '../views/about.html'
			};
		});

}());