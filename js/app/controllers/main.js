(function(){

	var mainCtrl = function($scope){
		$scope.app = {};
		$scope.app.name = 'Simpleblend';

		$scope.work = {
			clients: [
				'amtrak',
				'rewardsrus',
				'wyndham',
				'fraser',
				'blueclawco',
				'gotham',
				'knot',
				'octane'
			]

		};

	};

	angular.module('app')
		.controller('mainCtrl', ['$scope', mainCtrl]);

}());