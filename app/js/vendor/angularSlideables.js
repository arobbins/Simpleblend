angular.module('angularSlideables', [])
.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content">' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '0.3s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'max-height': 0,
                    'transitionProperty': 'max-height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target, content;
            attrs.expanded = false;

            element.bind('click', function() {

                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');

                if(!attrs.expanded) {
                    target.style.maxHeight = 1400 + 'px';
                    target.style.opacity = 1;

                } else {
                    target.style.maxHeight = 0;
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});
