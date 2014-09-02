(function(){

	angular.module('app')
		.directive('panelToggle', ['$timeout', '$document', function($timeout, $document) {
			return {
				restrict: 'A',
				link: function(scope, element, attrs){

					$timeout(function(){
						var previousTarget = null,
							 offset = 130,
							 duration = 600;

						element.find('h2').on('click', function(){
							var currentPanel = angular.element(this),
								 wrapper = document.getElementById('work');

							// Initial check of counter, if 0, toggle menu
							if(scope.options.panelCounter === 0){
								scope.options.toggled = !scope.options.toggled;
								scope.$apply();
							}

							// Checking if user clicked on panel twice
							if(angular.element(this).hasClass('panel-open')){
								$document.scrollToElement(wrapper, 30, duration);
								scope.options.panelCounter--;
								scope.$apply();
							} else {
								$document.scrollToElement(currentPanel, offset, duration);
								scope.options.panelCounter++;
								scope.$apply();
							}

							// Checking counter again after other operations have completed. If 0, toggle menu.
							if(scope.options.panelCounter === 0){
								scope.options.toggled = !scope.options.toggled;
								scope.$apply();
							}

							// Toggling styles
							angular.element(this).toggleClass('panel-open');
							angular.element(this).find('i').toggleClass('fa-chevron-down');


						});
					}, [0]);
      		}
			};
		}]);

}());