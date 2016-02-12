requirejs.config({
	baseUrl: 'scripts',
	paths: {
		underscore: "lib/underscore",
		jquery: "lib/jquery",
		react: "lib/react",
		"react-dom": "lib/react-dom"
	},
	shim: {
    	underscore: {
	 	   exports: '_'
    	}
    }
});

requirejs(["react", "react-dom", "apps/mirror-display"], 
	function(React, ReactDom, MirrorDisplay){
        ReactDom.render(React.createElement(MirrorDisplay), 
        	document.getElementById('mirror_display_container'));
	}
);
