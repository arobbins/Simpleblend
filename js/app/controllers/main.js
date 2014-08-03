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
				client: 'Fraser',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				work: [
					'amtrak_desktop_1.jpg',
					'amtrak_desktop_2.jpg',
					'amtrak_mobile_1.jpg',
					'amtrak_mobile_2.jpg'
				]
			},
			{
				client: 'On Being',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				work: [
					'amtrak_desktop_1.jpg',
					'amtrak_desktop_2.jpg',
					'amtrak_mobile_1.jpg',
					'amtrak_mobile_2.jpg'
				]
			},
			{
				client: 'Wyndham Rewards',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				work: [
					'amtrak_desktop_1.jpg',
					'amtrak_desktop_2.jpg',
					'amtrak_mobile_1.jpg',
					'amtrak_mobile_2.jpg'
				]
			},
			{
				client: 'Blue Claw Co.',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
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
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
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