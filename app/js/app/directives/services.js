(function(){

	angular.module('app')
		.directive('services', function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: '../views/services.html'
			};
		});

}());