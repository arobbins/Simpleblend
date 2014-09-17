(function(){

	angular.module('app')
		.directive('panelToggle', ['$timeout', '$document', function($timeout, $document) {
			return {
				restrict: 'A',
				link: function(scope, element, attrs){

					$timeout(function(){


						var previousTarget = null,
							offset = 25,
							duration = 600,
							top  = document.documentElement.scrollTop || document.body.scrollTop,
							panels = [],
							activePanels = [];

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
								currentPanelTop = currentPanel[0].offsetTop - offset,
								currentPanelID = currentPanel.attr('id'),

								about = document.getElementById('about'),
								aboutThirdHeight = about.clientHeight / 2,

								work = document.getElementById('work'),
								workTop = work.offsetTop - 30,

								services = document.getElementById('services'),
								servicesThirdHeight = services.clientHeight / 2,

								nav = document.getElementsByClassName('nav');


								// Nothing in array
								if(activePanels.length === 0){
									activePanels.push(currentPanelID);

								// Something in array
								} else {

									if(currentPanel.hasClass('panel-open')){
										activePanels.splice(activePanels.indexOf(currentPanelID), 1);
									} else {
										activePanels.push(currentPanelID);
									}

								}

							// Adding the currently clicked panel to our panels array
							panels.push(currentPanelID);

							// If all panels are closed
							if(scope.options.panelCounter === 0){

								// Toggling styles
								angular.element(this).toggleClass('panel-open');
								angular.element(this).find('i').toggleClass('fa-chevron-down');

								scope.$apply(function(){
									angular.element(nav).removeClass("panel-opened");
									angular.element(nav).addClass("panel-closed");
									scope.options.panelCounter++;
								});

								// Scroll listener
								$document.on('scroll', function(){
									if(scope.options.panelCounter > 0){
										top  = document.documentElement.scrollTop || document.body.scrollTop;

										if(top <= (getOffsetTop(about) + aboutThirdHeight) || top >= (getOffsetTop(services) - servicesThirdHeight)){

											angular.element(nav).addClass("panel-opened");
											angular.element(nav).removeClass("panel-closed");

										} else {
											angular.element(nav).addClass("panel-closed");
											angular.element(nav).removeClass("panel-opened");
										}
									}
								});

								$timeout(function(){
									var ctop = currentPanel[0].offsetTop - offset;
									$document.scrollTop(ctop, duration);

								}, 200);

							// If more than one panel is open
							} else {

								var timer, refresh;
								// Scroll listener
								$document.on('scroll', function(){
									clearTimeout(timer);
        							timer = setTimeout( refresh , 150 );
									refresh = function () {
										if(scope.options.panelCounter > 1){

											var el, totalPanelHeight;

											if(activePanels.length > 0){
												activePanels.forEach(function(entry) {
													el = document.getElementById(entry);
													totalPanelHeight = el.parentNode.clientHeight;
												});
											}

											totalPanelHeight = totalPanelHeight * activePanels.length;

											top  = document.documentElement.scrollTop || document.body.scrollTop;

											var offServ = (getOffsetTop(services) - (totalPanelHeight / activePanels.length));
											var offAbout = (getOffsetTop(about) + (totalPanelHeight / activePanels.length));

											if(top <= offAbout || top >= offServ){
												angular.element(nav).addClass("panel-opened");
												angular.element(nav).removeClass("panel-closed");

											} else {
												angular.element(nav).addClass("panel-closed");
												angular.element(nav).removeClass("panel-opened");
											}
										}
									};
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

										$document.scrollTop(previousPanel.offsetTop - offset, duration);

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
									$document.scrollTop(currentPanelTop, duration);
								}
							}

							// Finally, check counter again. If zero, scroll to center work section
							if(scope.options.panelCounter === 0){

								scope.$apply(function(){


									// Closer 'er up!
									angular.element(nav).removeClass("panel-closed");
									angular.element(nav).addClass("panel-opened");

									$document.scrollTop(workTop, duration);

								});

								// Empty the panels array
								while(panels.length > 0) {
								    panels.pop();
								}
							}

						});
					});
      		}
			};
		}]);

}());