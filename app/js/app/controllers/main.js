(function(){

	var mainCtrl = function($scope, $document){

		$scope.app = {};
		$scope.app.name = 'Simpleblend';
		$scope.options = {
			toggled: false,
			panelCounter: 0
		};

		$scope.clients = [
			{
				name: 'Amtrak',
				description: 'While working at ad agency Olson, I had the oppurtunity to work heavily with Amtrak Guest Rewards - the loyalty side of Amtrak. I was a lead developer in the Front-end development space and helped redesign the entire site in the fall of 2013. Services provided: Coldfusion, HTML, CSS, JavaScript, and SQL.',
				link: 'http://google.com',
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
					}
				}
			},
			{
				name: 'Rewards "R" Us',
				description: 'While working at ad agency Olson, I had the oppurtunity to work heavily with Amtrak Guest Rewards - the loyalty side of Amtrak. I was a lead developer in the Front-end development space and helped redesign the entire site in the fall of 2013. Services provided: Coldfusion, HTML, CSS, JavaScript, and SQL.',
				link: 'http://google.com',
				images: {
					desktop: [
						'amtrak_desktop_1.jpg',
						'amtrak_desktop_2.jpg',
						'amtrak_desktop_3.jpg'
					],
					mobile: [
						'amtrak_mobile_1.jpg',
						'amtrak_mobile_2.jpg'
					]
				}
			},
			{
				name: 'Blue Claw Co.',
				description: 'While working with Blue Claw I was in charge of Design and Development for the entire brand. From logo creation to e-commerence implementation. I helped form a cohesive identity for the brand, and push their web pressence forward. Services provided: Design, HTML, CSS, JavaScript, Email development.',
				link: 'http://google.com',
				images: {
					desktop: [
						'blueclaw_desktop_1.jpg',
						'blueclaw_desktop_2.jpg',
						'blueclaw_desktop_3.jpg',
					],
					mobile: [
						'amtrak_mobile_1.jpg',
						'amtrak_mobile_2.jpg'
					]
				}
			},
			{
				name: 'Knot Clothing',
				description: 'While working at ad agency Olson, I had the oppurtunity to work heavily with Amtrak Guest Rewards - the loyalty side of Amtrak. I was a lead developer in the Front-end development space and helped redesign the entire site in the fall of 2013. Services provided: Coldfusion, HTML, CSS, JavaScript, and SQL.',
				link: 'http://google.com',
				images: {
					desktop: [
						'knot_desktop_1.jpg',
						'knot_desktop_2.jpg',
						'knot_desktop_3.jpg'
					],
					mobile: [
						'amtrak_mobile_1.jpg',
						'amtrak_mobile_2.jpg'
					]
				}
			},
			{
				name: 'Isolate and Bloom',
				description: 'While working at ad agency Olson, I had the oppurtunity to work heavily with Amtrak Guest Rewards - the loyalty side of Amtrak. I was a lead developer in the Front-end development space and helped redesign the entire site in the fall of 2013. Services provided: Coldfusion, HTML, CSS, JavaScript, and SQL.',
				link: 'http://google.com',
				images: {
					desktop: [
						'amtrak_desktop_1.jpg',
						'amtrak_desktop_2.jpg',
						'amtrak_desktop_3.jpg'
					],
					mobile: [
						'amtrak_mobile_1.jpg',
						'amtrak_mobile_2.jpg'
					]
				}
			}
		];
	};

	angular.module('app')
		.controller('mainCtrl', ['$scope', '$document', mainCtrl]);

}());