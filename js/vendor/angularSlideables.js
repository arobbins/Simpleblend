angular.module('angularSlideables', [])
.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:2em 2em 4em 2em !important;" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '0.3s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'max-height': 0,
                    'opacity': 0,
                    'transitionProperty': 'all',
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
            	element.parent().parent().toggleClass('test');

                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');

                if(!attrs.expanded) {
                    target.style.maxHeight = 400 + 'px';
                    target.style.opacity = 1;
                } else {
                    target.style.maxHeight = 0;
                    target.style.opacity = 0;
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});