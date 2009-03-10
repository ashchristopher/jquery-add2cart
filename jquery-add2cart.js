(function($) {
    $.extend({
	    add2cart: function(source_id, target_id, callback) {
            var source = $('#' + source_id );
            var target = $('#' + target_id );
            var display_image = $('#' + source_id).attr('src');
      
            var shadow = $('#' + source_id + '_shadow');
            if( !shadow.attr('id') ) {
                $('body').prepend('<div id="'+source.attr('id')+'_shadow" style="display: none; background-color: #ddd; border: solid 1px darkgray; position: static; top: 0px; z-index:100000"><img src="' + display_image + '" /></div>');
                var shadow = $('#'+source.attr('id')+'_shadow');
            }

            if( !shadow ) {
                alert('Cannot create the shadow div');
            }
      
            shadow.width(source.css('width')).height(source.css('height')).css('top', source.offset().top).css('left', source.offset().left).css('opacity', 0.5).show();
            shadow.css('position', 'absolute');
            shadow.animate(
                { top: target.offset().top, left: target.offset().left },
                300,
                'linear'
            ).animate(
                { opacity: 0 },
                { duration: 100, complete: callback },
                'linear',
                function() {
                    shadow.hide();
                }
            );
        }
    });
})(jQuery);
