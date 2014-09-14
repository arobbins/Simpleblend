(function(){

	angular.module('app')
		.directive('panelToggle', ['$timeout', '$document', function($timeout, $document) {
			return {
				restrict: 'A',
				link: function(scope, element, attrs){

					$timeout(function(){


						var previousTarget = null,
							offset = 110,
							duration = 500,

							about = document.getElementById('about'),
							aboutThirdHeight = about.clientHeight / 3,

							work = document.getElementById('work'),
							workTop = work.offsetTop - 30,

							services = document.getElementById('services'),
							servicesThirdHeight = services.clientHeight / 3,

							top  = document.documentElement.scrollTop || document.body.scrollTop,
							panels = [];

						/*
							Function that finds the amount of pixels an element is
							positioned from the top of the document. Traverses up the DOM
							from each parent.
						*/
						function getOffsetTop(elem){
							var offsetTop = 0;

							do {
								if (!isNaN(elem.offsetTop)){
									offsetTop += elem.offsetTop;
								}
							} while(elem = elem.offsetParent);

							return offsetTop;
						}

						element.find('h2').on('click', function(){

							var currentPanel = angular.element(this),
								 currentPanelTop = currentPanel[0].offsetTop,
								 currentPanelID = currentPanel.attr('id');

							// Adding the currently clicked panel to our panels array
							panels.push(currentPanelID);

							// If all panels are closed
							if(scope.options.panelCounter === 0){

								// Toggling styles
								angular.element(this).toggleClass('panel-open');
								angular.element(this).find('i').toggleClass('fa-chevron-down');

								scope.$apply(function(){
									scope.options.toggled = !scope.options.toggled;
									scope.options.panelCounter++;
								});

								console.log(panels, scope.options.panelCounter);

								// Scroll listener
								$document.on('scroll', function(){
									if(scope.options.panelCounter > 0){
										top  = document.documentElement.scrollTop || document.body.scrollTop;

										if(top <= (getOffsetTop(about) + aboutThirdHeight) || top >= (getOffsetTop(services) - servicesThirdHeight)){
											scope.$apply(function(){
												scope.options.toggled = false;
											});
										} else {
											scope.$apply(function(){
												scope.options.toggled = true;
											});
										}
									}
								});

								$timeout(function(){
									var ctop = currentPanel[0].offsetTop -10;
									$document.scrollTop(ctop, duration);

								}, 125);

							// If more than one panel is open
							} else {

								// Scroll listener
								$document.on('scroll', function(){
									if(scope.options.panelCounter > 0){

										top  = document.documentElement.scrollTop || document.body.scrollTop;


										if(top <= getOffsetTop(about) || top >= getOffsetTop(services)){
											scope.$apply(function(){
												scope.options.toggled = false;
											});
										} else {
											scope.$apply(function(){
												scope.options.toggled = true;
											});
										}
									}
								});

								// If clicked panel is already open
								if(angular.element(this).hasClass('panel-open')){

									// Toggle panel
									angular.element(this).toggleClass('panel-open');
									angular.element(this).find('i').toggleClass('fa-chevron-down');

									// Decrement counter
									scope.$apply(function(){
										scope.options.panelCounter--;
									});

									console.log(panels, scope.options.panelCounter);

									// At this point, check counter again
									if(scope.options.panelCounter >= 1){

										var lastIndex = panels.lastIndexOf(currentPanelID),
											 secondLastIndex = panels.lastIndexOf(currentPanelID) - 1,
											 threeLast = panels.lastIndexOf(currentPanelID) - 2,
											 previousPanel = document.getElementById(panels[secondLastIndex]),
											 first = panels[0];

										if (panels[lastIndex] === panels[secondLastIndex]) {
											secondLastIndex--;
											previousPanel = document.getElementById(panels[secondLastIndex]);

										}

										var el;
										for (var i = 0; i <= panels.length; i++) {
											el = document.getElementById(panels[i]);
											if(!angular.element(el).hasClass('panel-open')){
												panels.splice(i, 2);
											}
										}

										console.log(panels, scope.options.panelCounter);

										$document.scrollTop(previousPanel.offsetTop -25, duration);

									}

								// If we clicked an unopened panel
								} else {

									// Toggle panel
									angular.element(this).toggleClass('panel-open');
									angular.element(this).find('i').toggleClass('fa-chevron-down');

									// Increment counter
									scope.$apply(function(){
										scope.options.panelCounter++;
									});

									// Scroll to that panel
									$document.scrollTop(currentPanelTop -20, duration);
								}
							}

							// Finally, check counter again. If zero, scroll to center work section
							if(scope.options.panelCounter === 0){

								scope.$apply(function(){

									// Closer 'er up!
									scope.options.toggled = !scope.options.toggled;
									$document.scrollTop(workTop, duration);

								});

								// Empty the panels array
								while(panels.length > 0) {
								    panels.pop();
								}
								console.log(panels, scope.options.panelCounter);
							}

						});
					});
      		}
			};
		}]);

}());