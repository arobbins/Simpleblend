(function(){

	angular.module('app')
		.directive('panelToggle', ['$timeout', '$document', function($timeout, $document) {
			return {
				restrict: 'A',
				link: function(scope, element, attrs){

					$timeout(function(){

						var previousTarget = null,
							 offset = 110,
							 duration = 500;

						element.find('h2').on('click', function(){
							var currentPanel = angular.element(this),
								 wrapper = document.getElementById('work');



							// Detecting mousescroll
							angular.element(wrapper).on('mousewheel', function(){
								console.log('on wrapper element');
							});

							// Initial check of counter, if 0, toggle menu
							if(scope.options.panelCounter === 0){
								scope.options.toggled = !scope.options.toggled;
								scope.$apply();
							}

							// If clicked panel is already open
							if(angular.element(this).hasClass('panel-open')){

								// Toggling styles
								angular.element(this).toggleClass('panel-open');
								angular.element(this).find('i').toggleClass('fa-chevron-down');

								scope.options.panelCounter--;
								scope.$apply();

								// If additional panels are open.
								if(scope.options.panelCounter >= 1){
									$document.scrollToElement(currentPanel.prev(), 20, duration);
								} else {
									$document.scrollToElement(wrapper, 30, duration);
								}

							// If clicked panel isn't already open
							} else {

								// Toggling styles
								angular.element(this).toggleClass('panel-open');
								angular.element(this).find('i').toggleClass('fa-chevron-down');

								scope.options.panelCounter++;
								scope.$apply();

								// If more than one panel is open besides clicked panel
								if(scope.options.panelCounter > 1){
									$document.scrollToElement(currentPanel, 20, duration);
								} else {
									$document.scrollToElement(currentPanel, offset, duration);
								}
							}

							// Checking counter again after other operations have completed. If 0, toggle menu.
							if(scope.options.panelCounter === 0){
								scope.options.toggled = !scope.options.toggled;
								scope.$apply();
							}

						});
					}, [0]);
      		}
			};
		}]);

}());