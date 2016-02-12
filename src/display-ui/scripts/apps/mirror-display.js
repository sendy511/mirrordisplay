define(["react", "lib/react-draggable", "apps/date-tile", "apps/weather-tile", "apps/praise-message-tile"], function (React, Draggable, DateTile, WeatherTile, PraiseMessageTile) {
	var MirrorDisplay = React.createClass({
		displayName: "MirrorDisplay",

		getInitialState: function () {
			return { tilePositions: {
					"dateTile": { left: 50, top: 50 },
					"weatherTile": { left: 1000, top: 50 },
					"praiseMessageTile": { left: 300, top: 500 }
				}
			};
		},
		componentDidMount: function () {
			// Get Position from Server	
		},
		handleDateTileDragStop: function (event, ui) {
			this.updateTilePosition("dateTile", ui.position);
		},
		updateTilePosition: function (tileName, newPosition) {
			// Post to Server to save
		},
		render: function () {
			var dateTileStyle = {
				position: "fixed",
				top: this.state.tilePositions.dateTile.top,
				left: this.state.tilePositions.dateTile.left
			};
			var weatherTileStyle = {
				position: "fixed",
				float: "right",
				top: this.state.tilePositions.weatherTile.top,
				left: this.state.tilePositions.weatherTile.left
			};
			var praiseMessageTileStyle = {
				position: "fixed",
				top: this.state.tilePositions.praiseMessageTile.top,
				left: this.state.tilePositions.praiseMessageTile.left
			};

			return React.createElement(
				"div",
				null,
				React.createElement(
					Draggable,
					{ onStop: this.handleDateTileDragStop },
					React.createElement(
						"div",
						{ style: dateTileStyle },
						React.createElement(DateTile, null)
					)
				),
				React.createElement(
					Draggable,
					null,
					React.createElement(
						"div",
						{ style: weatherTileStyle },
						React.createElement(WeatherTile, null)
					)
				),
				React.createElement(
					Draggable,
					null,
					React.createElement(
						"div",
						{ style: praiseMessageTileStyle },
						React.createElement(PraiseMessageTile, null)
					)
				)
			);
		}
	});

	return MirrorDisplay;
});