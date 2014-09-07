(function(){

	angular.module('app')
		.directive('panelToggle', ['$timeout', '$document', function($timeout, $document) {
			return {
				restrict: 'A',
				link: function(scope, element, attrs){

					// function getDeviceOrientation() {

					//     if (Math.abs(window.orientation) === 90) {
					//         // Landscape Mode
					//         console.log('Landscape');

					//     } else {
					//         // Portrait Mode
					//         console.log('Portrait');
					//     }
					// }

					// getDeviceOrientation();

					$timeout(function(){

						var previousTarget = null,
							 offset = 110,
							 duration = 500,
							 services = document.getElementById('services'),
							 servicesOffset = services.getBoundingClientRect(),
							 servicesTop = servicesOffset.top,
							 work = document.getElementById('work'),
							 workOffset = work.getBoundingClientRect(),
							 workTop = work.offsetTop - 30,
							 // workTop = wrapper.offsetTop - 30,
							 panels = [];


						// function getScrollXY() {
						//     var x = 0, y = 0;
						//     if( typeof( window.pageYOffset ) == 'number' ) {
						//         // Netscape
						//         x = window.pageXOffset;
						//         y = window.pageYOffset;
						//     } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
						//         // DOM
						//         x = document.body.scrollLeft;
						//         y = document.body.scrollTop;
						//     } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
						//         // IE6 standards compliant mode
						//         x = document.documentElement.scrollLeft;
						//         y = document.documentElement.scrollTop;
						//     }
						//     return [x, y];
						// }
						// var xy = getScrollXY();
						// var x = xy[0];
						// var y = xy[1];



						element.find('h2').on('click', function(){
							var currentPanel = angular.element(this),
								 currentPanelTop = currentPanel[0].offsetTop,
								 currentPanelID = currentPanel.attr('id');

								 panels.push(currentPanelID);

							// Browser scroll
							$document.on('mousewheel', function(e) {

							// var xy = getScrollXY();
							// var x = xy[0];
							// var y = xy[1];




								// if(scrollTop >= workHeight){
								// 	console.log('above');
								// } else if (scrollTop <= servicesHeight){
								// 	console.log('below');
								// }



								// console.log(angular.element(wrapper)[0].offsetHeight);
								// console.log(scrollTop);
							});




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
									var ctop = currentPanel[0].offsetTop -10;
									$document.scrollTop(ctop, duration);

								}, 200);

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

											// $timeout(function(){
											// 	$document.scrollTop(previousPanel.offsetTop, -20, duration);
											// }, 100);

										}
										$document.scrollTop(workTop, duration);

									}

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
									$document.scrollTop(workTop, duration);

								});
							}

						});
					});
      		}
			};
		}]);

}());