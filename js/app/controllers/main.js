(function(){

	var mainCtrl = function($scope, $document){
		$scope.app = {};
		$scope.app.name = 'Simpleblend';
		$scope.toggled = false;

		$scope.work = [
			{
				client: 'Amtrak Guest Rewards',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				logo: 'logo_amtrak.svg',
				images: [
					'amtrak_1.jpg',
					'amtrak_2.jpg'
				]
			},
			{
				client: 'Fraser',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				logo: 'logo_fraser.svg',
				images: [
					'amtrak_1.jpg',
					'amtrak_2.jpg'
				]
			},
			{
				client: 'On Being',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				logo: 'logo_onbeing.svg',
				images: [
					'amtrak_1.jpg',
					'amtrak_2.jpg'
				]
			},
			{
				client: 'Wyndham Rewards',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				logo: 'logo_wyndham.svg',
				images: [
					'amtrak_1.jpg',
					'amtrak_2.jpg'
				]
			},
			{
				client: 'Blue Claw Co.',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				logo: 'logo_blueclawco.svg',
				images: [
					'amtrak_1.jpg',
					'amtrak_2.jpg'
				]
			},
			{
				client: 'Isolate & Bloom',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				logo: 'logo_isolateandbloom.svg',
				images: [
					'amtrak_1.jpg',
					'amtrak_2.jpg'
				]
			}
		];

	};

	angular.module('app')
		.controller('mainCtrl', ['$scope', '$document', mainCtrl]);

}());