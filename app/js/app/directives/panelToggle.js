(function(){

	angular.module('app')
		.directive('panelToggle', ['$timeout', '$document', function($timeout, $document) {
			return {
				restrict: 'A',
				link: function(scope, element, attrs){

					$timeout(function(){

						// Time for panel to open: 0.4s.

					  var offset = 25,
							timeToScroll = 200,
							duration = 500,
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

						  var lastActivePanel,
								top,
								currentPanel = angular.element(this),
								currentPanelTop = currentPanel[0].offsetTop,
								currentPanelID = currentPanel.attr('id'),
								about = document.getElementById('about'),
								aboutThirdHeight = (about.clientHeight / 2),
								work = document.getElementById('work'),
								workTop = (work.offsetTop - 30),
								services = document.getElementById('services'),
								servicesThirdHeight = (services.clientHeight / 2),
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

							lastActivePanel = document.getElementById(activePanels[activePanels.length - 1]);

							// If all panels are closed
							if(scope.options.panelCounter === 0){

								// Toggling styles
								angular.element(this).toggleClass('panel-open');
								angular.element(this).find('i').toggleClass('fa-chevron-down');

								scope.$apply(function(){
									scope.options.panelCounter++;
								});

								angular.element(nav).removeClass("panel-opened");
								angular.element(nav).addClass("panel-closed");

								$timeout(function(){
									$document.scrollToElement(currentPanel[0], 0, duration);

									//Scroll listener
									$document.on('scroll', function(){
										if(scope.options.panelCounter > 0){
											top = document.documentElement.scrollTop || document.body.scrollTop;

											if(top <= (getOffsetTop(about) + aboutThirdHeight) || top >= (getOffsetTop(services) - servicesThirdHeight)){

												angular.element(nav).addClass("panel-opened");
												angular.element(nav).removeClass("panel-closed");

											} else {
												angular.element(nav).addClass("panel-closed");
												angular.element(nav).removeClass("panel-opened");
											}
										}
									});
								}, timeToScroll);

							// If more than one panel is open
							} else {

								// If clicked panel is already open
								if(angular.element(this).hasClass('panel-open')){

									// Smoother scroll when more panels are open
									if(activePanels.length > 2) {
										// timeToScroll = 500;
										duration = 1000;
									}

									// Decrement counter
									scope.$apply(function(){
										scope.options.panelCounter--;
									});

									// Toggle panel
									angular.element(this).toggleClass('panel-open');
									angular.element(this).find('i').toggleClass('fa-chevron-down');

									// At this point, check counter again
									if(scope.options.panelCounter >= 1){

										$timeout(function(){
											$document.scrollToElement(lastActivePanel, 0, (duration + 200));
										}, (timeToScroll + 200));

									}

								// If we clicked an unopened panel
								} else {

									// Increment counter
									scope.$apply(function(){
										scope.options.panelCounter++;
									});

									// Toggle panel
									angular.element(this).toggleClass('panel-open');
									angular.element(this).find('i').toggleClass('fa-chevron-down');

									// Scroll to that panel
									$timeout(function(){
										$document.scrollToElement(currentPanel[0], 0, (duration + 200));
									}, timeToScroll);

								}

								// Calculate offset for hiding nav during scroll
								var timer, refresh;
								$document.on('scroll', function(){
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
												$timeout(function(){
													angular.element(nav).addClass("panel-opened");
													angular.element(nav).removeClass("panel-closed");
												}, (timeToScroll + 400));
											} else {
												$timeout(function(){
													angular.element(nav).addClass("panel-closed");
													angular.element(nav).removeClass("panel-opened");
												}, (timeToScroll + 400));
											}
										}
									};
									timer = setTimeout(refresh, 150);
									clearTimeout(timer);
								});

							}

							// Finally, check counter again. If zero, scroll to center work section
							if(scope.options.panelCounter === 0){

								// Closer 'er up!
								angular.element(nav).removeClass("panel-closed");
								angular.element(nav).addClass("panel-opened");
								$document.scrollTop(workTop, duration);

							}
						});
					});
      		}
			};
		}]);

}());