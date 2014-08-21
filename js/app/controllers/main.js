(function(){

	var mainCtrl = function($scope, $document){
		$scope.app = {};
		$scope.app.name = 'Simpleblend';
		$scope.toggled = false;
		$scope.work = [
			{
				client: 'Amtrak',
				description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies.',
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
				client: 'Toys R Us',
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
				description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies.',
				link: 'dfsdf',
				work: [
					'amtrak_desktop_1.jpg',
					'amtrak_desktop_2.jpg',
					'amtrak_mobile_1.jpg',
					'amtrak_mobile_2.jpg'
				]
			}
		];
	};

	angular.module('app')
		.controller('mainCtrl', ['$scope', '$document', mainCtrl]);

}());