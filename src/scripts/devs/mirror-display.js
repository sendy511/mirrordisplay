define(["react", "lib/react-draggable", "apps/date-tile", "apps/weather-tile", "apps/praise-message-tile"], 
	function(React, Draggable, DateTile, WeatherTile, PraiseMessageTile){
		var MirrorDisplay = React.createClass({
			render: function(){
				return (
					<div>
						<Draggable start={{x:30, y:30}}> 
							<div>
								<DateTile />
							</div>
						</Draggable>
						<Draggable>
							<div>
								<WeatherTile />
							</div>
						</Draggable>
						<Draggable>
							<div>
								<PraiseMessageTile />
							</div>
						</Draggable>
					</div>
				);
			}
		});

		return MirrorDisplay;
});
