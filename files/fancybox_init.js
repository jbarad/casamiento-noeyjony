$(document).ready(function() {
	$(".various").fancybox({
        // 'autoScale'    : false, // not valid in v2.x, use autoSize instead
        // 'transitionIn' : 'none', // not valid in v2.x, use openEffect instead
        // 'transitionOut': 'none', // not valid in v2.x, use closeEffect instead
        width      : '90%',
        height     : '90%',
        padding    : 0,
        autoSize   : false,
        openEffect : 'none',
        closeEffect: 'none',
        type       : "iframe",
        iframe     : {
           preload : false // this will prevent to place map off center
        }
	});
});