define(["lib/react", "lib/jquery"], function(React, jquery){
	var Weather = React.createClass({
		render: function(){
			var openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=beijing,cn&callback=?"
			$.getJSON(openWeatherUrl, function(json){
				console.log(json);
			});

			return (
				<div> it is good weather </div>
			)
		}
	});

	return Weather;
});