define(["lib/react", "apps/date-tile", "apps/weather-tile"], 
	function(React, DateTile, WeatherTile){
		var MirrorDisplay = React.createClass({
			render: function(){
				return (
					<div>
						<DateTile />
						<WeatherTile />
					</div>
				);
			}
		});

		return MirrorDisplay;
});