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
							 wrapper = document.getElementById('work'),
							 wrapperTop = wrapper.offsetTop - 30,
							 panels = [];


						element.find('h2').on('click', function(){
							var currentPanel = angular.element(this),
								 currentPanelTop = currentPanel[0].offsetTop,
								 currentPanelID = currentPanel.attr('id');

								 panels.push(currentPanelID);

								 console.log(currentPanel[0]);

							function findLastPanel(){
								return panels.length;
							}

							// If first click of unopened menu
							// Initial check of counter, if 0, toggle menu
							if(scope.options.panelCounter === 0){

								// Toggling styles
								angular.element(this).toggleClass('panel-open');
								angular.element(this).find('i').toggleClass('fa-chevron-down');

								scope.$apply(function(){
									scope.options.toggled = !scope.options.toggled;
									scope.options.panelCounter++;
								});


								$timeout(function(){
									var ctop = currentPanel[0].offsetTop -20;
									$document.scrollTop(ctop, duration);

								}, 150);

							} else {

								// If clicked panel is already open
								if(angular.element(this).hasClass('panel-open')){

									// Toggling styles
									angular.element(this).toggleClass('panel-open');
									angular.element(this).find('i').toggleClass('fa-chevron-down');

									scope.$apply(function(){
										scope.options.panelCounter--;
									});

									// At this point we've closed the currently viewed panel, now need to scroll user
									// If additional panels are open.
									if(scope.options.panelCounter >= 1){
										// Scroll to currently opened and previously clicked panel
										// $document.scrollTop(currentPanelTop, currentPanelTop, duration);
										var lastIndex = panels.lastIndexOf(currentPanelID),
											 secondLastIndex = panels.lastIndexOf(currentPanelID) - 1,
											 previousPanel = document.getElementById(panels[secondLastIndex]);
										// console.log(panels);
										// console.log(secondLastIndex);
										// console.log(panels[secondLastIndex]);

										if (panels[lastIndex] === panels[secondLastIndex]) {
											secondLastIndex--;
											previousPanel = document.getElementById(panels[secondLastIndex]);
											// console.log(panels);
											// console.log(secondLastIndex);
											// console.log(panels[secondLastIndex]);
											$timeout(function(){
												$document.scrollTop(previousPanel.offsetTop, -20, 3000);
											}, 200);

										}
										$timeout(function(){
											$document.scrollTop(previousPanel.offsetTop, -30, 3000);
										}, 200);

									}

									// console.log(scope.options.panelCounter);
									// console.log(panels);

								// If clicked panel isn't already open
								} else {

									// Toggling styles
									angular.element(this).toggleClass('panel-open');
									angular.element(this).find('i').toggleClass('fa-chevron-down');

									scope.$apply(function(){
										scope.options.panelCounter++;
									});

									$document.scrollTop(currentPanelTop -20, duration);

									// console.log(scope.options.panelCounter);
									// console.log(panels);

								}
							}

							// Checking counter again after other operations have completed. If 0, toggle menu.
							if(scope.options.panelCounter === 0){

								scope.$apply(function(){

									// Closer 'er up!
									scope.options.toggled = !scope.options.toggled;
									$document.scrollTop(wrapperTop, duration);

								});
							}

						});
					});
      		}
			};
		}]);

}());