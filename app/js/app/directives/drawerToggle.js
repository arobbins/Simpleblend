(function(){

	angular.module('app')
		.directive('drawerToggle', function(){
			return {
				restrict: 'A',
				link: function(scope, element, attrs){


					element.on('click', function(){

						// Toggling background color of current panel as-well as chevron
						element.toggleClass('visible');
						element.children().toggleClass('fa-chevron-down');


						if(document.getElementsByClassName('visible')){
							scope.options.toggled = !scope.options.toggled;
						} else {

						}

						scope.$apply();






					});
      		}
			};
		});

}());