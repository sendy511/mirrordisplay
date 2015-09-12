requirejs.config({
	baseUrl: 'scripts',
	paths: {
		lib: 'lib',
		jquery: "lib/jquery",
		underscore: "lib/underscore"
	},
	shim: {
    	underscore: {
	 	   exports: '_'
    	}
    }
})