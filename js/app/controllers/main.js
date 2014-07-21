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
				image: 'sdfdsfd'
			},
			{
				client: 'Fraser',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'sdfdsfd'
			},
			{
				client: 'On Being',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'sdfdsfd'
			},
			{
				client: 'Wyndham Rewards',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'sdfdsfd'
			},
			{
				client: 'Blue Claw Co.',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'sdfdsfd'
			},
			{
				client: 'Isolate & Bloom',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet egestas augue, vel pellentesque nunc scelerisque in. Pellentesque sollicitudin egestas vulputate. Proin ligula tortor, porttitor vel accumsan blandit, laoreet sed mi. Vivamus laoreet feugiat lobortis.',
				link: 'dfsdf',
				image: 'sdfdsfd'
			}
		];

	};

	angular.module('app')
		.controller('mainCtrl', ['$scope', '$document', mainCtrl]);

}());