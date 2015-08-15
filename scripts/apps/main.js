requirejs(["lib/react"], function(React){
	var Weather = React.createClass({
		render: function(){
			return (
				<div> it is good weather </div>
			)
		}
	});

	React.render(<Weather />, document.getElementById('weather'));
});