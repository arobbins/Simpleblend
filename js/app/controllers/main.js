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
				image: 'logo_amtrak.svg'
			},
			{
				client: 'Fraser',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'logo_fraser.svg'
			},
			{
				client: 'On Being',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'logo_onbeing.svg'
			},
			{
				client: 'Wyndham Rewards',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'logo_wyndham.svg'
			},
			{
				client: 'Blue Claw Co.',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'logo_blueclawco.svg'
			},
			{
				client: 'Isolate & Bloom',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'logo_isolateandbloom.svg'
			}
		];

	};

	angular.module('app')
		.controller('mainCtrl', ['$scope', '$document', mainCtrl]);

}());