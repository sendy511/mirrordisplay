requirejs.config({
	baseUrl: 'scripts',
	paths: {
		lib: 'lib',
		underscore: "lib/underscore"
	},
	shim: {
    	underscore: {
	 	   exports: '_'
    	}
    }
})

requirejs(["lib/react", "apps/mirror-display"], 
	function(React, MirrorDisplay){
        React.render(React.createElement(MirrorDisplay), 
        	document.getElementById('mirror_display_container'));
	}
);