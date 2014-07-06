(function(){

	angular.module('app')
		.directive('scroll', function(){
			return {
				restrict: 'A',
				scope: {},
				link: function(scope, element, attrs){

					window.onscroll = function (event) {
					  var el = document.getElementsByClassName(attrs.class)[0],
					  		start = Math.abs(el.getBoundingClientRect().top),
							height = el.offsetHeight - 400,
							children = el.children,
							opacity = 1 - (start / height);

						for (var child = 0; child < children.length; ++child) {
						  children[child].style.opacity = opacity;
						}

					};

				}
			};
		});

}());