define(["lib/react", "apps/date-tile", "apps/weather-tile", "apps/praise-message-tile"], 
	function(React, DateTile, WeatherTile, PraiseMessageTile){
		var MirrorDisplay = React.createClass({
			render: function(){
				return (
					<div>
							<DateTile />

						<WeatherTile />
						<PraiseMessageTile />
					</div>
				);
			}
		});

		return MirrorDisplay;
});
