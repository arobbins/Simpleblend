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

		var sectionAbout = angular.element(document.getElementById('about'));

		$scope.toSection2 = function() {
			$document.scrollTo(sectionAbout, 0, 1000);
		};

	};

	angular.module('app')
		.controller('mainCtrl', ['$scope', '$document', mainCtrl]);

}());