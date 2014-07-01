(function(){

	angular.module('app')
		.directive('landing', function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: '../views/landing.html'
			};
		});

}());