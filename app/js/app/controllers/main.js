(function(){

	var mainCtrl = function($scope, $document, $sanitize){

		$scope.app = {};
		$scope.app.name = 'Simpleblend';
		$scope.options = {
			toggled: false,
			panelCounter: 0
		};

		$scope.getAndroidVersion = function() {
			var ua = navigator.userAgent;
			var ver = ua.match(/Android\s([0-9\.]*)/);
			return ver ? ver[1] : false;
		};

		$scope.clients = [
			{
				name: 'Amtrak Guest Rewards',
				class: 'amtrak',
				description: 'During my time at a local agency here in Minneapolis, I had the opportunity to work heavily with Amtrak Guest Rewards&mdash;the loyalty side of <a href="http://www.amtrak.com/home">Amtrak</a>. I was one of a the lead developers in the Front-end space, and helped redesign the site in the fall of 2013. I helped provided: JavaScript, CSS, HTML, Coldfusion, and SQL.',
				link: 'https://amtrakguestrewards.com',
				images: {
					slide1: {
						small: "amtrak_mobile_1.jpg",
						large: "amtrak_desktop_1.jpg"
					},
					slide2: {
						small: "amtrak_mobile_2.jpg",
						large: "amtrak_desktop_2.jpg"
					},
					slide3: {
						small: "amtrak_mobile_3.jpg",
						large: "amtrak_desktop_3.jpg"
					},
					slide4: {
						small: "amtrak_mobile_4.jpg",
						large: "amtrak_desktop_4.jpg"
					},
					slide5: {
						small: "amtrak_mobile_5.jpg",
						large: "amtrak_desktop_5.jpg"
					}
				}
			},
			{
				name: 'Blue Claw Co.',
				class: 'blueclawco',
				description: 'While working with Blue Claw I was in charge of Design and Development for the entire brand. From logo creation to e-commerence implementation, I helped form a cohesive identity and push their web presence forward. I helped provided: Design, CSS, HTML, JavaScript, Shopify, and Email development.',
				link: 'http://blueclawco.com',
				images: {
					slide1: {
						small: "blueclaw_mobile_1.jpg",
						large: "blueclaw_desktop_1.jpg"
					},
					slide2: {
						small: "blueclaw_mobile_2.jpg",
						large: "blueclaw_desktop_2.jpg"
					},
					slide3: {
						small: "blueclaw_mobile_3.jpg",
						large: "blueclaw_desktop_3.jpg"
					},
					slide4: {
						small: "blueclaw_mobile_4.jpg",
						large: "blueclaw_desktop_4.jpg"
					},
					slide5: {
						small: "blueclaw_mobile_5.jpg",
						large: "blueclaw_desktop_5.jpg"
					}
				}
			},
			{
				name: 'Knot Clothing',
				class: 'knot',
				description: 'Two years ago Knot Clothing hired me to help give their site a much needed refresh. Many of the changes included design tweaks and back-end Shopify customizations. I helped provide: Shopify templating, JavaScript, CSS, Design.',
				link: 'http://www.knotclothing.com',
				images: {
					slide1: {
						small: "knot_mobile_1.jpg",
						large: "knot_desktop_1.jpg"
					},
					slide2: {
						small: "knot_mobile_2.jpg",
						large: "knot_desktop_2.jpg"
					},
					slide3: {
						small: "knot_mobile_3.jpg",
						large: "knot_desktop_3.jpg"
					},
					slide4: {
						small: "knot_mobile_4.jpg",
						large: "knot_desktop_4.jpg"
					},
					slide5: {
						small: "knot_mobile_5.jpg",
						large: "knot_desktop_5.jpg"
					}
				}
			},
			{
				name: 'READ Charter School',
				class: 'read',
				description: 'READ Charter School needed a website that could help organize and promote their growing community. I pitched Wordpress as a solution and helped them get started from the ground up. I helped provide: Wordpress development and design consultation.',
				link: '',
				images: {
					slide1: {
						small: "read_mobile_1.jpg",
						large: "read_desktop_1.jpg"
					},
					slide2: {
						small: "read_mobile_2.jpg",
						large: "read_desktop_2.jpg"
					},
					slide3: {
						small: "read_mobile_3.jpg",
						large: "read_desktop_3.jpg"
					},
					slide4: {
						small: "read_mobile_4.jpg",
						large: "read_desktop_4.jpg"
					},
					slide5: {
						small: "read_mobile_5.jpg",
						large: "read_desktop_5.jpg"
					}
				}
			}
		];
	};

	angular.module('app')
		.controller('mainCtrl', ['$scope', '$document', '$sanitize', mainCtrl]);

}());