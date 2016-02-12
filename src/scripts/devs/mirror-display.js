define(["react", "lib/react-draggable", "apps/date-tile", "apps/weather-tile", "apps/praise-message-tile"], 
	function(React, Draggable, DateTile, WeatherTile, PraiseMessageTile){
		var MirrorDisplay = React.createClass({
			render: function(){
				var dateTileStyle = {
					position: "fixed",
					top: 50,
					left: 50
				};
				var weatherTileStyle = {
					position: "fixed",
					float: "right",
					top: 50,
					right: 50
				};
				var praiseMessageTileStyle = {
					position: "fixed",
					bottom: 20,
					right: "50%"
				};

				return (
					<div>
						<Draggable>
							<div style={dateTileStyle}>
								<DateTile />
							</div>
						</Draggable>
						<Draggable>
							<div style={weatherTileStyle}>
								<WeatherTile />
							</div>
						</Draggable>
						<Draggable>
							<div style={praiseMessageTileStyle}>
								<PraiseMessageTile />
							</div>
						</Draggable>
					</div>
				);
			}
		});

		return MirrorDisplay;
});
