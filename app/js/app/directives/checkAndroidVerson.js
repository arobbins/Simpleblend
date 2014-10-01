(function(){
	angular.module('app')
		.directive('androidCheck', function() {
			return {
				restrict: 'A',
				link: function(scope, element, attrs){

					var androidClass = 'android-sub44';
					var versionRaw = scope.getAndroidVersion();

					if(versionRaw === false){
						return;
					} else {
						var versionParsed = versionRaw.replace(/\./g,'');
						versionParsed = parseInt(versionParsed);

						if(versionParsed.toString().length == 3){
							versionParsed = parseInt(versionParsed.toString().slice(0, -1));
						}

						if(versionParsed < 44){
							element.addClass(androidClass);
						}
					}
				}
			};
		});
}());