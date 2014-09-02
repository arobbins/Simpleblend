(function(){

	var mainCtrl = function($scope, $document){

		$scope.app = {};
		$scope.app.name = 'Simpleblend';
		$scope.options = {
			toggled: false,
			panelCounter: 0
		};


		$scope.work = [
			{
				client: 'Amtrak',
				description: 'While working at ad agency Olson, I had the oppurtunity to work heavily with Amtrak Guest Rewards - the loyalty side of Amtrak. I was a lead developer in the Front-end development space and helped redesign the entire site in the fall of 2013. Services provided: Coldfusion, HTML, CSS, JavaScript, and SQL.',
				link: 'dfsdf',
				images: {
					logo: 'logo_amtrak.svg',
					work: [
						'amtrak_desktop_1.jpg',
						'amtrak_desktop_2.jpg',
						'amtrak_mobile_1.jpg',
						'amtrak_mobile_2.jpg'
					]
				}
			},
			{
				client: 'Blue Claw Co.',
				description: 'While working with Blue Claw I was in charge of Design and Development for the entire brand. From logo creation to e-commerence implementation. I helped form a cohesive identity for the brand, and push their web pressence forward. Services provided: Design, HTML, CSS, JavaScript, Email development.',
				link: 'dfsdf',
				work: [
					'amtrak_desktop_1.jpg',
					'amtrak_desktop_2.jpg',
					'amtrak_mobile_1.jpg',
					'amtrak_mobile_2.jpg'
				]
			},
			{
				client: 'Toys R Us',
				description: 'While working at ad agency Olson, I had the oppurtunity of working with Rewards R Us - the loyalty side of Toys R Us. They were looking to redesign their loyalty site to match more closly with the main brand. I played the lead Designer and co-developer of the project.',
				link: 'dfsdf',
				work: [
					'amtrak_desktop_1.jpg',
					'amtrak_desktop_2.jpg',
					'amtrak_mobile_1.jpg',
					'amtrak_mobile_2.jpg'
				]
			},
			{
				client: 'Knot Clothing',
				description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies.',
				link: 'dfsdf',
				work: [
					'amtrak_desktop_1.jpg',
					'amtrak_desktop_2.jpg',
					'amtrak_mobile_1.jpg',
					'amtrak_mobile_2.jpg'
				]
			},
			{
				client: 'Wyndham',
				description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies.',
				link: 'dfsdf',
				work: [
					'amtrak_desktop_1.jpg',
					'amtrak_desktop_2.jpg',
					'amtrak_mobile_1.jpg',
					'amtrak_mobile_2.jpg'
				]
			},
			{
				client: 'Isolate & Bloom',
				description: 'My good friend Robert Mcgraw asked me to help develop the web pressence for his company Isolate & Bloom. Being such a huge inspiration for me personally, I couldn\'t say no.',
				link: 'dfsdf',
				work: [
					'amtrak_desktop_1.jpg',
					'amtrak_desktop_2.jpg',
					'amtrak_mobile_1.jpg',
					'amtrak_mobile_2.jpg'
				]
			}
		];
		// $scope.hideNav;
	};

	angular.module('app')
		.controller('mainCtrl', ['$scope', '$document', mainCtrl]);

}());