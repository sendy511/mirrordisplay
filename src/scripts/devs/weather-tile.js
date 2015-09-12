define(["lib/react", "lib/jquery", "underscore"], 
	function(React, jquery, _){
		var WeatherTile = React.createClass({
			getDefaultProps: function(){
				return {
					other_locations: [
						{city:"NewYork", status:"Bright", temperature_degree:"23"},
						{city:"London", status:"Cloud", temperature_degree:"15"},
						{city:"Tokayo", status:"Fine", temperature_degree:"35"},
						{city:"Paris", status:"Rain", temperature_degree:"27"}
					]
				};
			},

			renderOtherLocations: function(){
				return _.map(this.props.other_locations, 
					function(weather_info){
						return (
							<li className="other-location">
								<span>{weather_info.city}</span>
								<span>{weather_info.status}</span>
								<span>{weather_info.temperature_degree}</span>
								<span>℃</span>
							</li>
						);
					}
				);
			},

			render: function(){
				// var openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=beijing,cn&callback=?"
				// $.getJSON(openWeatherUrl, function(json){
				// 	console.log(json);
				// });

				return (
					<div className="weather-tile"> 
						<div className="current-location">
							<i className="icon"></i>
							<span className="number">20</span>
							<span className="temperature-degree-symbol">℃</span>
						</div>
						<ul className="other-locations">
							{this.renderOtherLocations()}
						</ul>
					</div>
				);
			}
		});

		return WeatherTile;
	}
);