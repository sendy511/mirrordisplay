define(["react", "apps/date-tile", "apps/weather-tile", "apps/praise-message-tile"], function (React, DateTile, WeatherTile, PraiseMessageTile) {
	var MirrorDisplay = React.createClass({
		displayName: "MirrorDisplay",

		render: function () {
			return React.createElement(
				"div",
				null,
				React.createElement(DateTile, null),
				React.createElement(WeatherTile, null),
				React.createElement(PraiseMessageTile, null)
			);
		}
	});

	return MirrorDisplay;
});
