(function(){

	var mainCtrl = function($scope, $document){
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
		.controller('mainCtrl', ['$scope', '$document', mainCtrl]);

}());