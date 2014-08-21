(function(){

	angular.module('app')
		.directive('work', function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: '../views/work.html'
			};
		});

}());