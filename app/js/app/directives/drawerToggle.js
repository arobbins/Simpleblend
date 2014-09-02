(function(){

	angular.module('app')
		.directive('panelToggle', ['$timeout', function($timeout) {
			return {
				restrict: 'A',
				link: function(scope, element, attrs){

					element.one('click', function(){
						scope.options.toggled = !scope.options.toggled;
						scope.options.panelCounter++;
						scope.$apply();


						$timeout(function(){

							alert('Here');
							element.children().on('click', function(){

								console.log('clicked');

							});

						}, [0]);


					});
      		}
			};
		}]);

}());